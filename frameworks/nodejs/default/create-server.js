"use strict"; // for security reasons 

const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Home Page</h1>');
        res.end();
    } else if (req.url == "/tasks") {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ "data": "This data passed from server to client" }));
        res.end();
    }
})

server.listen(4004)