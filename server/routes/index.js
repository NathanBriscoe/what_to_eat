/**
 * Created by NathanBriscoe on 3/28/16.
 */
var express = require('express');
var request = require('request');
var path = require('path');
var router = express.Router();

//At this point the request and API are set up. Now the response needs to come back to the DOM
router.get("/whatCanIMake", function(request, response){

    var inputIngredients = request.query;
    var ingredientString = "";

    for (var i in inputIngredients){
        ingredientString += inputIngredients[i] + ",";
    }

    var api = "http://www.recipepuppy.com/api/?i=" + ingredientString + "";

    request.get(api, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
            var results = response.results;
        }
            console.log(results);
            res.send(results);
    });
    console.log("response.results", response.results);
    console.log(api);
});

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('joined path', joinedPath);
    response.sendFile(joinedPath);
});

module.exports = router;