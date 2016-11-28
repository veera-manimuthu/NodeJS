process.on('SIGINT', function () {
  console.log('Got SIGINT.  Press Control-D to exit.');
});

console.log('This process is pid ' + process.pid);
// Get version of nodejs
console.log('Version: ' + process.version);

try {
	process.kill(process.pid, 'SIGINT');
} catch (err) {
	console.log ('Exception occurred' + err);
}
