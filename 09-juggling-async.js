/**
 * @file
 * Learn Node - 09 Juggling Async.
 */

var getUrlContents = require('./modules/geturlcontents.js');

var urls = [];

// Get the requested URLs.
for (var i = 2; i < 5; i++) {
  if (process.argv[i]) {
    urls.push(process.argv[i]);
  }
}

// Check we have some urls.
if (typeof urls !== 'undefined' && urls.length > 0) {
  // Use a for loop instead of forEach as they are
  // a hell of a lot faster in js.
  for (var i = 0; i < urls.length; i++) {
    getUrlContents(urls, i, printUrlContent);
  }
}

/**
 * Print the result of a getURLContents call.
 *
 * @param mixed err
 *   A string if an error occured or null.
 * @param array data
 *   An array of URL response data.
 */
function printUrlContent(err, data) {
  // Show an error if it occurred.
  if (err) {
    return console.error('There was an error:', err);
  }

  // Use a for loop instead of forEach as they are
  // a hell of a lot faster in js.
  for (var j = 0; j < data.length; j++) {
    console.log(data[j]);
  }
}
