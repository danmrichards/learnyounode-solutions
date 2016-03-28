/**
 * @file
 * Learn Node - 13 HTTP JSON API Server.
 */

var http = require('http');
var url = require('url');
var timeParser = require('./modules/timeparser.js');

// Get the requested port.
var port = process.argv[2];

// Check we have a port and file.
if (port) {
  // Create the server.
  var server = http.createServer(function (request, response) {
    // Only react to GET requests.
    if (request.method === 'GET') {
      // Parse the URL.
      var urlData = url.parse(request.url, true);

      var parsedTime;

      // Serve the appropriate response based on the path.
      switch (urlData.pathname) {
        case '/api/parsetime':
          // Check we have a timestamp.
          if (urlData.query.iso) {
            // Get the parse timestamp.
            parsedTime = timeParser(urlData.query.iso, 'json');

            // Send the response.
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(parsedTime));
          }

          break;

        case '/api/unixtime':
          // Check we have a timestamp.
          if (urlData.query.iso) {
            // Get the parse timestamp.
            parsedTime = timeParser(urlData.query.iso, 'unix');

            // Send the response.
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify(parsedTime));
          }

          break;

        default:
          // Page not found.
          response.writeHead(404);
          response.end('Page not found.');
          break;
      }
    } else {
      // Otherwise throw an error.
      response.writeHead(405);
      response.end('An error occured - Invalid Method');
    }
  });

  // Listen on the requested port.
  server.listen(port);
}
