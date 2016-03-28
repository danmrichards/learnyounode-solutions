/**
 * @file
 * Learn Node - 04 My First Async I/O.
 */

var fs = require('fs');

// Check we have a file to read.
if (process.argv[2]) {
  // Read to a buffer and split into an array of lines.
  fs.readFile(process.argv[2], function getNewLines(err, contents) {
    // Show an error if it occurred.
    if (err) {
      console.log(err);
      return;
    }

    var newLines = contents.toString().split('\n').length - 1;

    console.log(newLines);
  });
}
