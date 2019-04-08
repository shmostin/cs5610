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
    console.log('AT UPDATE PAGE IN MODEL');
    return pageModel.updateOne({_id: pageId}, page);
}


function deletePage(pageId, websiteId) {
    console.log('AT MONGOOSE DELET PAGE');
    pageModel.findOne({_id: pageId})
        .then(function (resPage) {
            websiteModel.findWebsiteById(websiteId)
                .then(function (website) {
                    website.pages.pull({ _id: resPage._id });
                    return website.save();
                });
            return resPage;
        });
    // then, delete this page
    return pageModel.deleteOne({_id: pageId});
}