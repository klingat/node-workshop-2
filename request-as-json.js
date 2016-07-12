var x = require("./library/request-json");

var prompt = require("prompt");
var request = require("request");
var colors = require("colors");



// x("https://maps.googleapis.com/maps/api/geocode/json?address=montreal", function(err, response) {
//     if (err) {
//         console.log("There was an error.");
//     }
//     else {
//         console.log(response);
//     }
// });




function getCity() {

    prompt.get('city', function(err, answer) {

        if (err) {
            console.log("There was an error.");
        }
        else {
            var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + answer.city;
            x(url, function(err, res) {
                if (err) {
                    console.log("There was an error.");
                }
                else {
                    var data = res.results[0].geometry.location;
                    var lat = (Number(data.lat.toFixed(2)));
                    var lng = (Number(data.lng.toFixed(2)));
                    var urlForecast = "https://api.forecast.io/forecast/621d47e4ecab5545b5c8d0a59dcb09ce/" + lat + "," + lng;
                    x(urlForecast, function(err, res) {
                        if (err) {
                            console.log("There was an error.");
                        }
                        else {
                            var dataForecast = res;
                            var currentWeather = dataForecast.currently.summary;
                            console.log(colors.yellow(currentWeather));
                            for (var i = 0; i < 5; i++) {
                                console.log(colors.rainbow(dataForecast.daily.data[i].summary));
                            }
                        }
                    });
                }
            });
        }
    });
}

getCity();
