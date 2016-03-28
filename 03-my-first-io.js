/**
 * @file
 * Learn Node - 03 My First I/O.
 */

var fs = require('fs');

// Check we have a file to read.
if (process.argv[2]) {
  // Read to a buffer and split into an array of lines.
  var buffer = fs.readFileSync(process.argv[2]);
  var newLines = buffer.toString().split('\n').length - 1;

  console.log(newLines);
}
