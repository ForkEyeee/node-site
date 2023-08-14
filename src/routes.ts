var url = require("url");
var fs = require("fs");

var html = {
  render: function (path: string, contentType: string, response: any) {
    fs.readFile(path, "utf8", (error: string, data: object) => {
      if (error) {
        response.writeHead(404);
        response.write("file not found");
      } else {
        response.writeHead(200, { "Content-Type": contentType });
        response.write(data);
      }
      response.end();
    });
  },
};

module.exports = {
  handleRequest: (request: any, response: any) => {
    var path = url.parse(request.url).pathname;

    switch (path) {
      case "/":
        html.render("index.html", "text/html", response);
        break;
      case "/about":
        html.render("src/about.html", "text/html", response);

        break;
      case "/contact-me":
        html.render("src/contact-me.html", "text/html", response);
        break;
      case "/src/index.css":
        html.render("src/index.css", "text/css", response);
        break;
      default:
        html.render("src/404.html", "text/html", response);
        break;
    }
  },
};
