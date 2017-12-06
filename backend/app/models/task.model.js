var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title: String,
    content: String,
    status: Boolean,
    user: String
});

module.exports = mongoose.model('Taks', TaskSchema);