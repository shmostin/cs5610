var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
// userModel.deleteUser = deleteUser;

module.exports = userModel;

userModel.populateUsers = populateUsers;


//functions
function createUser(user) {
    console.log('creating the user from the server model');
    console.log('model: ' + JSON.stringify(user));
   return userModel.create(user);
}

function populateUsers(users) {
   return userModel.insertMany(users);
}

// TODO: where did findById come from. Depricated?
function findUserById(id) {
   return userModel.findById(id);
}

function findUserByUserName(userName) {
   return userModel.findOne({username:userName});
}

function findByCredential(userName, password) {
   return userModel.findOne({username: userName, password: password});
}

// TODO: findByIdAndUpdate????
function updateUser(userId, user) {
    return userModel.findByIdAndUpdate(userId, user);
}
//
// // TODO: findByIdAndRemove???
// function deleteUser(userId) {
//     return userModel.findByIdAndRemove(userId);
// }