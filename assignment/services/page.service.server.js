module.exports = function(app) {
    app.post("/api/website/:wid/page", createPage);
    app.get("/api/website/:wid/page", findAllPagesForWebsite);
    app.get("/api/page/:pid", findPageById);
    app.put("/api/page/:pid", updatePage);
    app.delete("/api/page/:pid", deletePage);

    let pages =
        [
            {_id: "321", name: "Post 1", websiteId: "456", title: "Lorem"},
            {_id: "432", name: "Post 2", websiteId: "456", title: "Lorem"},
            {_id: "543", name: "Post 3", websiteId: "456", title: "Lorem"}
        ];


   function createPage(req, res) {
       var websiteId = req.params.websiteId;
       var newPage = req.body;

       for (var i = 0; i < pages.length; i++) {
           if (pages[i].websiteId === newPage.websiteId && pages[i].name === newPage.name) {
               res.status(404).send("This page has already existed.");
               return;
           }
       }

       newPage._id = Math.random().toString();
       newPage.websiteId = websiteId;
       pages.push(newPage);
       res.json(newPage);
    }

    function findAllPagesForWebsite(req, res) {
       var websiteId = req.params.websiteId;
       var pagesFound = [];
       for (var i = 0; i < pages.length; i++) {
           if (pages[i].websiteId === websiteId) {
               pagesFound.push(pages[i]);
           }
       }
       res.json(pagesFound);
    }



    findPageByWebsiteId(websiteId)
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