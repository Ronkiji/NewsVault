import json

from flask import request

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello world!'

@app.route('/test', methods=['POST'])
def test():
    output = request.get_json()
    print(output) 
    print(type(output))
    result = json.loads(output) 
    print(result) 
    print(type(result))
    return result