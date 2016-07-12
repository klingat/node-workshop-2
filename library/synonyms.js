/* In this file, create and export a constructor function called SynonymAPI. It takes an 
api key as parameter and sets it on the new object

In the prototype of SynonymAPI, add a function getSynonyms. It takes a word and a 
callback. It makes a request to the web api and gives back the results as an object to 
the callback function.

If there was an error, it should be passed down to the callback */
var request = require("request");
var prompt = require("prompt");



function SynonymAPI(api) {
    this.api = api;
}

SynonymAPI.prototype = {
    getSynonyms: function(word, callback) {
        var url = 'http://words.bighugelabs.com/api/2/' + this.api + '/' + word + '/json';
        request(url, function(err, response) {

            if (err) {
                callback(err);
            }
            else {
                try {
                    var parsed = JSON.parse(response.body);
                    callback(null, parsed);
                }
                catch (err) {
                    callback(err);
                }
            }
        })
    }
};


module.exports = {
    SynonymAPI: SynonymAPI
};
