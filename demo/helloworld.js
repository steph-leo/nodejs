var http = require("http");
http.createServer(function(req, res){
    res.write("Hello World. Welcome to Stephs home");
    res.end();
}).listen(8080);