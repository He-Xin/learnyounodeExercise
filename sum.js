var args = process.argv;

var sumOfInt = args.slice(2).reduce(function(a,b){ return Number(a)+ Number(b) }, 0);

console.log(sumOfInt);
