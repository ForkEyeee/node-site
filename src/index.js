var http = require("http");
var router = require("../src/routes");
http.createServer(router.handleRequest).listen(8080);
