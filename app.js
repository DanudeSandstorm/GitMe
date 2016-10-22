var express = require('express'),
	cors = require('cors'),
  	app = express();

app.use(express.static(__dirname));

// app.use(express.static(__dirname + '/lib'));
// app.use(express.static(__dirname + '/partials'));
// app.use(express.static(__dirname + '/resources'));
// app.use(express.static(__dirname + '/html'));

// router.get('/', function(req, res) {
// 	console.log('res');
//   res.sendfile(__dirname + '/index.html');
// });

console.log("app starting on port 3000");
app.listen(3000);
