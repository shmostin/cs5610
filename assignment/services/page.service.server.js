module.exports = function (app) {

    const pageModel = require('../model/page/page.model.server');

    app.post("/api/website/:wid/page", createPage);
    app.get("/api/website/:wid/page", findAllPagesForWebsite);
    app.get("/api/website/:wid/page/:pid", findPageById);
    app.put("/api/page/:pid", updatePage);
    app.delete("/api/page/:pid", deletePage);

    let pages =
        [
            {_id: "321", name: "Post 1", websiteId: "567", title: "Lorem"},
            {_id: "432", name: "Post 2", websiteId: "456", title: "Lorem"},
            {_id: "543", name: "Post 3", websiteId: "456", title: "Lorem"}
        ];


    function createPage(req, res) {
        var page = req.body;
        var websiteId = req.params['wid'];

        page.website = websiteId;
        // delete page._id;
        pageModel.createPage(websiteId, page)
            .then(function (page) {
                    res.status(200).send(page);
                    return page;
                },
                function (err) {
                    console.log('ERROR ' + err);
                    res.sendStatus(400);
                    return err;

                });
    }

    function findAllPagesForWebsite(req, res) {
        var wid = req.params['wid'];
        console.log('current wid: ' + wid);
        pageModel.findAllPagesForWebsite(wid)
            .then(
                function (foundPages) {
                    res.send(foundPages);
                    console.log('PAGES FOUND: ' + JSON.stringify(foundPages));
                }, function (error) {
                    console.log('NO PAGES FOUND FOR THIS WEBSITE');
                    res.status(400).send(error);
                });
    }


    function findPageByWebsiteId(req, res) {
        var websiteId = req.params['wid'];
        pageModel.findAllPagesForWebsite(websiteId)
            .then(function (foundPages) {
                return res.status(200).json(foundPages);
            })
    }


    function findPageById(req, res) {
        var pageId = req.params['pid'];
        pageModel.findPageById(pageId).exec(
            function (err, page) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (page == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(page);
            }
        );
    }

    function updatePage(req, res) {
        var pid = req.params.pageId;
        var updatedPage = req.body;

        pageModel.updatePage(pid, updatedPage).exec(
            function (err, page) {
                if (err) {
                    return res.status(400).send(err);
                }
                return res.status(200).send(page);
            });
    }

    function deletePage(req, res) {
        var pageId = req.params['pid'];
        var websitId = req.params['wid'];

        pageModel.deletePage(pageId, websitId).exec(
            function (err, page) {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send(page);
                }
            }
        );
    }
};