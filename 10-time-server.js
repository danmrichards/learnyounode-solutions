/**
 * @file
 * Learn Node - 10 Time Server.
 */

var net = require('net');
var zeroPad = require('./modules/zeropad.js');

// Get the requested port.
var port = process.argv[2];

// Check we have a port.
if (port) {
  // Create the server.
  var server = net.createServer(function (socket) {
    console.log('Client connected on port ' + port);

    // Get the current date.
    var date = new Date();
    var year = date.getFullYear();
    var month = zeroPad(date.getMonth() + 1, 2);
    var day = zeroPad(date.getDate(), 2);
    var hours = zeroPad(date.getHours(), 2);
    var minutes = zeroPad(date.getMinutes(), 2);

    // Show the date/time string.
    socket.end(year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + '\n');
  });

  // Listen on the requested port.
  server.listen(port);
}
