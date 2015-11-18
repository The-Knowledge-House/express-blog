var express = require('express'); //load the express lib into the app.js file 
var app = express(); //initlaize express 
var routes = require('./routes/routes');
var ideaEngine = require('./ideas'); 

var hbs = require('hbs');//load handlebars into the app.js file 


app.set('view engine', 'html'); //say to use html files as views
app.engine('html', require('hbs').__express); //treat your html files as if they were hbs files.
app.use(express.static('static'));

// routes!!!!!!!!!!!!!!!!!!!!!
app.use('/', routes);

//404 error handler
app.use(function(req, res, next){
	res.status(404);
	res.render('404', {title: 'This page is not found.'});
});

//500 error handler 
app.use(function(err, req, res, next){
	res.status(500);
	res.render('500', {title: 'Internal Error'});
});

// Port 




app.listen(3000); //listening for code on port 3000 local host. 

console.log('Node running on port 3000'); //server confirmation 



module.exports = app;