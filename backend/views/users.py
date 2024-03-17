from flask import Blueprint, request, jsonify
from backend.models import User, db

users_bp = Blueprint('users', __name__)

@users_bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.serialize() for user in users]), 200

@users_bp.route('/users', methods=['POST'])
def create_user():
    data = request.json
    new_user = User(**data)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201
    

@users_bp.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    user = User.query.get_or_404(user_id)
    return jsonify(user.serialize()), 200

@users_bp.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get_or_404(user_id)
    data = request.json
    for key, value in data.items():
        setattr(user, key, value)
    db.session.commit()
    return jsonify(user.serialize()), 200

@users_bp.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    user = User.query.get_or_404(user_id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted successfully'}), 200
