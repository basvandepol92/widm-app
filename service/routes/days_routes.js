// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;

const COLLECTION = 'days';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.get('/api/days', getDays);
    app.post('/api/days', postDay);
    app.delete('/api/days/:id', deleteDay);


    function getDays(req, res) {
        db.collection(COLLECTION).find({}).toArray(function (err, notes) {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(notes);
        });
    }

    function postDay(req, res) {
        const note = {
            description: req.body.description,
        };

        db.collection(COLLECTION).insert(note, (err, result) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(result.ops[0]);
        });
    }

    function deleteDay(req, res) {
        const id = req.params.id;
        const details = getIdObject(id);

        db.collection(COLLECTION).remove(details, (err) => {
            if (err && err.status !== 200) {
                res.send(ERROR);
                return;
            }

            res.send({
                status: `Question ${req.params.id} updated`
            });
        });
    }

    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }
};