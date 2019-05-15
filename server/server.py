from flask import Flask, jsonify, request, json
from datetime import datetime
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from db import *;
import json

app = Flask(__name__)
connection = connect()
app.config['JWT_SECRET_KEY']='secret'

bcrypt=Bcrypt(app)
jwt=JWTManager(app)
CORS(app)

@app.route('/auth/register', methods=['POST'])
def register():
    try:
        email=request.form['email']
        password=request.form['password']
        full_name=request.form['full_name']
        return jsonify(insert_user(connection, {'email': email, 'password': password, 'full_name': full_name}))
    except KeyError as e:
        return jsonify({'error': 'Missing required parameters'})

@app.route('/auth/login', methods=['POST'])
def login():
    try:
        email=request.form['email']
        password=request.form['password']
        return jsonify(check_user(connection, email, password))
    except KeyError as e:
        return jsonify({'error': 'Missing required parameters'})

    

if __name__=='__main__':
        app.run(debug=True)
