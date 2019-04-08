module.exports = function (app, models) {

    // var widgets =
    //     [
    //         {
    //             _id: "123",
    //             widgetType: "HEADER",
    //             name: ' ',
    //             pageId: "321",
    //             size: "2",
    //             text: "GIZMODO",
    //             url: "",
    //             width: "",
    //             height: 100,
    //             rows: 0,
    //             class: '',
    //             icon: '',
    //             deletable: false,
    //             formatted: false,
    //             placeholder: ''
    //         },
    //         {
    //             _id: "234",
    //             widgetType: "HEADER",
    //             name: ' ',
    //             pageId: "321",
    //             size: "4",
    //             text: "Lorem ipsum",
    //             url: "",
    //             width: "",
    //             height: 100,
    //             rows: 0,
    //             class: '',
    //             icon: '',
    //             deletable: false,
    //             formatted: false,
    //             placeholder: ''
    //         },
    //         {
    //             _id: "345",
    //             widgetType: "IMAGE",
    //             pageId: "321",
    //             size: "",
    //             text: "",
    //             width: "100%",
    //             url: "http://lorempixel.com/400/200/"
    //         },
    //         {
    //             _id: "456",
    //             widgetType: "HTML",
    //             name: 'html name',
    //             pageId: "321",
    //             size: "",
    //             text: "Lorem ipsum",
    //             url: "",
    //             width: "",
    //             height: 100,
    //             rows: 0,
    //             class: '',
    //             icon: '',
    //             deletable: false,
    //             formatted: false,
    //             placeholder: ''
    //         },
    //         {
    //             _id: "567",
    //             widgetType: "HEADER",
    //             name: ' ',
    //             pageId: "321",
    //             size: "4",
    //             text: "Lorem ipsum",
    //             url: "",
    //             width: "",
    //             height: 100,
    //             rows: 0,
    //             class: '',
    //             icon: '',
    //             deletable: false,
    //             formatted: false,
    //             placeholder: ''
    //         },
    //         {
    //             _id: "678",
    //             widgetType: "YOUTUBE",
    //             name: ' ',
    //             pageId: "321",
    //             size: "",
    //             text: "",
    //             url: 'https://www.youtube.com/embed/mFkli0wD4-w',
    //             width: "100%",
    //             height: 100,
    //             rows: 0,
    //             class: '',
    //             icon: '',
    //             deletable: false,
    //             formatted: false,
    //             placeholder: ''
    //         },
    //         {
    //             _id: "789",
    //             widgetType: "HTML",
    //             name: 'html name',
    //             pageId: "321",
    //             size: "<p>Lorem ipsum</p>",
    //             text: "",
    //             url: "",
    //             width: "",
    //             height: 100,
    //             rows: 0,
    //             class: '',
    //             icon: '',
    //             deletable: false,
    //             formatted: false,
    //             placeholder: ''
    //         }
    //     ];

    const widgetModel = require('../model/widget/widget.model.server');
    const developURL = 'http://localhost:3200/images/'
    var multer = require('multer'); //npm multer --save
    var upload = multer({dest: __dirname + '/../../src/uploads/uploads'});

    app.post("/api/page/:pid/widget", createWidget);
    app.get("/api/page/:pid/widget", findAllWidgetsForPage);
    app.get("/api/page/:pid/widget/:wid", findWidgetById);
    app.put("/api/page/:pid/widget/:wid", updateWidget);
    app.delete("/api/page/:pid/widget/:wid", deleteWidget);

    app.put("/api/page/:pageId/widget", reorderWidgets);

    app.post("/api/upload", upload.single('myFile'), uploadImage);
    app.get('/images/:fileName', getImage);


    function uploadImage(req, res) {
        console.log('server side upload image called');
        var uid = req.body.userId;
        var wid = req.body.websiteId;
        var pid = req.body.pageId;


        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        var originalName = myFile.originalName;
        var fileName = myFile.filename;
        var path = myFile.path;
        var destination = myFile.destination;
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        // widget = findWidgetById(widgetId);
        // widget.url = '/uploads/' + fileName;

        var diffWidget = {};
        widgetModel.findWidgetById().exec(
            function (err, foundWidget) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (foundWidget == null) {
                    return res.sendStatus(404);
                }
                diffWidget = foundWidget;
            });

        diffWidget.url = developURL + fileName;

        widgetModel.updateWidget(widgetId, diffWidget)
            .then(function (widget, err) {
                    if (err) {
                        console.log(err);
                    }
                }
            );

        const imageCallBackUrl = developURL + "/user/" + uid +
            "/website/" + wid +
            "/page/" + pid +
            "/widget/" + widgetId;

        res.redirect(imageCallBackUrl);
    }

    function getImage(req, res) {
        const path = req('path');
        const fileName = req.params['fileName'];
        const myLocalPath = __dirname + '/../../public/images/' + fileName;

        res.sendFile(path.resolve(myLocalPath));
    }


    function createWidget(req, res) {
        console.log('SERVER SIDE CREATE WIDGET');
        var pageId = req.params['pid'];
        var widget = req.body;
        widgetModel.createWidget(pageId, widget)
            .then(function (widget) {
                res.status(200).send(widget);
            }, function (err) {
                res.sendStatus(400).send(err);
            });
    }

    function findAllWidgetsForPage(req, res) {
        console.log('calling findAllWidgetsForPage on server');
        var pageId = req.params.pageId;
        widgetModel.findAllWidgetsForPage(pageId)
            .then(function (widgets) {
                return res.status(200).send(widgets);
            })
    }


    function findWidgetById(req, res) {
        var widgetId = req.params._id;
        widgetModel.findWidgetById(widgetId).exec(
            function (err, widget) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (widget == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(widget);
            }
        );


    }

    function updateWidget(req, res) {
        var widgetId = req.params['widgetId'];
        var widget = req.body;
        widgetModel.updateWidget(widgetId, widget).then(
            function (widget, err) {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                return res.status(200).send(widget);
            }
        );

    }

    function deleteWidget(req, res) {
        var widgetId = req.params['widgetId'];
        const pageId = req.params['pid'];

        widgetModel.deleteWidget(pageId, widgetId).exec(
            function (err, widget) {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send(widget);
                }

            }
        );
    }

    function array_swap(arr, startIndex, endIndex) {
        arr.splice(endIndex, 0, arr.splice(startIndex, 1));
    };

    function reorderWidgets(req, res) {
        const pid = req.params['pid'];
        const startIndex = req.query.start;
        const endIndex = req.query.end;
        widgetModel.reorderWidget(pageId, startIndex, endIndex);
        return res.status(200).send({});
    }

}
