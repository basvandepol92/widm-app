// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;

const COLLECTION = 'days';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.put('/api/questions/:id', postQuestions);
    app.get('/api/questions/:id', getQuestions);

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




    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }
};