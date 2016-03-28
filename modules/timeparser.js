/**
 * @file
 * Learn Node - Time parser module.
 */

/**
 * Parse a timestamp and return it in the required format.
 *
 * @param string timestamp
 *   An ISO format timestamp string.
 * @param string format
 *   The required format to return the times data in (json or unix).
 *
 * @return mixed
 *   A JSON object in the format {"hour": 14, "minute": 23, "second": 02} if
 *   format is 'json' or a unix time stamp if format is 'unix'. Otherwise FALSE.
 */
module.exports = function timeParse(timestamp, format) {
  // Create the date.
  var date = new Date(timestamp);

  // Serve the response based on the required format.
  switch (format) {
    case 'json':
      return {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      };

    case 'unix':
      return {
        "unixtime": date.getTime()
      };

    default:
      return false;
  }
};
