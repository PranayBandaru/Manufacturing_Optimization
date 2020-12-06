from .db import db

# DATE , PROD_LINE , STEP_NO  NO_OF_TIME_UNITS


class Failure(db.Document):
    DATE = db.StringField()
    PROD_LINE = db.StringField()
    STEP_NO = db.StringField()
    NO_OF_TIME_UNITS = db.StringField()
