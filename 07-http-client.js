/**
 * @file
 * Learn Node - 07 HTTP Client.
 */

var http = require('http');

// Get the requested URL.
var url = process.argv[2];

// Check we have a url.
if (url) {
  // Get the URL contents.
  http.get(url, function(response) {
    // Set the response encoding now, so we don't have to manually convert
    // each item in the buffer to a string.
    response.setEncoding('utf8');

    // Output the response data.
    response.on('data', console.log);

    // Handle any errors.
    response.on('error', console.error);
  }).on('error', function(e) {
    return console.error('There was an error:', e.message);
  });
}
