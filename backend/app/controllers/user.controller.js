var User = require('../models/user.model');

exports.create = function(req, res) {
    var user = new User(
        {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    );

    user.save(function(err, data) {        
        if(err) {
            res.status(500).send({message: "Some error ocuured while creating"})
        } else {
            res.send(data);
        }
    });
}

exports.findAll = function(req, res)  {
    User.find(function(err, users) {
        if(err) {
            res.status(500).send({message: "Some erro ocuured while findAll"})
        } else {
            res.send(users);
        }
    });
}

exports.findOne = function(req, res) {
    User.findById(req.params.userId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not"})
        } else {
            res.send(data);
        }
    });
}

exports.findEmail = function(req, res) {
    User.find({email: req.params.userEmail }, function(err, data) {
        if(err) {
            res.status(500).send({message: "Not found!"});
        } else {
            res.send(data);
        }
    });
}

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    User.findById(req.params.userId, function(err, user) {
        if(err) {
            res.status(500).send({message: "Could not find a user with id " + req.params.userId});
        }

        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update user with id " + req.params.taskId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.login = function(req, res) {        
    User.find({ email: req.body.email, password: req.body.password}, function(err, data) {
        if(err) {
            res.status(500).send({message: "error login"});
        } else {
            if(data.length > 0)  {
                res.send({login: true, user: req.body.email});
            } else {
                res.send({login: false, user: req.body.email});   
            }
        }
    });
}

exports.delete = function(req, res) {
    User.remove({_id: req.params.userId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "erro while deleting."});
        } else {
            res.send({message: "User deleted successfully!"});
        }
    })
}