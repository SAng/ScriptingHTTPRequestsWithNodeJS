function getAndPrintHTML (requestOptions) {



  var https = require('https');

  var result = '';

  https.get(requestOptions, function (response) {

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
    response.on('end', function() {
      console.log(result);
    });

  });

};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);