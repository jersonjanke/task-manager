module.exports = function(app) {

    var notes = require('../controllers/note.controller.js');
    var task = require('../controllers/task.controller.js');

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
}