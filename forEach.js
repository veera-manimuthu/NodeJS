
process.argv.forEach(function (val, index, array) {
	console.log(index + ' : ' + val);
});

/* Sample input - D:\NodeJS>node F:\Projects\NodeJS_apps\forEach.js first second third
Output - 
0 : D:\NodeJS\node.exe
1 : F:\Projects\NodeJS_apps\forEach.js
2 : first
3 : second
4 : third
*/

/*
	process.chdir(directory)

Changes the current working directory of the process or throws an exception if that fails.


console.log('Starting directory: ' + process.cwd());
try {
  process.chdir('/tmp');
  console.log('New directory: ' + process.cwd());
}
catch (err) {
  console.log('chdir: ' + err);
}

*/