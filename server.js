// Get the dependencies

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

// Body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'dist/my-project')));

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const port = process.env.PORT || '3200';
app.set('port', port);


// Create HTTP server
const server = http.createServer(app);
server.listen( port , () => console.log('Running on port 3200'));

//MongoDB
// var mongoose = require('mongoose');
// var db = mongoose.createConnection('mongodb://localhost:27017/webdev',{useNewUrlParser:true});

var localConnectionString = 'mongodb://localhost:27017/webdev';

var connectionString = 'mongodb://shmostin:wexkaj-wakqyz-7Vazje@ds145790.mlab.com:45790/heroku_g477qtmg';
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const client = mongoose.connect( localConnectionString, { useNewUrlParser: true });

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

require('./assignment/app')(app);
