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


// requestJS("https://maps.googleapis.com/maps/api/geocode/json?address=montreal", function(err, response) {
//     if (err) {
//         console.log("There was an error.");
//     }
//     else {
//         console.log(response);
//     }
// });

module.exports = {
    requestJS: requestJS
};