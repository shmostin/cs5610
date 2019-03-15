module.exports = function(app) {

    app.post("/api/website/:wid/page", createPage);
    app.put("/api/user/:uid", updateUserById);

    app.get("/api/user/hello", helloUser);
    app.get("api/user/:uid", findUserById);
    app.get("/api/user", findUsers)

    var users =
        [
            new User('123', 'alice', 'alice', 'alice', 'alice', 'a@a.com'),
            new User('234', 'bob', 'bob', 'bob', 'bob', 'b@b.com'),
            new User('345', 'charly', 'charly', 'charly', 'charly', 'c@c.com'),
            new User('456', 'jannunzi', 'jannunzi', 'jannunzi', 'jannunzi', 'j@j.com'),
        ];


    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].websiteId === page.websiteId && pages[i].name === page.name) {
                res.status(404).send("This page has already existed.");
                return;
            }
        }

    function helloUser(req, res) {
        res.send("Hello from user service!");
    }

    function findUserById(req, res){
        var userId = req.params["userId"];
        var user = users.find(function (user) {
            return user._id === userId;
        });
        res.json(user);
    }


    function findAllUsers(req, res){
        res.json(users);
    }

    function findUsers(req, res){
        var username = req.query["username"];
        var password = req.query["password"];

        var user = null;

        if (username && password){
            user = users.find(function (user) {
                return user.username === username && user.password === password;
            });
        }
        res.json(user);
    }

    function updateUserById(req, res){
        var userId = req.params['userId'];
        var user = req.body;

        console.log(req.body);
        console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

        for(var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                users[i].firstName = user.firstName;
                users[i].lastName = user.lastName;

                res.status(200).send(user);
                return;
            }
        }
        res.status(404).send("not found!");
    }


}