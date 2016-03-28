/**
 * @file
 * Learn Node - 11 HTTP File Server.
 */

var http = require('http');
var fs = require('fs');

// Get the requested port.
var port = process.argv[2];

// Get the requested file.
var file = process.argv[3];

// Check we have a port and file.
if (port && file) {
  // Create the server.
  var server = http.createServer(function (request, response) {
    console.log('Client connected on port ' + port);
    console.log('Serving file: ' + file);

    // Set headers.
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // Create the file stream.
    var fileStream = fs.createReadStream(file);

    // Wait until we know the readable stream is actually valid before piping.
    fileStream.on('open', function () {
      // Serve the file.
      fileStream.pipe(response);
    });

    // Catch any errors that occur when creating the file steam.
    fileStream.on('error', function(e) {
      response.end('An error occured - ' + e.message);
    });
  });

  // Listen on the requested port.
  server.listen(port);
}
