// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;

const COLLECTION = 'days';
const SCORE_COLLECTION = 'score';
const MEMBER_COLLECTION = 'members';
const ERROR = {'error': 'An error has occurred'};
const WIDM_ID = '5b1d7a9476dfc00518964297';

module.exports = (app, db) => {

    //Endpoints
    app.put('/api/questions/:id', postQuestions);
    app.get('/api/questions/:id', getQuestions);
    app.post('/api/questions/:dayid/:memberid', validateAnswers);

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

    function getQuestions(req, res) {
        const queryObject = getIdObject(req.params.id);

        db.collection(COLLECTION).find(queryObject).toArray(function (err, day) {
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

            if(req.body[req.body.length - 1] === WIDM_ID) {
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