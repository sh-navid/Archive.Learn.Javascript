"use strict";

http = require("http")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        r.writeHead(200, { 'Content-Type': 'text/html' });
        r.write('<h1>Home Page</h1>');
        r.end();
    } else if (req.url == "/tasks") {
        r.writeHead(200, { 'Content-Type': 'application/json' });
        r.write({ "data": "This data passed from server to client" });
        r.end();
    }
})

server.listen(4004)