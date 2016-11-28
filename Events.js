console.log('Started executing events.js file');

/* exit Event - Emitted when the process is about to exit. This is a good hook to perform constant time checks of the module's state (like for unit tests). The main event loop will no longer be run after the 'exit' callback finishes, so timers may not be scheduled. */

process.on('exit', function () {
  process.nextTick(function () {
   console.log('This will not run');
  });
  console.log('About to exit.');
});

// Timeout in milli seconds
setTimeout(function () {
  console.log('This will still run.');
}, 3000);

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ' + err);
});

// Intentionally causing an exception, but don't catch it.
nonexistentFunc();