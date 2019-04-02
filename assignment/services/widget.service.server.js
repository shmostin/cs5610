module.exports = function (app, models) {

    var widgets =
        [
            {
                _id: "123",
                widgetType: "HEADER",
                name: ' ',
                pageId: "321",
                size: "2",
                text: "GIZMODO",
                url: "",
                width: "",
                height: 100,
                rows: 0,
                class: '',
                icon: '',
                deletable: false,
                formatted: false,
                placeholder: ''
            },
            {
                _id: "234",
                widgetType: "HEADER",
                name: ' ',
                pageId: "321",
                size: "4",
                text: "Lorem ipsum",
                url: "",
                width: "",
                height: 100,
                rows: 0,
                class: '',
                icon: '',
                deletable: false,
                formatted: false,
                placeholder: ''
            },
            {
                _id: "345",
                widgetType: "IMAGE",
                pageId: "321",
                size: "",
                text: "",
                width: "100%",
                url: "http://lorempixel.com/400/200/"
            },
            {
                _id: "456",
                widgetType: "HTML",
                name: 'html name',
                pageId: "321",
                size: "",
                text: "Lorem ipsum",
                url: "",
                width: "",
                height: 100,
                rows: 0,
                class: '',
                icon: '',
                deletable: false,
                formatted: false,
                placeholder: ''
            },
            {
                _id: "567",
                widgetType: "HEADER",
                name: ' ',
                pageId: "321",
                size: "4",
                text: "Lorem ipsum",
                url: "",
                width: "",
                height: 100,
                rows: 0,
                class: '',
                icon: '',
                deletable: false,
                formatted: false,
                placeholder: ''
            },
            {
                _id: "678",
                widgetType: "YOUTUBE",
                name: ' ',
                pageId: "321",
                size: "",
                text: "",
                url: 'https://www.youtube.com/embed/mFkli0wD4-w',
                width: "100%",
                height: 100,
                rows: 0,
                class: '',
                icon: '',
                deletable: false,
                formatted: false,
                placeholder: ''
            },
            {
                _id: "789",
                widgetType: "HTML",
                name: 'html name',
                pageId: "321",
                size: "<p>Lorem ipsum</p>",
                text: "",
                url: "",
                width: "",
                height: 100,
                rows: 0,
                class: '',
                icon: '',
                deletable: false,
                formatted: false,
                placeholder: ''
            }
        ];

    // var multer = require('multer'); //npm multer --save
    // var upload = multer({dest: _dirname + '/../../src/uploads/uploads'});

    app.post("/api/page/:pid/widget", createWidget);
    app.get("/api/page/:pid/widget", findAllWidgetsForPage);
    app.get("/api/widget/:wid", findWidgetById);
    app.put("/api/widget/:wid", updateWidget);
    app.delete("/api/widget/:wid", deleteWidget);

    app.put("/api/page/:pageId/widget", reorderWidgets);

    // app.post("/api/upload", upload.single('myFile'), uploadImage);


    // function uploadImage(req, res) {
    //     var userId = req.body.userId;
    //     var websiteId = req.body.websiteId;
    //     var pageId = req.body.pageId;
    //
    //
    //     var widgetId = req.body.widgetId;
    //     var width = req.body.width;
    //     var myFile = req.file;
    //
    //     if (myFile == null) {
    //         //res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
    //         res.redirect("http://localhost:3200/user/website/" + websiteId + "/page/" + pageId + "/widget/" + widgetId);
    //         return;
    //     }
    // }


        function createWidget(req, res) {
            var pageId = req.params.pageId;
            var widget = req.body;
            widgetModel
                .createWidget(pageId, widget)
                .then(function (widget) {
                    res.json(widget);
                }, function (err) {
                    res.sendStatus(400).send(err);
                });

            widgets.push(widget);
            /* return true only if the JSON object is inserted */
            res.send(200);
        }

        function findAllWidgetsForPage(req, res) {
            var pageId = req.params.pageId;
            var foundWidgets = [];
            for (let i = 0; i < widgets.length; i++) {
                if (widgets[i].developerId === pageId) {
                    foundWidgets.push(widgets[i]);
                }
            }
            res.json(foundWidgets);
        }


        function findWidgetById(req, res) {
            var widgetId = req.params._id;

            for (let i = 0; i < widgets.length; i++) {
                if (widgets[i]._id === widgetId) {
                    res.json(widgets[i]);
                    return;
                }
            }
        }

        function updateWidget(req, res) {
            var widgetId = req.params._id;
            var widget = req.body;

            for (let i = 0; i < widgets.length; i++) {
                if (widgets[i]._id === widgetId) {
                    switch (widget.widgetType) {
                        case 'HEADER':
                            widgets[i].text = widget.text;
                            widgets[i].size = widget.size;
                            res.json(widgets[i]);
                            return;

                        case 'IMAGE':
                            widgets[i].text = widget.text;
                            widgets[i].text = widget.width;
                            widgets[i].url = widget.url;
                            res.json(widgets[i]);
                            return;

                        case 'YOUTUBE':
                            widgets[i].text = widget.text;
                            widgets[i].text = widget.width;
                            widgets[i].url = widget.url;
                            res.json(widgets[i]);
                            return;
                    }

                }
            }
            res.status(404).send("Did not find widget to update");
        }

        function deleteWidget(req, res) {
            var widgetId = req.params._id;

            for (let i = 0; i < this.widgets.length; i++) {
                if (widgets[i]._id === widgetId) {
                    res.json(widgets[i]);
                    widgets.splice(i, 1);
                    return;
                }

            }
            res.status(404).send("Did not find widget to delete");
        }


        function reorderWidgets(req, res) {

            var startIndex = parseInt(req.query["start"]);
            var endIndex = parseInt(req.query["end"]);

            array_swap(widgets, startIndex, endIndex);
            res.sendStatus(200);

        }

    }
