var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');
var websiteModel = require("../website/website.model.server");

var pageModel = mongoose.model('Page', pageSchema);

module.exports = pageModel;

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

function createPage(websiteId, page) {
    console.log("AT MONGOOSE CREATE PAGE");
    console.log('PAGE TO ADD: ' + JSON.stringify(page));
    return pageModel.create(page)
        .then(function (responsePage) {
            // next, for the current website, push this page into website's page list.
            websiteModel.findWebsiteById(websiteId)
                .then(function (website) {
                    website.pages.push(responsePage);
                    return website.save();
                });
            return responsePage;
        });
}

function findAllPagesForWebsite(websiteId) {
    console.log('AT MONGOOSE FIND ALL PAGES FOR WEBSITE');
    console.log('websiteId looking for pages: ' + JSON.stringify(websiteId));
    return pageModel.find({websiteId: websiteId})
        .populate('website', '_id');
}

// TODO: findById????
function findPageById(pageId) {
    return pageModel.findById(pageId);
}

//TODO: findByIdAndUpdate????
function updatePage(pageId, page) {
    return pageModel.findByIdAndUpdate(pageIde, page);
}

//TODO: findByIdAndRemove???
function deletePage(pageId) {
    return pageModel.findByIdAndRemove(pageId);
}