var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, function(err, data){
    if(!err) {
	var fileContent = data.toString();
	console.log(fileContent.split('\n').length - 1);
    }
});


