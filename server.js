// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.json());
app.use(cors(corsOptions));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    const dirName = __dirname + '/dist';
    require('./service/routes')(app, database);

    app.use(express.static(dirName));
    app.get('/*', function(req, res) {
        res.sendFile(path.join(`${dirName}/index.html`));
    });

    app.listen(process.env.PORT || 5000)
});




