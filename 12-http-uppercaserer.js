/**
 * @file
 * Learn Node - 12 HTTP Uppercaserer.
 */

var http = require('http');
var uppercase = require('./modules/uppercase.js');

// Get the requested port.
var port = process.argv[2];

// Check we have a port and file.
if (port) {
  // Create the server.
  var server = http.createServer(function (request, response) {
    // Only react to POST requests.
    if (request.method === 'POST') {
      console.log('Client connected on port ' + port);

      // This method works using events to grab the request, uppercase it, and
      // then  present it back to the response steam. Uncomment line 23 - 34 and
      // comment out line 7 and 37 to use this method.
      // var body = '';
      //
      // // Get the post body.
      // request.on('data', function (chunk) {
      //   body += chunk;
      // });
      //
      // // Wait until the data stream has ended before we do
      // // anything with the body, then send the response.
      // request.on('end', function () {
      //   response.end(body.toUpperCase());
      // });

      // This method works using pipes and transforms to upper case the string.
      // Uncomment line 7 & 37 and comment out line 23 - 34 to use this method.
      request.pipe(uppercase).pipe(response);
    } else {
      // Otherwise throw an error.
      response.writeHead(405);
      response.end('An error occured - Invalid Method');
    }
  });

  // Listen on the requested port.
  server.listen(port);
}
