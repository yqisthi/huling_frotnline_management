from flask import Flask
from backend.models import db
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate
from backend.views.users import users_bp


def create_app():
    app = Flask(__name__)
    bcrypt = Bcrypt(app)
    migrate = Migrate()

    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:12345678@localhost:5433/haus_huling?sslmode=disable'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    bcrypt = Bcrypt()

    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)

    app.register_blueprint(users_bp)

    return app

app = create_app()


@app.route('/')
def index():
    return 'Hello, World! This is Flask backend.'

if __name__ == '__main__':
    app.run(host='localhost', port=5000, debug=True)
    
