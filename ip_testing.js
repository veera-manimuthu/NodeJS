var http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type' : 'text-plain'});
	response.end('Hello World \n');
}).listen(8124);

console.log('server running at http://127.0.0.1:8124/');
/*
var ip;
function getIPAddress(req, res) {
	if (req.headers['x-forwarded-for']) {
		ip = req.headers['x-forwarded-for'].split(",")[0];
	} else if (req.connection && req.connection.remoteAddress) {
		ip = req.connection.remoteAddress;
	} else {
		ip = req.ip;
	}
	console.log("client IP is *********************" + ip);
	
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("IP Address is --> " + ip);
	res.write("Hello Node.js");
	res.end();
}

var webserver = protocol.createServer(getIPAddress).listen(1234, "localhost");

webserver.once('listening', function() {
	console.log('server started in localhost and running 1234 port');
});
*/