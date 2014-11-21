var path = require('path');
var fs = require('fs');

var dirPath = process.argv[2];
var ext = "." + process.argv[3];

fs.readdir(dirPath, function(err, fileNames) {
    if(!err) {
	fileNames.forEach(function(elem) {
	    if(path.extname(elem)===ext) {
		console.log(elem);
	    }
	});
    }
});

