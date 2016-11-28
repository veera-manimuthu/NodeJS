var protocol = require("http");

function showAlert(request, response) {
	response.writeHead(200, {"Content-Type" : "text/plain"});
	response.alert("How do you do?");
	response.end();
}

var webserver = protocol.createServer(showAlert).listen(1234, "localhost");

webserver.once('listening', function() {
	console.log('server started in localhost and running 1234 port');
});