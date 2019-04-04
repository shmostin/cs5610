var mongoose = require('mongoose');
var widgetSchema = require('../widget/widget.schema.server');

pageSchema = new mongoose.Schema(
    {
        website:{type: mongoose.Schema.Types.ObjectId, ref: 'Website'},
        name: String,
        title: String,
        description: String,
        widgets: [widgetSchema],
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: "Pages"}
);

module.exports = pageSchema;