//const serviceRoutes = require('./service_routes');
const memberRoutes = require('./member_routes');
const daysRoutes = require('./days_routes');

module.exports = (app, db) => {
    memberRoutes(app, db);
    daysRoutes(app, db);
};
