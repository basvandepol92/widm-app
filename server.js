// server.js
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const cors = require('cors')

const app = express();
//const port = 2222;
const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(bodyParser.json())
app.use(cors(corsOptions));

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    require('./service/routes')(app, database);
    /*app.listen(port, () => {
        console.log('We are live on ' + port);
    });*/
    app.listen(process.env.PORT || 5000)
});


app.use( express.static(__dirname + '/app/dist/widm-app/' ) );