module.exports = function(app) {

    const pageModel = require('../model/page/page.model.server');

    app.post("/api/website/:wid/page", createPage);
    app.get("/api/website/:wid/page", findAllPagesForWebsite);
    app.get("/api/page/:pid", findPageById);
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
                   console.log('create page error! ' + err);
                   res.sendStatus(400);
                   return err;

               });
    }

    function findAllPagesForWebsite(req, res) {
       var websiteId = req.params.wid;
       console.log('current wid: ' + websiteId);
       var pagesFound = [];
       for (var i = 0; i < pages.length; i++) {
           if (pages[i].websiteId === websiteId) {
               pagesFound.push(pages[i]);
           }
       }
       res.json(pagesFound);
    }



    function findPageByWebsiteId(websiteId)
    {
        const listOfPages = [];
        for (let i = 0; i < this.pages.length; i++) {
            if (this.pages[i].websiteId === websiteId) {
                listOfPages.push(this.pages[i]);
            }
        }
        return listOfPages;
    }


    function findPageById(req, res) {
       var pageId = req.params.pageId;

        for (let i = 0; i < pages.length; i++) {
            if (pages[i]._id === pageId) {
                return res.json(pages[i]);
            }
        }
        res.status(404).send("Cannot Find Page by id!");
    }

    function updatePage(req, res) {
        var pageId = req.params.pageId;
        var updatedPage = req.body;

        for (let i = 0; i < pages.length; i++) {
            if (pages[i]._id === pageId) {
                pages[i].name = updatedPage.name;
                pages[i].title = updatedPage.title;
                res.json(pages[i]);
                return;
            }
        }
        res.status(404).send("Cannot find page to update");
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;

        for (let i = 0; i < pages.length; i++) {
            if (pages[i]._id === pageId) {
                res.json(pages[i]);
                pages.splice(i, 1);
                return;
            }
        }
        res.status(404).send("Cannot find page to delete");
    }
}