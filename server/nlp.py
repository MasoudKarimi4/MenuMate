import cohere; 
co = cohere.Client('5wlBlVCWE3eU6jZGIjrwiT6GIPW2jgytjtHdfr93')


restaurant = '3brothers shawarma and poutine'

prompt = 'Write about '+restaurant+", an Ottawa restaurant."

response = co.generate( 
    model='command-xlarge-nightly', 
    prompt = prompt,
    max_tokens=150, 
    temperature=0.8,
    stop_sequences=["--"])

summary = response.generations[0].text

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
from flask import Flask, jsonify,request
=======
from flask import Flask, jsonify
>>>>>>> parent of b8d61c5 (broke)
from flask_cors import CORS

app = Flask(__name__)



@app.route('/my-endpoint', methods=['GET'])
def hello():
    restaurant = '1 for 1 pizza'

    prompt = 'Write about '+restaurant+", an Ottawa restaurant."

    response = co.generate( 
        model='command-xlarge-nightly', 
        prompt = prompt,
        max_tokens=500, 
        temperature=0.8,
        stop_sequences=["--"])

    summary = response.generations[0].text
=======
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/get-variable", methods=['GET'])
def get_variable():
>>>>>>> parent of be27ede (IT WORKED)
=======
from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/get-variable", methods=['GET'])
def get_variable():
>>>>>>> parent of be27ede (IT WORKED)
    return jsonify(summary)


