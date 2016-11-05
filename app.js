var express = require('express'),
  	app = express(),
  	st = require('st');


var shorten_url = st({ 
	path: __dirname + '/html', 
	url: '/',
	passthrough: true,
	cors: true
});

var mount = st({ 
	path: process.cwd(),
	cors: true 
});


app.get('/', function (req, res, next) {
  	res.sendFile( __dirname + '/html/homepage.html');
});

app.get('/lib/*', function (req, res, next) {
	mount(req, res, next);
});

app.get('/resources/*', function (req, res, next) {
	mount(req, res, next);
});

app.get('*', function (req, res, next) {
	//Lastly use the url reducing
	shorten_url(req, res, function() {
		res.redirect('/404.html');
	});
});

console.log("GitMe starting on port 3000");
app.listen(3000);
