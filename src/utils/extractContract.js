var fs = require('fs');

var file = fs.readFileSync('../contracts/Test.json');
var content = JSON.parse(file);
console.log(content.abi);
