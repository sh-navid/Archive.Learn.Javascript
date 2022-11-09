from flask import Flask
from flask import request, jsonify, redirect, url_for

app = Flask(__name__)


@app.route("/")
def serve_html():
    return redirect(url_for('static', filename='index.html'))


NAMES = [
    "Kevin",
    "Dan",
    "David",
    "Violet",
    "Han",
    "Karlos"
]


@app.route("/api_get/names/<int:length>", methods=['GET'])
def get_names(length):
    names = [n for n in NAMES if len(n) >= length]
    return jsonify(names)


@app.route("/api_post/names", methods=['POST'])
def post_names():
    length = request.get_json()["length"]
    names = [n for n in NAMES if len(n) >= length]
    return jsonify(names)


app.run(port=4000, debug=True)
