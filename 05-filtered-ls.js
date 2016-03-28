/**
 * @file
 * Learn Node - 05 Filtered LS.
 */

var fs = require('fs');
var path = require('path');

// Get the requested directory and extension.
var dir = process.argv[2];
var ext = process.argv[3];

// Check we have a directory.
if (dir) {
  // Read the directory contents.
  fs.readdir(dir, function getFileList(err, list) {
    // Show an error if it occurred.
    if (err) {
      console.log(err);
      return;
    }

    // Print the file list. Use a for loop instead of forEach as they are
    // a hell of a lot faster in js.
    for (var i = 0; i < list.length; i++) {
      printFile(list[i]);
    }
  });
}

/**
 * Prints a file name. Optionally this can be filtered by extension.
 *
 * @param string file
 *   File name from a directory.
 */
function printFile(file) {
  // Check if we have a requested file extension.
  if (ext) {
    // Check the extension matches.
    if (path.extname(file) === '.' + ext) {
      console.log(file);
    }
  }
  else {
    // Just print the file name as we have no requested extension.
    console.log(file);
  }
}
