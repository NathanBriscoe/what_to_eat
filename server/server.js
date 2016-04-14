/**
 * Created by NathanBriscoe on 3/28/16.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var index = require('./routes/index');


// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('server/public'));// this is to use static files from the public folder such as img, css and javascript files

app.use('/', index);

app.get('/',function(request, response){//sever will offer up the Home Page
   response.sendFile(__dirname + '/public/views/index.html');
});

var server = app.listen(3000, function(request, response){
    var port = server.address().port;
    console.log('Listening on port', port);
});