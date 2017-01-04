var fs = require('fs');

var directory = process.argv[2];
var ext = process.argv[3];

fs.readdir(directory, function(err, list) {
  if (err) {
    return console.error(err)
  }

  list.forEach(function(file) {
    var fileExt = file.split('\.');
    if (fileExt[1] === ext) {
      console.log(file);
    }
  });
});


// Alternative solution using path module

var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})