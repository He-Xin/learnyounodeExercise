var path = require('path');
var fs = require('fs');

function filterLs(dirPath, ext, callback) {
    fs.readdir(dirPath, function(err, fileNames) {
	if (err) {
	    return callback(err);
	}
	ext = "." + ext;
	var filtered = fileNames.filter(function(elem) {
	    return path.extname(elem)===ext;
	});
	return callback(null, filtered);
    });
}

module.exports = filterLs;
