var ip = require("ip");
console.dir ( ip.address() );


var protocol = require("http");
var iprotocol;
function getIPAddress(request, response) {
	if (request.headers['x-forwarded-for']) {
		iprotocol = request.headers['x-forwarded-for'].split(",")[0];
	} else if (request.connection && request.connection.remoteAddress) {
		iprotocol = request.connection.remoteAddress;
	} else {
		iprotocol = request.ip;
	}
	console.log("client IP is *********************" + iprotocol);
	
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.write("IP Address is --> " + iprotocol);
	response.write("Hello Node.js");
	response.end();
}

var webserver = protocol.createServer(getIPAddress).listen(1234, "localhost");

webserver.once('listening', function() {
	console.log('server started in localhost and running 1234 port');
});