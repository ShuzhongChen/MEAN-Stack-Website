var express = require('express');
var app = express();
var path = require('path');

var port = process.env.PORT;

app.set('view engine', 'jade');
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function(req, res){
    res.render('index.jade');
});

app.listen(port, function(){
    console.log('SERVER RUNNIDNG... PORT: ' + port);
});