module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');
    var task = require('../controllers/task.controller.js');
    var users = require('../controllers/user.controller.js');

    // Create a new Note
    app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);

    //Create a task
    app.post('/tasks', task.create);

    //Find all task
    app.get('/tasks', task.findAll);

    //Find one task
    app.get('/tasks/:taskId', task.findOne);

    //Update task
    app.put('/tasks/:taskId', task.update);

    //Delete task
    app.delete('/tasks/:taskId', task.delete);

    //USER
    app.post('/users', users.create);
    app.put('/users/:userId', users.update);
    app.get('/users', users.findAll);
    app.get('/users/:userId', users.findOne);
    app.get('/users-email/:userEmail', users.findEmail);
    app.delete('/users/:userId', users.delete);
    app.post('/users-login', users.login);
}