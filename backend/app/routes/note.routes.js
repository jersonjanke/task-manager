module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');
    var task = require('../controllers/task.controller.js');
    var users = require('../controllers/user.controller.js');

    // NOTE
    app.post('/notes', notes.create);
    app.get('/notes', notes.findAll);
    app.get('/notes/:noteId', notes.findOne);
    app.put('/notes/:noteId', notes.update);
    app.delete('/notes/:noteId', notes.delete);

    //TASK
    app.post('/tasks', task.create);
    app.get('/tasks/:user', task.findAll);
    app.get('/tasks/:taskId', task.findOne);
    app.put('/tasks/:taskId', task.update);
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