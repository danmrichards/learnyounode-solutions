/**
 * @file
 * Learn Node - Directory listing module.
 */

var fs = require('fs');
var path = require('path');

/**
 * List contents of a directory.
 *
 * @param string dir
 *   Path of the directory to list.
 * @param string ext
 *   File extension to filter by (optional).
 * @param string callback
 *   Callback function to execute on completion.
 */
module.exports = function listDirectory(dir, ext, callback) {
  // Check we have a directory.
  if (dir) {
    // Read the directory contents.
    fs.readdir(dir, function getFileList(err, list) {
      // Show an error if it occurred.
      if (err) {
        return callback(err);
      }

      // Check if we have a requested file extension.
      if (ext) {
        // Filter the list by the requested extension.
        list = list.filter(function (file) {
          return path.extname(file) === '.' + ext;
        });
      }

      return callback(null, list);
    });
  }
};
