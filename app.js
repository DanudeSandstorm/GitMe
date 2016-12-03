var express = require('express'),
  	app = express(),
  	logger = require('morgan'),
  	st = require('st');


app.use(logger('dev'));

var shorten_url = st({ 
	path: __dirname + '/html', 
	url: '/',
	passthrough: true,
	cache: false,
	cors: true
});

var mount = st({ 
	cache: false,
	path: process.cwd(),
	cors: true 
});

var login = false;
app.get('/', function (req, res, next) {
	console.log(login);
	if (!login) {
		res.redirect('/loginPage.html');
	} 
	else {
  		res.sendFile( __dirname + '/html/homepage.html', {etag: false});
	}
});

app.post('/login', function(req, res, next) {
	login = true;
	console.log(login);
	res.redirect('/');
});

app.get('/logout', function(req, res, next) {
	login = false;
	res.redirect('/');
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
