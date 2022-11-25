from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def index():
    return "<h1>Hello from Python server</h1>"


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


@app.route("/data")
def request_data():
    return jsonify(data)


app.run(port=4000)
