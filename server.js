'use strict';
var express = require("express");
const path = require('path');

var app = express();
var port = process.env.PORT || 1337;
var server = app.listen(port);
const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

console.log('Server started at http://localhost:' + port);