const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    full_name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    profile_photo: {
        type: String
    }
}, { versionKey: false });

const Users = mongoose.model('users', usersSchema)

module.exports = Users;
