var SynonymAPI = require("./library/synonyms").SynonymAPI; // notice the new SynonymAPI(api)
var prompt = require("prompt");
var request = require("request");
var colors = require("colors");

prompt.get("word", function(err, response) {
    var api = '3f6b205a1fcabae7c7a2178767fa4eec';
    
    if (err) {
        console.log("There was an error.");
    }
    else {
        var userWord = response.word;
        
        var newShit = new SynonymAPI(api); // notice the new SynonymAPI(api)

        newShit.getSynonyms(userWord, function(err, res) {
            if (err) {
                console.log("There was an error here.");
            }
            else {
                console.log(res);
            }
        });
    }
});

