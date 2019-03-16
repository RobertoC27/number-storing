var fs = require('fs');

var file = fs.readFileSync('../contracts/Test.json');
var content = JSON.parse(file);
console.log(content.abi);
fs.writeFileSync('prueba.json', content.abi.toString());
console.log(__dirname);

