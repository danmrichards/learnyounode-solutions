/**
 * @file
 * Learn Node - Zero pad module.
 */

/**
 * Pad a given data string with leading zeroes.
 *
 * @param mixed dataString
 *   The data to pad with leading zeroes.
 * @param int length
 *   The requested length of the string to return.
 *
 * @return string
 *   The data string padded with leading zeroes to the required length.
 */
module.exports = function zeroPad(dataString, length) {
  // Convert to a string if not already.
  if (typeof dataString !== 'string') {
    dataString = dataString.toString();
  }

  // Pad leading zeroes until the string is long enough.
  while (dataString.length < length) {
    var buffer = dataString;
    dataString = '0' + buffer;
  }

  return dataString;
};
