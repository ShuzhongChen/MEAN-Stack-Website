//Initialize our Express Web framework.
var express = require('express');
var app = express();

//native NodeJS module for resolving paths
var path = require('path');

//setup, configure, and connect to MongoDB
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');
mongoose.connect(configDB.url, {useMongoClient: true});

//get our port # from c9's enviromental variable: PORT
var port = process.env.PORT;

//Set our view engine to jade, and set the directory our views will be stored in
app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, 'client', 'views'));

//serve static files from client folder.
//ex: libs/bootstrap/bootstrap.css in our html actually points to client/libs/bootstrap/bootstrap.css
app.use(express.static(path.resolve(__dirname, 'client')));

//set our first route
app.get('/', function(req, res){
    res.render('index.jade');
});

var api = express.Router();
require('./server/routes/api')(api);
app.use('/api', api);

app.listen(port, function(){
    console.log('SERVER RUNNIDNG... PORT: ' + port);
});