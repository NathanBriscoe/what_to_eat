/**
 * Created by NathanBriscoe on 3/28/16.
 */
var express = require('express');
var request = require('request');
var path = require('path');
var router = express.Router();

//[][][][][][][][][][][][][][][][][][][]Start Making API server side call here[][][][][][][][][][][][][][][][][][][][][]

router.get("/whatCanIMake", function(request, response){
    console.log("router.get request.body", request.body);

    var inputIngredients = request.body.params;
    console.log("console for inputIngredients = request.body.params", inputIngredients);
    var api = "http://www.recipepuppy.com/api/?i=" + inputIngredients + "";

    request.get(api, function(err, response, body){

    });


});
//[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('joined path', joinedPath);
    response.sendFile(joinedPath);
});

module.exports = router;