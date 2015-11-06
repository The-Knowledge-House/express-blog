var express = require('express'); 

var routes = express.Router();

var ideaEngine = require('../ideas');

routes.get('/', function(req, res){
	res.render('index', { title : 'Home Page', ideas : ideaEngine.getIdeas()});
});

routes.get('/about', function(req, res){
	res.render('about', { title : 'About Page', description : 'This is a practice page!'} );
});

routes.get('/article/:id', function(req, res){
	var idea = ideaEngine.getOneIdea(req.params.id);
	console.log(idea)
	res.render('article', {idea:idea});
});

module.exports = routes; 