/**
 * Created by NathanBriscoe on 3/28/16.
 */
var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();// get an instance of the express Router

// ROUTES FOR OUR API
// =============================================================================

// test route to make sure everything is working (accessed at GET http://localhost:3000/api)
router.get('/', function(request, response) {
    response.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log('joined path', joinedPath);
    response.sendFile(joinedPath);
});

module.exports = router;