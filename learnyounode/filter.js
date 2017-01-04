module.exports = filter;

var fs = require('fs');

function filter(dirName, ext, callback) {
  var filteredList = [];

  fs.readdir(dirName, function(err, list) {
    if (err) return callback(err);

    list.forEach(function(file) {
      var fileExt = file.split('\.');
      if (fileExt[1] === ext) {
        filteredList.push(file);
      }
    });

    callback(null, filteredList);
  });
}