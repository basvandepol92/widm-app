// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;
const WIDM_ID = require('./config').WIDM_ID;

const COLLECTION = 'score';
const MEMBER_COLLECTION = 'members';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.get('/api/scores', getScores);
    app.get('/api/scores/total-widm-scores', getTotalWidmScores);

    function getScores(req, res) {
        db.collection(COLLECTION).aggregate([
            {$group : {"_id": "$member_id", "score": {$sum: "$score"}}}
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

            let score = {
              'score': member[0].markedAsMol || 0
            };

            res.send(score);
        });
    }

    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }


};


