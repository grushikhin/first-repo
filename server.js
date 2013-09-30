var http = require("http");
var url = require("url");
fs = require("fs");



function start() {
    var responceHtml;
    function onRequest(request, response) {
        console.log("Request received.");
        console.log('url = ');
        console.log(url.parse(request.url));
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(responceHtml);
        response.end();
    }

    fs.readFile('public/index.html', function (err, html) {
        if (err) {
            throw err;
        }
        responceHtml = html;
        http.createServer(onRequest).listen(8888);

        console.log("Server has started.");
    });


}

exports.start = start;