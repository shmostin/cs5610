var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);

userModel.createUser=createUser;

module.exports = userModel;


//functions
function createUser(user) {
   return userModel.create(user);
}