var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title: String,
    content: String,
    status: Boolean
});

module.exports = mongoose.model('Taks', TaskSchema);