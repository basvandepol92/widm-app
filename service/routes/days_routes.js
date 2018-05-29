// routes/service_routes.js
const COLLECTION = 'days';
const ERROR = {'error': 'An error has occurred'};

module.exports = (app, db) => {

    //Endpoints
    app.get('/api/days', getDays);

    function getDays(req, res) {
        db.collection(COLLECTION).find({}).toArray(function (err, notes) {
            if (err) {
                res.send(ERROR);
                return;
            }

            res.send(notes);
        });
    }
};