/**
 * Created by NathanBriscoe on 3/28/16.
 */
var express = require('express');
var moment = require('moment');
var app = express();

moment().format();


//Serving up the static files such as HTML and CSS
app.use(express.static("server/public"));


//sever will offer up the Home Page
app.get('/',function(request, response){
   response.sendFile(__dirname + '/public/views/index.html');
});

var server = app.listen(3000, function(request, response){
    var port = server.address().port;
    console.log('Listening on port', port);
});