/**
 * Created by NathanBriscoe on 3/28/16.
 */
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();// get an instance of the express Router
var request = require('request');

//[][][][][][][][][][][][][][][][][][][]Start Making API server side call here[][][][][][][][][][][][][][][][][][][][][]

router.get("/whatCanIMake", function(request, response){

    var inputIngredients = request.body.params;
    var api = "http://www.recipepuppy.com/api/?i=" + inputIngredients + "";

    request(api, function(err, response){

    });


});
//[][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][][]

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('joined path', joinedPath);
    response.sendFile(joinedPath);
});

module.exports = router;