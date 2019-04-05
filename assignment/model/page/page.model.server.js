var mongoose = require('mongoose');
var pageSchema = require('./page.schema.server');

var pageModel = mongoose.model('Page', pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
// pageModel.findPageById = findPageById;
// pageModel.updatePage = updatePage;
// pageModel.deletePage = deletePage;

function createPage(page) {
    return pageModel.create(page);
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({websiteId: websiteId});
}

// // TODO: findById????
// function findPageById(pageId) {
//     return pageModel.findById(pageId);
// }
//
// //TODO: findByIdAndUpdate????
// function updatePage(pageId, page) {
//     return pageModel.findByIdAndUpdate(pageIde, page);
// }
//
// //TODO: findByIdAndRemove???
// function deletePage(pageId) {
//     return pageModel.findByIdAndRemove(pageId);
// }