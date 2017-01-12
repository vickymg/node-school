var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var filepath = process.argv[3];

var server = http.createServer(onConnection);

//   the two arguments are objects representing the HTTP request and the
//   corresponding response for this request - request is used to fetch
//   properties, such as the header and query-string from the request while
//   response is for sending data to the client, both headers and body

function onConnection (request, response) {
  var readStream = fs.createReadStream(filepath);
  readStream.pipe(response);
};

server.listen(port);