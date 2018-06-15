// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;
const WIDM_ID = require('./config').WIDM_ID;

const COLLECTION = 'days';
const SCORE_COLLECTION = 'score';
const MEMBER_COLLECTION = 'members';
const ERROR = {'error': 'An error has occurred'};
const ALREADY_ANSWERED_ERROR = {'error': 'An error has occurred', 'already_answered': true};


module.exports = (app, db) => {

    //Endpoints
    app.put('/api/questions/:id', postQuestions);
    app.get('/api/questions-with-answers/:id', getQuestionsWithAnswers);
    app.post('/api/questions/:dayid/:memberid', validateAnswers);
    app.get('/api/questions/:id/:memberid', getQuestionsWithoutAnswers);

    function postQuestions(req, res) {
        const queryObject = getIdObject(req.params.id);
        let updateObject = {
            $set: {
                questions: req.body.questions
            }
        };

        db.collection(COLLECTION).update(queryObject, updateObject, {upsert: true}, (err, result) => {
            if (err && err.status !== 200) {
                res.send(ERROR);
                return;
            }

            res.send({
                status: `Question ${req.params.id} updated`
            });
        });
    }

    function getQuestionsWithoutAnswers(req, res) {
        const queryObject = getIdObject(req.params.id);
        const excludeObject = {'questions.correct_answer': 0};

        checkIfUserHasAnsweredBefore(req.params.memberid, req.params.id, function (alreadyAnswered) {
            if (alreadyAnswered) {
                res.send(ALREADY_ANSWERED_ERROR);
                return;
            }

            getQuestions(req, res, queryObject, excludeObject);
        });
    }

    function checkIfUserHasAnsweredBefore(memberId, dayId, callback) {
        const queryObject = getIdObject(memberId);
        db.collection(MEMBER_COLLECTION).find(queryObject).toArray(function (err, members) {
            if (err || members.length === 0) {
                callback(true);
                return;
            }

            let answeredQuestion = false;
            const member = members[0];
            let answeredQuestionArray = [];

            if (member && member.answered_questions) {
                answeredQuestionArray = member.answered_questions.filter(function (answer) {
                    return answer === dayId;
                });
            }

            if (answeredQuestionArray.length > 0) {
                answeredQuestion = true;
            }

            callback(answeredQuestion);
        });
    }

    function getQuestionsWithAnswers(req, res) {
        const queryObject = getIdObject(req.params.id);
        const excludeObject = {};

        getQuestions(req, res, queryObject, excludeObject);
    }

    function getQuestions(req, res, queryObject, excludeObject) {
        db.collection(COLLECTION).find(queryObject, excludeObject).toArray(function (err, day) {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(day[0].questions);
        });
    }

    function validateAnswers(req, res) {
        const saveObject = {
            member_id: req.params.memberid,
            day_id: req.params.dayid,
            score: 0,
            answers: req.body
        };

        getAnswers(saveObject.day_id, function (questions) {

            //validate answers
            for (let i = 0; i < questions.length; i++) {
                const answerId = getAnswerId(questions[i].correct_answer);
                const correctAnswer = questions[i][answerId];
                const providedAnswer = req.body[i];

                if (correctAnswer === providedAnswer) {
                    saveObject.score++
                }
            }

            if (req.body[req.body.length - 1] === WIDM_ID) {
                saveObject.score += 2;
            }

            saveMarkedAsMol(res, saveObject, function (molSaved) {
                if (molSaved) {
                    updateMember(res, saveObject, function (memberUpdated) {
                        if (memberUpdated) {
                            saveScore(res, saveObject);
                        }
                    });
                }
            });
        });
    }

    function updateMember(res, saveObject, callback) {
        const idObject = getIdObject(saveObject.member_id);
        let updateObject = {
            $push: {
                answered_questions: saveObject.day_id
            }
        };
        db.collection(MEMBER_COLLECTION).update(idObject, updateObject, {upsert: true}, (err) => {
            if (err && err.status !== 200) {
                res.send(ERROR);
                return;
            }

            callback(true);
        });
    }

    function saveMarkedAsMol(res, saveObject, callback) {
        let markedAsMol = saveObject.answers.length;
        markedAsMol = saveObject.answers[markedAsMol - 1];
        const idObject = getIdObject(markedAsMol);
        let updateObject = {
            $inc: {
                markedAsMol: 1
            }
        };
        db.collection(MEMBER_COLLECTION).update(idObject, updateObject, {upsert: true}, (err) => {
            if (err && err.status !== 200) {
                res.send(ERROR);
                return;
            }

            callback(true);
        });
    }

    function saveScore(res, saveObject) {
        db.collection(SCORE_COLLECTION).insert(saveObject, (err) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send({
                status: 200,
                message: `Score for user ${saveObject.member_id} updated`
            });
        });
    }

    function getAnswerId(index) {
        switch (index) {
            case 0:
                return 'answer_a';
            case 1:
                return 'answer_b';
            case 2:
                return 'answer_c';
            case 3:
                return 'answer_d';
        }
    }

    function getAnswers(dayId, callback) {
        let queryObject = getIdObject(dayId);
        db.collection(COLLECTION).find(queryObject).toArray(function (err, day) {
            if (err) {
                res.send(ERROR);
                return;
            }

            callback(day[0].questions);
        });
    }


    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }
};