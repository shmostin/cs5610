var mongoose = require('mongoose');

widgetSchema = new mongoose.Schema(
    {
        pageId: {type: mongoose.Schema.Types.objectId, ref: 'Page'},
        type: {type: String, enum: ['HEADING', 'IMAGE', 'YOUTUBE', 'HTML', 'INPUT', 'TEXT']},
        name: String,
        text: String,
        placeholder: String,
        description: String,
        url: String,
        width: String,
        height: String,
        rows: Number,
        size: Number,
        class: String,
        icon: String,
        deletable: Boolean,
        formatted: Boolean,
        dateCreated: {type: Date, default: Date.now()}
    }, {collection: "Widgets"}
);

module.exports = widgetSchema;

