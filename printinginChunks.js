function getAndPrintHTMLChunks () {

  //Set Options
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  var https = require('https');

  https.get(requestOptions, function (response) {

    //Set encoding to utf-8
    response.setEncoding('utf8');

    //Prints each data chunk then starts a new line
    response.on('data', function (datachunk) {
      console.log(datachunk.toString(), '\n');
    });

    //Handles Errors
    response.on('error', function (err) {
      console.log(err.toString())
      return err;
    });

    //Print that the stream has ended
    response.on('end', function() {
      console.log('Finished Stream');
    });

  });

};

getAndPrintHTMLChunks();