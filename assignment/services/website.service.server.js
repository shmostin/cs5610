module.exports = function (app) {

    app.post("/api/user/:uid/website", createWebsite);
    app.get("/api/user/:uid/website", findAllWebsitesForUser);
    app.get("/api/website/:wid", findWebsiteById);
    app.put("/api/website/:wid", updateWebsite);
    app.delete("/api/website/:wid", deleteWebsite);


    const websites =
        [
            {_id: "001", name: "Facebook", developerId: "123", description: "Lorem"},
            {_id: "002", name: "Tweeter", developerId: "234", description: "Lorem"},
        ];


    /**
     * creates a website for this user if there is no duplicate for this user.
     * @param req the request coming in.
     * @param res the response going back out.
     */
    function createWebsite(req, res) {
        var userId = req.params.uid;
        var website = req.body;
        for (var i = 0; i < websites.length; i++) {
            if (websites[i].developerId === userId && websites[i].name === website.name) {
                res.status(404).send("This website is already exist.");
                return;
            }
        }
        website._id = Math.random().toString();
        website.developerId = userId;
        websites.push(website);
        res.json(website);
    }


    function findAllWebsitesForUser(req, res) {
        var userId = req.params.uid;
        var foundWebsites = [];
        for (let i = 0; i < websites.length; i++) {
            console.log('userId: ' + userId + ' VS developerId: ' + websites[i].developerId);
            if (websites[i].developerId === userId) {
                console.log('Found website: ' + websites[i].name);
                foundWebsites.push(websites[i]);
            }
        }
        return res.json(foundWebsites);
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.wid;

        for (let i = 0; i < websites.length; i++) {
            if (websites[i]._id === websiteId) {
                return res.json(websites[i]);
            }
        }
        res.status(404).send("Cannot find the website you are looking for!");
    }

    function updateWebsite(req, res) {
        var websiteId = req.params.wid;
        var updatedWebsite = req.body;

        console.log("update website: " + websiteId + " " + updatedWebsite.name + " " + updatedWebsite.description);
        for (var i = 0; i < websites.length; i++) {
            if (websites[i]._id === websiteId) {
                websites[i].name = updatedWebsite.name;
                websites[i].description = updatedWebsite.description;

                res.json(updatedWebsite);
                return;
            }
        }
        res.status(404).send("The Website you wanted to update was not found!");
    }

    function deleteWebsite(req, res) {
        var websiteId = req.params.wid;

        for (let i = 0; i < websites.length; i++) {
            if (websites[i]._id === websiteId) {
                res.json(websites[i]);
                websites.splice(i, 1);
                return;
            }
        }
        res.status(404).send("The Website (webId: " + websiteId + ") you wanted to delete was not found!");

    }
}