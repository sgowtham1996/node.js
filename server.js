var http = require('http');
var port = 3000;
var requestHandler = function(request, response){
    console.log('New request to: ' + request.url);
    response.end('Hello, World!');
}
var server = http.createServer(requestHandler);
server.listen(port, function(){
    console.log('listening on port ' + port);
   });

   /* this is a code for establishing the server and node.js program in our system 
   i have used port 3000
 var http = require('http');
 var port = 3000;

 var requestHandler = function(request, response){
     console.log('Request came from: ' + request.url);
     response.end('Hello, World!');
 }

 var server = http.createServer(requestHandler);

 server.listen(port, function(){
     console.log('Listening on port ' + port);
 }); */