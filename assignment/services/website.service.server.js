module.exports = function (app) {

    app.post("/api/user/:uid/website", createWebsite);
    app.get("/api/user/:uid/website", findAllWebsitesForUser);
    app.get("/api/user/:uid/website/:wid", findWebsiteById);
    app.put("/api/user/:uid/website/:wid", updateWebsite);
    app.delete("/api/website/:wid", deleteWebsite);

    const websiteModel = require('../model/website/website.model.server');


    // const websites =
    //     [
    //         {_id: "567", name: "Facebook", developerId: "123", description: "Lorem"},
    //         {_id: "456", name: "Tweeter", developerId: "234", description: "Lorem"},
    //     ];


    /**
     * creates a website for this user if there is no duplicate for this user.
     * @param req the request coming in.
     * @param res the response going back out.
     */
    function createWebsite(req, res) {
        console.log('CreateWebsite from server side called');
        var uid = req.params['uid'];
        var website = req.body;
        console.log('req.body from createWebsite: ' + website);

        website.developerId = uid;
        websiteModel.createWebsite(uid, website)
            .then(function (website) {
                    res.status(200).send(website);
                    return website;
                },
                function (err) {
                    console.log('ERROR ' + err);
                    res.sendStatus(400);
                    return err;

                });
    }


    function findAllWebsitesForUser(req, res) {
        console.log('FIND ALL WEBSITES FOR USER IN WEB.SERVICE');
        var uid = req.params['uid'];
        console.log('UID: ' + uid);

        websiteModel.findAllWebsitesForUser(uid)
            .then(function (websitesfound) {
                console.log('A WEBSITE WAS FOUND BY THIS ID');
                res.status(200).json(websitesfound);
            }, function (err) {
                console.log('ERROR in find all websites for user: ' + err);
                res.status(400);
            });

    }

    function findWebsiteById(req, res) {
        console.log('FIND WEBSITE BY WID');
        var wid = req.params['wid'];
        websiteModel.findWebsiteById(wid).exec(
            function (err, website) {
                if (err) {
                    return res.status(400).send(err);
                }
                if (website == null) {
                    return res.sendStatus(404);
                }
                return res.status(200).send(website);
            }
        );
    }

    function updateWebsite(req, res) {
        console.log('UPDATE WEBSITE BY WID');
        var websiteId = req.params['wid'];
        var website = req.body;
        console.log('THE NEW WEBSITE: ' + JSON.stringify(website));
        console.log('THE WID: ' + JSON.stringify(websiteId));
        websiteModel.updateWebsite(websiteId, website).exec(
            function (err, website) {
                if (err) {
                    return res.status(400).send('ERROR: ' + err);
                }
                return res.status(200).send(website);
            }
        );
    }

    function deleteWebsite(req, res) {
        var wid = req.params['wid'];
        var uid = req.params['uid'];

        websiteModel.deleteWebsite(uid, wid).exec(
            function (err, website) {
                if (err) {
                    return res.status(400).send(err);
                } else {
                    return res.status(200).send(website);
                }
            });
    }
}