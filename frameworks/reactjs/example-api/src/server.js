const http = require('http');

data = [
    {
        "question": "What is the capital of Iran?",
        "answers": ["Tehran", "Paris"],
        "correct": 0,
        "selected": -1
    }, {
        "question": "What is the capital of England?",
        "answers": ["Manhatan", "Tokio", "London"],
        "correct": 2,
        "selected": -1
    }, {
        "question": "What is the capital of Japan?",
        "answers": ["Manhatan", "London", "Tokio", "Tehran"],
        "correct": 2,
        "selected": -1
    }
]

const listener = (req, res) => {
    res.writeHead(200);
    if (req.url == "/data") {
        res.end(JSON.stringify(data));
    } else {
        res.end('<h1>Hello from NodeJS server</h1>');
    }
}

const server = http.createServer(listener);
server.listen(4000);