module.exports = function(app) {

    app.put("/api/user/:uid", updateUserById);
    app.post("/api/user", createUser);

    app.get("/api/user", findUserByCredentials);
    app.get("api/user/hello", helloUser);
    app.get("/api/user/:uid", findUserById);
    app.get("/api/user", findUsers);

    var userModel = require('../model/user/user.model.server')

    var users =
        [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];


    function createUser(req, res) {
        var newUser = req.body;
        console.log("at create user");
        userModel
            .createUser(newUser)
            .then(
                function(user) {
                    console.log('User Created!');
                    res.sendStatus(200).send(user)
        },
                function(error) {
        console.log("create user error: " + error);
        res.status(400).send(error);
        });

        for (var i = 0; i < users.length; i++) {
            if (users[i].username === user["username"]) {
                res.status(404).send("This username is already exist.");
                return;
            }
        }
        user._id = Math.random().toString();
        users.push(user);
        res.json(user);
    };


    function helloUser(req, res) {
        console.log("testing helloUser");
        res.send("Hello from user service!");
    }

    function findUserById(req, res){
        var userId = req.params['uid'];
        console.log("userId that was found in the req params: " + userId);
        for (var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                res.status(200).send(users[i]);
                return;
            }
        }
        res.status(404).send("UserId does not match any users");
    }

    function findUserByCredentials(req, res) {
        console.log("calling findUserByCredentials on the server side");
        var username = req.query['username'];
        var password = req.query['password'];
        console.log("username from server request: " + username);
        console.log("password from server request: " + password);
        console.log("about to check the users");
        console.log("users: " + users.toString());
        for (var i = 0; i < users.length; i++) {
            console.log("checking " + users[i].username);
            if (users[i].username === username && users[i].password === password) {
                console.log("we found " + username);
                res.json(users[i]);
                return;
            } else {
                console.log("not " + username);
            }
        }
        res.status(404).send("User not found by Credentials");
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
        var userId = req.params['uid'];
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