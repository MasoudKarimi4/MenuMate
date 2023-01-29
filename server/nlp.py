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
from flask import Flask, jsonify,request
from flask_cors import CORS

app = Flask(__name__)


@app.route('/my-inpoint/', methods=['GET'])
def my_endpoint(variable):
    # Store the received variable
    received_variable = variable
    print(f"Received variable: {received_variable}")


    data = request.get_json()

    # Return the received variable as response
    return received_variable

# Output Route 
@app.route('/my-endpoint', methods=['GET'])
def hello():
    restaurant = '1 for 1 pizza'

    prompt = 'Write about '+restaurant+', a restaurant in Ottawa Ontario.'

    response = co.generate( 
        model='command-medium-nightly', 
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


