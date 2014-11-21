var filteredLs = require('./myModule');

filteredLs(process.argv[2], process.argv[3], function(err, files) {
    if(!err) {
	files.forEach(function(filename) {
	    console.log(filename);
	});
    }
});
