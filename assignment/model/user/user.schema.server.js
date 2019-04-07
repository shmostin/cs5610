var mongoose = require('mongoose');
// TODO: add current date to the user schema?
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
    dateCreate: {type: Date, default: Date.now()},

    facebook: {
        id: String,
        token: String
    }
}, {collection: 'Users'});

module.exports = userSchema;