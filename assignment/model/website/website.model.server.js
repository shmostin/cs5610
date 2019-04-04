var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("Website", websiteSchema);

var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsiteForUser = findAllWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function createWebsite(userId, website) {
    //create the website
    return websiteModel.create(website)
        .then(
            function (website) {
                //find the user we want to attach it to
                userModel.findUserById(userId)
                    .then(
                        function (user) {
                            //push the website to their schema and update the user
                            user.websites.push(website);
                            userModel.updateUser(userId, user);
                        }
                    );
                return website;
            }
        )
}

function findAllWebsiteForUser(userId) {
    return websiteModel.find({userId: userId});
}

//TODO: findById????
function findWebsiteById(id) {
    return websiteModel.findById(id);
}

//TODO: findByIdAndUpdate???
function updateWebsite(id, website) {
    return websiteModel.findByIdAndUpdate(id, website);
}

//TODO: findByIdAndRemove???
function deleteWebsite(id) {
    return websiteModel.findByIdAndRemove(id);
}



