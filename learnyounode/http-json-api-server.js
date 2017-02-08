var http = require('http');
var url = require('url');
var port = process.argv[2];

var server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'application/json' })
  var query = url.parse(request.url, true);
  var date = new Date(query.query.iso);
  var formattedDate = {}

  if (query.pathname == '/api/parsetime') {
    formattedDate = JSON.stringify({
      'hour': date.getHours(),
      'minute': date.getMinutes(),
      'second': date.getSeconds()
    });
  } else {
    formattedDate = JSON.stringify({
      'unixtime': date.getTime()
    });
  }

  if (formattedDate) {
    response.write(formattedDate);
    response.end();
  } else {
    response.writeHead(404)
    response.end();
  }

});

server.listen(port);


// Official solution

// var http = require('http')
//  var url = require('url')
//
//  function parsetime (time) {
//    return {
//      hour: time.getHours(),
//      minute: time.getMinutes(),
//      second: time.getSeconds()
//    }
//  }
//
//  function unixtime (time) {
//    return { unixtime: time.getTime() }
//  }
//
//  var server = http.createServer(function (req, res) {
//    var parsedUrl = url.parse(req.url, true)
//    var time = new Date(parsedUrl.query.iso)
//    var result
//
//    if (/^\/api\/parsetime/.test(req.url)) {
//      result = parsetime(time)
//    } else if (/^\/api\/unixtime/.test(req.url)) {
//      result = unixtime(time)
//    }
//
//    if (result) {
//      res.writeHead(200, { 'Content-Type': 'application/json' })
//      res.end(JSON.stringify(result))
//    } else {
//      res.writeHead(404)
//      res.end()
//    }
//  })
//  server.listen(Number(process.argv[2]))