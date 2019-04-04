var mongoose = require('mongoose');
// TODO: add current date to the user schema?
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    websites: [{type: mongoose.Schema.Types.ObjectId, ref: 'Website'}],
    dateCreate: {type: Date, default: Date.now()}
}, {collection: 'Users'});

module.exports = userSchema;