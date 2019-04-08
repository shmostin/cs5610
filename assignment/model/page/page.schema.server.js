var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');

pageSchema = new mongoose.Schema(
    {
        websiteId: {type: mongoose.Schema.Types.ObjectId, ref: 'websiteModel'},
        // website:{type: mongoose.Schema.Types.ObjectId, ref: 'Website'},
        name: String,
        title: String,
        description: String,
        widgets: [widgetSchema],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: 'page'}
);

module.exports = pageSchema;