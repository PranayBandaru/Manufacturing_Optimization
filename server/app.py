from flask import Flask, request, Response, jsonify
from flask_restful import Api
from flask_cors import CORS
from models.db import initialize_db

from models.failure import Failure
app = Flask(__name__)
CORS(app)
api = Api(app)


app.config['MONGODB_SETTINGS'] = {
    'db': 'Manufacturing_Engine',
    'host': 'localhost',
    'port': 27017
}

initialize_db(app)

# DATE , PROD_LINE , STEP_NO  NO_OF_TIME_UNITS
# Failure(DATE="sc", PROD_LINE="DD",  STEP_NO="VXX",
#         NO_OF_TIME_UNITS="CXCX").save()

app.run('0.0.0.0', 4000, debug=True)
