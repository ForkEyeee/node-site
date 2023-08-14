let http = require("http");
let router = require("../src/routes");

http.createServer(router.handleRequest).listen(8080);
