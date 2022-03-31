var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var server = require('http').Server(app);

var port = process.env.PORT || 4000;

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

const routes = require('./src/route/user.route')

app.use('/user', routes)

app.get("/", (req, res, next) => {
	res.json("Estamos de pé!");
});

server.listen(port, () => {
    console.log('Listening on port: ' + port);
});