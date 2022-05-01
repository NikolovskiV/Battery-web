const mongoose = require('mongoose')

const registerUser = new mongoose.Schema({

    email: { type: String, required: true },

    passwordHash: { type: String, required: true },

});

const User = mongoose.model("user", registerUser);

module.exports = User;