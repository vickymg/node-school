var args = process.argv.splice(1 + 1);
var numbers = args.map(Number);
var sum = numbers.reduce(function(a, b) {
  return a + b;
}, 0);

console.log(sum);
