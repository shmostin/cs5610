var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    websites: String,
    // Define rest of schema here
},{collection: 'Users'});

module.exports = userSchema;