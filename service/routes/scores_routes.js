// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;
const WIDM_ID = require('./config').WIDM_ID;

const COLLECTION = 'score';
const MEMBER_COLLECTION = 'members';
const SCORES_COLLECTION = 'score';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.get('/api/scores', getScores);
    app.get('/api/scores/total-widm-scores', getTotalWidmScores);
    app.get('/api/scores/total-top-widm-scores', getTotalTopWidmScores);

    function getScores(req, res) {
        db.collection(COLLECTION).aggregate([
            {$group: {"_id": "$member_id", "score": {$sum: "$score"}}}
        ]).toArray(function (err, scores) {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(scores);
        });
    }

    function getTotalWidmScores(req, res) {
        let queryObject = getIdObject(WIDM_ID);

        db.collection(MEMBER_COLLECTION).find(queryObject).toArray(function (err, member) {
            if (err) {
                res.send(ERROR);
                return;
            }

            let score = {}
            if (member.length > 0) {
                score = {
                    'score': member[0].markedAsMol || 0
                };
            }

            res.send(score);
        });
    }

    function getTotalTopWidmScores(req, res) {
        db.collection(SCORES_COLLECTION).find({}).toArray(function (err, scores) {
            if (err) {
                res.send(ERROR);
                return;
            }

            groupTopScores(scores, function(responseArray) {
                if(responseArray) {
                    res.json(responseArray);
                }
            });
        });
    }

    function groupTopScores(scores, callback) {
        let scoreArray  = {};
        let scoreCounter = 0;

        scores.forEach((score) => {
            const memberId = score.member_id;
            scoreArray[memberId] = scoreArray[memberId] || {id: memberId, score:0};
            scoreArray[memberId].score = scoreArray[memberId].score || 0;

            if(score.answers[score.answers.length - 1] === WIDM_ID) {
                scoreArray[memberId].score = scoreArray[memberId].score + 1;
            }

            scoreCounter++;
            if(scoreCounter === scores.length - 1) {
                callback(scoreArray);
            }
        });
    }


    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }


};


