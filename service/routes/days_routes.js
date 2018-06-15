// routes/service_routes.js
const ObjectID = require('mongodb').ObjectID;

const COLLECTION = 'days';
const MEMBERS_COLLECTION = 'members';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.get('/api/days', getDays);
    app.get('/api/days-by-member/:id', getDaysByMember);
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

    function getDaysByMember(req, res) {
        const memberId = req.params.id;
        db.collection(COLLECTION).find({}, { 'questions': 0 }).toArray(function (err, days) {
            if (err) {
                res.send(ERROR);
                return;
            }

            getMember(res, memberId, function (member) {
                let memberAnsweredDays = member.answered_questions || [];
                days.forEach((day) => {
                    day.answered = memberAnsweredDays.includes(day._id.toString());
                });
                res.send(days);
            });
        });
    }

    function getMember(res, memberId, callback) {
        let queryObject = getIdObject(memberId);
        db.collection(MEMBERS_COLLECTION).find(queryObject).toArray(function (err, member) {
            if (err) {
                res.send(ERROR);
                return;
            }
            callback(member[0]);
        });
    }

    function getIdObject(id) {
        return {
            '_id': new ObjectID(id)
        };
    }
};