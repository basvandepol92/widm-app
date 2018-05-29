// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;
const COLLECTION = 'notes';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.post('/notes', postNotes);
    app.get('/notes', getAllNotes);
    app.get('/notes/:id', getNote);
    app.delete('/notes/:id', deleteNote);
    app.put('/notes/:id', updateNote);

    function postNotes(req, res) {
        const note = {
            text: req.body.body,
            title: req.body.title
        };

        db.collection(COLLECTION).insert(note, (err, result) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(result.ops[0]);
        });
    }

    function getAllNotes(req, res) {
        db.collection(COLLECTION).find({}).toArray(function (err, notes) {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(notes);
        });
    }

    function getNote(req, res) {
        const id = req.params.id;
        const details = getIdObject(id);

        db.collection(COLLECTION).findOne(details, (err, item) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(item);
        });
    }

    function deleteNote(req, res) {
        const id = req.params.id;
        const details = getIdObject(id);

        db.collection(COLLECTION).remove(details, (err) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send('Note ' + id + ' deleted');
        });
    }

    function updateNote(req, res) {
        const id = req.params.id;
        const details = getIdObject(id);
        const note = {text: req.body.body, title: req.body.title};

        db.collection(COLLECTION).update(details, note, (err, result) => {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(note);
        });
    }

    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }
};