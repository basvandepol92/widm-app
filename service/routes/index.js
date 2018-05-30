//const serviceRoutes = require('./service_routes');
const memberRoutes = require('./member_routes');
const daysRoutes = require('./days_routes');
const questionRoutes = require('./questions_routes');

module.exports = (app, db) => {
    memberRoutes(app, db);
    daysRoutes(app, db);
    questionRoutes(app, db);
};
