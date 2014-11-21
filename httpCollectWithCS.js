var http = require('http');
var cs = require('concat-stream');

http.get(process.argv[2], function(response) {
    response.pipe(cs(function(data){
	data = data.toString();
	console.log(data.length);
	console.log(data);
    }));
});
