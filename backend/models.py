from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from sqlalchemy.dialects.postgresql import ENUM


db = SQLAlchemy()
bcrypt = Bcrypt()


# Define the User model with hashed password
class User(db.Model):
    __tablename__ = 'hmt_users'

    def serialize(self):
        return {
            'users_id': self.users_id,
            'name': self.name,
            'email': self.email,
            'category': self.category,
            'is_currently_login': self.is_currently_login,
            'last_login': self.last_login
        }

    users_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    _password = db.Column(db.String)  # This will store the hashed password
    category = db.Column(ENUM("admin", "driver", name="user_category", create_type=False))
    is_currently_login = db.Column(db.Boolean)
    last_login = db.Column(db.Date)

    def __init__(self, name, email, password, category, is_currently_login, last_login):
        self.name = name
        self.email = email
        self.password = password
        self.category = category
        self.is_currently_login = is_currently_login
        self.last_login = last_login

    @property
    def password(self):
        raise AttributeError('password is not readable')

    @password.setter
    def password(self, password):
        self._password = bcrypt.generate_password_hash(password).decode('utf-8')

    def check_password(self, password):
        return bcrypt.check_password_hash(self._password, password) 
