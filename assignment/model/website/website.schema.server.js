var mongoose = require('mongoose');

var pageSchema = require('../page/page.schema.server');

var websiteSchema = mongoose.Schema(
    {
        name: String,
        developerId: {type: mongoose.Schema.Types.ObjectId, ref: 'userModel'},
        description: String,
        pages: [pageSchema],
        dateCreate: {type: Date, default: Date.now()}
    }, {collection:"Websites"}
);

module.exports = websiteSchema;