// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;

const COLLECTION = 'score';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.get('/api/scores', getScores);

    function getScores(req, res) {
        console.log('Y U NO SCORES?');
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
};


