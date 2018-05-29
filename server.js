// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const path = require('path');

const app = express();
app.use(bodyParser.json());


MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    const dirName = __dirname + '/app/dist/widm-app';
    require('./service/routes')(app, database);

    app.use(express.static(dirName));
    app.get('/*', function(req, res) {
        res.sendFile(path.join(`${dirName}/index.html`));
    });

    app.listen(process.env.PORT || 5000)
});




