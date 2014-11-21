var http = require('http');
var url = require('url');


function parsetime(time) {
    return {
	hour: time.getHours(),
	minute: time.getMinutes(),
	second: time.getSeconds()
    }
}

function unixtime(time) {
    return {
	unixtime: time.getTime()
    };
}

function writeResult(res, time, f) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(f(time)));
}

var server = http.createServer(function(req, res) {
    var location = url.parse(req.url, true);
    var d = new Date(location.query.iso);
    if (location.pathname === '/api/unixtime') {
	writeResult(res, d, unixtime);
	return;
    }

    if (location.pathname === '/api/parsetime') {
	writeResult(res, d, parsetime);
	return;
    }
    
    res.writeHead(404);
    res.end();
});

server.listen(process.argv[2]);
