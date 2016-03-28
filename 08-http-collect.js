/**
 * @file
 * Learn Node - 08 HTTP Collect.
 */

var http = require('http');

// Get the requested URL.
var url = process.argv[2];

var responseData = '';

// Check we have a url.
if (url) {
  // Get the URL contents.
  http.get(url, function(response) {
    // Set the response encoding now, so we don't have to manually convert
    // each item in the buffer to a string.
    response.setEncoding('utf8');

    // Capcture each data chunk as it comes.
    response.on('data', function (chunk) {
      responseData += chunk;
    });

    // When we're done with all the data, print the length and data itself.
    response.on('end', function () {
      console.log(responseData.length);
      console.log(responseData);
    });

    // Handle any errors.
    response.on('error', console.error);
  }).on('error', function(e) {
    return console.error('There was an error:', e.message);
  });
}
