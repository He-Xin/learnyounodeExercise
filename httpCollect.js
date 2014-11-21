var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    var rs = [];
    response.setEncoding('utf8');
    response.on('data', function(data) {
	rs.push(data);
    });
    response.on('end', function() {
	var result = rs.join('');
	console.log(result.length);
	console.log(result);
    });
});
