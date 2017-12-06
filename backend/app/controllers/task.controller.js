var Taks = require('../models/task.model.js');

exports.create = function(req, res) {
    var task = new Taks(
        {
            title: req.body.title,
            content: req.body.content,
            status: req.body.status,
            user: req.body.user
        }
    );

    task.save(function(err, data) {        
        if(err) {
            res.status(500).send({message: "Some error ocuured while creating"})
        } else {
            res.send(data);
        }
    });
}

exports.findAll = function(req, res) {
    Taks.find({ user: req.params.user },function(err, taks) {
        if(err) {
            res.status(500).send({message: "Some erro ocuured while findAll"})
        } else {
            res.send(taks);
        }
    });
}

exports.findOne = function(req, res) {
    Taks.findById(req.params.taskId, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not retrieve note with id " + req.params.taskId});
        } else {
            res.send(data);
        }
    });
}

exports.update = function(req, res) {
    // Update a note identified by the noteId in the request
    Taks.findById(req.params.taskId, function(err, task) {
        if(err) {
            res.status(500).send({message: "Could not find a task with id " + req.params.taskId});
        }

        task.title = req.body.title;
        task.content = req.body.content;
        task.status = req.body.status;
        task.user = req.body.user;

        task.save(function(err, data){
            if(err) {
                res.status(500).send({message: "Could not update task with id " + req.params.taskId});
            } else {
                res.send(data);
            }
        });
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Taks.remove({_id: req.params.taskId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete task with id " + req.params.id});
        } else {
            res.send({message: "Task deleted successfully!"})
        }
    });
};
