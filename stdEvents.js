// D:\NodeJS>node F:\Projects\NodeJS_apps\stdEvents.js

var stdin = process.openStdin();

stdin.on('data', function (chunk) {
	process.stdout.write('data: ' + chunk);
});

stdin.on('end', function () {
	process.stdout.write('end');
});