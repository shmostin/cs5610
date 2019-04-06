module.exports = function(app) {

    app.put("/api/user/:uid", updateUserById);
    app.post("/api/user", createUser);
    app.get("/api/username", findByUsername);

    app.get("/api/user", findUserByCredentials);
    app.get("api/user/hello", helloUser);
    app.get("/api/user/:uid", findUserById);
    app.get("/api/user", findUsers);
    app.delete("/api/user/:uid", deleteUser);

    app.post('/api/register', register);

    // please delete when pushed to heroku
    app.get("/api/populate", populateUsers);


    var userModel = require('../model/user/user.model.server');

    var users =
        [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];


    function register(req, res) {
        //grab the username and password
        var user = req.body;

        return userModel.createUser(user)
            .then(
                function (user) {
                    //if a user is found go to login
                    if (user) {
                        req.login(user, function (err) {
                            if (err) {
                                res.status(400).send(err);
                            } else {
                                //otherwise create the user on the db
                                res.json(user);
                            }
                        });
                    }
                });
    }



    function populateUsers(req,res) {
        console.log("populating the DB!");
        //res.send("pop DB!");
        userModel.populateUsers(users)
            .then(
                function (users) {
                    console.log("users populated!");
                    res.json(users);
                },
                function (error) {
                    if (error) {
                        console.log(error);
                        res.statusCode(400).send(error);
                    }
                }
            );
    }

    function findByUsername(req, res) {
        console.log('server service findByUserName was called');
        const username = req.query["username"];
        console.log('username found in query: ' + username);
        userModel.findUserByUserName(username)
            .then(
                function (user) {
                    res.send(user);
                }, function (error) {
                    res.status(400).send(error);
                });
    }

    function createUser(req, res){
        var newuser = req.body;
        // console.log('newUser from the req body: ' + newuser);
        userModel.createUser(newuser).
        then(function(user){
            res.send(user);

        }, function(error){
            console.log("create user error:" + error);
            res.status(400);

        });
    }
    // function createUser(req, res) {
    //     var newUser = req.body;
    //     console.log(newUser);
    //     console.log("at create user");
    //     userModel
    //         .createUser(newUser)
    //         .then(
    //             function(user) {
    //                 console.log('User Created!');
    //                 return res.send(user);
    //                  //needs to be returned or it keeps calling itself again
    //     },
    //             function(error) {
    //     console.log("create user error: " + error);
    //
    //     return res.status(400).send(error);
    //     });

        // for (var i = 0; i < users.length; i++) {
        //     if (users[i].username === user["username"]) {
        //         res.status(404).send("This username is already exist.");
        //         return;
        //     }
        // }
        // user._id = Math.random().toString();
        // users.push(user);
        // res.json(user);
    // };


    function helloUser(req, res) {
        console.log("testing helloUser");
        res.send("Hello from user service!");
    }

    function findUserById(req, res){
        var userId = req.params['uid'];
        console.log("userId that was found in the req params: " + userId);
        // for (var i = 0; i < users.length; i++) {
        //     if (users[i]._id === userId) {
        //         res.status(200).send(users[i]);
        //         return;
        //     }
        // }
        userModel.findUserById(userId).exec(
            function (err,user) {
                if (err) {
                    return res.sendStatus(400).send(err);
                }
                return res.json(user);
            });
    }

    function findUserByCredentials(req, res) {
        console.log("calling findUserByCredentials on the server side");
        var username = req.query['username'];
        var password = req.query['password'];
        console.log("username from server request: " + username);
        console.log("password from server request: " + password);
        console.log("about to check the users");
        console.log("users: " + users.toString());
        // for (var i = 0; i < users.length; i++) {
        //     console.log("checking " + users[i].username);
        //     if (users[i].username === username && users[i].password === password) {
        //         console.log("we found " + username);
        //         res.json(users[i]);
        //         return;
        //     } else {
        //         console.log("not " + username);
        //     }
        // }

        userModel.findByCredential(username, password)
            .then(
                function(user) {
                    res.send(user);
                }, function (error) {
                    res.status(400).send("User not found by Credentials")
                });
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

        userModel.updateUser(userId, user)
            .exec(
                function (err, user) {
                    if (err) {
                        return res.sendStatus(400).send(err);
                    }
                    return res.status(200).send(user);
                });
    }


    function deleteUser(req, res) {
        const userId = req.params['uid'];
        userModel.deleteUser(userId)
            .then(
                function (user) {
                    res.send(user);
                }, function (error) {
                    res.status(400).send("User was not found");
                });
    }
}