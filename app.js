var express = require('express'),
	cors = require('cors'),
  	app = express();

app.use(express.static(__dirname));

console.log("app starting on port 3000");
app.listen(3000);
