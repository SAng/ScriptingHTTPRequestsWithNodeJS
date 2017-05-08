module.exports = function getHTML (options, callback) {

    var https = require('https');

    var result = '';

    https.get(options, function (response) {

      //Set encoding to utf-8
      response.setEncoding('utf8');

      //Prints each data chunk then starts a new line
      response.on('data', function (datachunk) {
        result += datachunk.toString();
      });

      //Handles Errors
      response.on('error', function (err) {
        console.log(err.toString())
        return err;
      });

      //Print that the stream has ended
      response.on('end', function () {
        callback(result)
      });
    });
};