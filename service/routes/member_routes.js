// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'members';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.post('/api/members', postMembers);
    app.get('/api/members', getMembers);
    app.delete('/api/members/:id', deleteMember);


    function postMembers(req, res) {
        const note = {
            name: req.body.name,
        };

        db.collection(COLLECTION).insert(note, (err, result) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(result.ops[0]);
        });
    }

    function getMembers(req, res) {
        db.collection(COLLECTION).find({}).toArray(function (err, notes) {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(notes);
        });
    }

    function deleteMember(req, res) {
        const id = req.params.id;
        const details = getIdObject(id);

        db.collection(COLLECTION).remove(details, (err) => {
            if (err && err.status !== 200) {
                res.send(ERROR);
                return;
            }

            res.send('Note ' + id + ' deleted');
        });
    }

    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }
};