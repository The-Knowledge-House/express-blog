var entries = [
	{'id':1,'title':'idea1','body':'this is my first idea', 'published': '11/05/2015'},
	{'id':2, 'title': 'idea2', 'body':'THis is my second idea', 'published': '11/05/2015'},
	{'id':3, 'title': 'idea3', 'body':'THis is my thrid idea', 'published': '11/05/2015'}
	];


exports.getIdeas = function(){
	return entries;
}

exports.getOneIdea = function(id){
	for(var i=0; i < entries.length; i++){
		if (entries[i].id == id ){
			return entries[i];
		};
	};
}