/*
Creating our own callback-receiving function (higher-order function)
In it, create a function called requestJson that takes a URL and a callback function as parameters.
In your function, do the following:

Using the request library, make a request to the URL that you were provided.

When you receive the response: a. If there is an error, call the callback function and 
pass it the error as the first parameter b. If there is no error, move to step 3
Use JSON.parse inside a try/catch block to parse the response: a. If there was an error 
parsing JSON, call the callback function and pass it the same error as the first 
parameter b. If there was no error parsing the JSON, call the callback function and pass 
it a null error as the first parameter, and the parsed response as the second parameter
*/
var request = require('request');


function requestJS(url, callback) {
    request(url, function(err, response) {
        if (err) {
            callback(err);
            console.log("There was an error initially.");
        }
        else {
            try {
                var parsed = JSON.parse(response.body);
                callback(null, parsed); // will only be executed if line 25 has no error
                console.log("If you see this, JSONparse didn't explode!☺");

            }
            catch (err) {
                callback(err); // This handles the error
                console.log("There was an error with JSONparse. It exploded. Kaboom! ☹");
            }
        }
    });
}


requestJS("https://maps.googleapis.com/maps/api/geocode/json?address=montreal", function(err, response) {
    if (err) {
        console.log("There was an error.");
    }
    else {
        console.log(response);
    }
});
