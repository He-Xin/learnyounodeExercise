var http = require('http');
var cs = require('concat-stream');

var counter = 0;

var urls = [process.argv[2], process.argv[3], process.argv[4]];

var rs = [], counter = 0;

function print(index, data) {
    counter ++;
    rs[index] = data;
    if (counter == urls.length) {
	rs.forEach(function(e) {
	    console.log(e);
	});
    }
}

urls.forEach(function(url, index) {
    http.get(url, function(response) {
	response.pipe(cs(function(data){
	    print(index, data.toString());
	}));
    });
})
