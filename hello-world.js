var express = require('./lib/node_modules/express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

// respond with "hello world" when a GET request is made to the homepage
app.get('/secret', function(req, res) {
  res.send('hello son');
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});