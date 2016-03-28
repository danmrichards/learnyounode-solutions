/**
 * @file
 * Learn Node - Uppercase module.
 */

var Transform = require('stream').Transform;

// Create the tranfsorm stream.
var uppercase = new Transform({decodeStrings: false});

/**
 * Simply set each chunk in the stream to upper case.
 *
 * @param mixed chunk
 *   The chunk to be transformed. Will always be a buffer unless the
 *   decodeStrings option was set to false.
 * @param string encoding
 *   If the chunk is a string, then this is the encoding type. If chunk is a
 *   buffer, then this is the special value - 'buffer', ignore it in this case.
 * @param function done
 *   Call this function (optionally with an error argument and data) when you
 *   are done processing the supplied chunk.
 */
uppercase._transform = function(chunk, encoding, callback) {
  callback(null, chunk.toString().toUpperCase());
};

module.exports = uppercase;
