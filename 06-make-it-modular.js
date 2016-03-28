/**
 * @file
 * Learn Node - 06 Make it Modular.
 */

var listDir = require('./modules/listdir.js');

// Get the requested directory and extension.
var dir = process.argv[2];
var ext = process.argv[3];

// Get the directory listing.
listDir(dir, ext, function(err, list) {
  // Show an error if it occurred.
  if (err) {
    return console.error('There was an error:', err);
  }

  // Print the file list. Use a for loop instead of forEach as they are
  // a hell of a lot faster in js.
  for (var i = 0; i < list.length; i++) {
    console.log(list[i]);
  }
});
