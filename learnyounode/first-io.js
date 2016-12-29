// get the fs filesystem library from node core modules
var fs = require('fs');
// read the path to the test file passed in as a command line argument
var path = process.argv[2];
var file = fs.readFileSync(path).toString();

var result = file.split('\n').length -1;

console.log(result);

