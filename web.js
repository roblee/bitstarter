var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var readableStream = fs.createReadStream("index.html", {flags: 'r', encoding: 'utf8'});
  //var buf = new Buffer("hello world from buffer");
  var buf = readableStream.read(); 
  response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


