var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("Website", websiteSchema);

var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
// websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
// websiteModel.updateWebsite = updateWebsite;
// websiteModel.deleteWebsite = deleteWebsite;

module.exports = websiteModel;

function createWebsite(userId, website) {
    console.log('mongoose model createWebsite called');
    console.log('website name: ' + website.toString());
    //create the website
    return websiteModel.create(website)
        .then(
            function (resWebsite) {
                //find the user we want to attach it to
                userModel.findUserById(userId)
                    .then(
                        function (user) {
                            //push the website to their schema and update the user
                            console.log('pushing website to the user');
                            user.websites.push(resWebsite);
                            return userModel.updateUser(userId, user);
                        }
                    );
                return resWebsite;
            }
        )
}

function findAllWebsitesForUser(userId) {
    console.log('findAllWebsitesForUser() model service called');
    return websiteModel.find({developerId: userId});
}

// //TODO: findById????
// function findWebsiteById(id) {
//     return websiteModel.findById(id);
// }
//
// //TODO: findByIdAndUpdate???
// function updateWebsite(id, website) {
//     return websiteModel.findByIdAndUpdate(id, website);
// }
//
// //TODO: findByIdAndRemove???
// function deleteWebsite(id) {
//     return websiteModel.findByIdAndRemove(id);
// }



