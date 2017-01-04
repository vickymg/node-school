var filter = require('./filter');

var directory = process.argv[2];
var ext = process.argv[3];

filter(directory, ext, function(err, list) {
  if (err) console.log(err);
  list.forEach(function(file) {
    console.log(file);
  });
});