var mongoose = require('mongoose');

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

//TODO: where does createdWidget come from????
function createWidget(pageId, widget) {
    return widgetModel.create(widget)
        .then(
            function (widget) {
                pageModel.findPageById(pageId)
                    .then(
                        function (page) {
                            widget.position = page.widgets.length;
                            page.widgets.push(widget);
                            widget.save();
                            page.save();
                        }
                    );
                return createdWidget;
            }
        );
}

function findAllWidgetsForPage(pageId) {
    return widgetModel.find({pageId: pageId});
}

// TODO: findById????

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
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