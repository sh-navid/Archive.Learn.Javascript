"use strict";

http = require("http")

const server = http.createServer((req, res) => {
    if(req.url=="/"){

    }else if (req.url=="/test"){

    }
})

server.listen(4004)