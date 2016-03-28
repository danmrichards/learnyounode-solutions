/**
 * @file
 * Learn Node - Get URL contents module..
 */

var http = require('http');

var responseData = [];
var completeCounter = 0;

/**
 * Get the contents of the given URL.
 *
 * @param string url
 *   The URL to get the contents of.
 * @param int index
 *   The index of the current url in the urls array.
 */
module.exports = function getUrlContents(urls, index, callback) {
  // Get the URL contents.
  http.get(urls[index], function(response) {
    // Set the response encoding now, so we don't have to manually convert
    // each item in the buffer to a string.
    response.setEncoding('utf8');

    // Capcture each data chunk as it comes.
    response.on('data', function (chunk) {
      // Initialise the reponse item if it does not exist.
      if (typeof responseData[index] === 'undefined') {
        responseData[index] = '';
      }

      // Append the response chunk in the right place.
      responseData[index] += chunk;
    });

    // Fires when we're done with all the data.
    response.on('end', function () {
      // Increment the completion counter.
      completeCounter++;

      // We're done so show all the data.
      if (completeCounter === urls.length) {
        return callback(null, responseData);
      }
    });

    // Handle any errors.
    response.on('error', function (e) {
      return callback(e.message);
    });
  }).on('error', function(e) {
    return callback(e.message);
  });
};
