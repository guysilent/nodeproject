var express = require("express");
var app = express();

var port = process.env.PORT;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));
app.get('/', function(request, response){
    response.send('Hello World!');
});

app.get('/routing', function(request, response){
    response.send('Hello Routing');
});

app.listen(port, function(err){
    console.log('The Server is Running On port: ' + port);
})
