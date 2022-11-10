from flask import Flask
from flask import request, jsonify, redirect, url_for

app = Flask(__name__)


@app.route("/")
def serve_html():
    return redirect(url_for('static', filename='index.html'))


NAMES = [
    "hello",
    "hi",
    "bye",
    "goodbye",
    "goodmorning",
    "goodnight"
]


@app.route("/api_get/names/<string:word>", methods=['GET'])
def get_names(word):
    return jsonify([n for n in NAMES if n.startswith(word)])



app.run(port=4000, debug=True)