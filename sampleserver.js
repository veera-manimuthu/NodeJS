var http = require('http');
//var ip = require("ip");

function dealWithWebRequest(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("IP Address is --> " + request.connection.remoteAddress);
	response.write("Hello Node.js");
	response.end();
}

var webserver = http.createServer(dealWithWebRequest).listen(8124, "127.0.0.1");

webserver.once('listening', function() {
	console.log('Server running at http://127.0.0.1:8124/');
});

