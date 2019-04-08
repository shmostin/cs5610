var mongoose = require('mongoose');
var pageModel = require('../page/page.model.server');
var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("Widgets", widgetSchema);

//not sure if this is needed here
module.exports = widgetModel;

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.updatePosition = updatePosition;
widgetModel.reorderWidget = reorderWidget;


function createWidget(pageId, widget) {
    console.log('CREATE WIDGET FROM THE MODEL');
    return widgetModel.create(widget)
        .then(
            function (resWidget) {
                pageModel.findPageById(pageId)
                    .then(
                        function (page) {
                            // widget.position = page.widgets.length;
                            // page.widgets.push(widget);
                            // widget.save();
                            page.save();
                        }
                    );
                return resWidget;
            }
        );
}

function findAllWidgetsForPage(pageId) {
    console.log('mongoose find all widgets for page');
    return widgetModel.find({_id: pageId})
        .then(function (page) {
            return page.widgets;
        });
}

// TODO: findById????

function findWidgetById(widgetId) {
    return widgetModel.findById({_id: widgetId});
}

//TODO: findByIdAndUpdate????
function updateWidget(widgetId, widget) {
    return widgetModel.findByIdAndUpdate(widgetId, widget);
}

//TODO: findByIdAndRemove???
function deleteWidget(widgetId) {
    return widgetModel.findByIdAndRemove(widgetId);
}

function updatePosition(pageId, position) {
    //TODO: sort out impl
}

function reorderWidget(pageId, start, end) {
    //TODO: sort out impl
}