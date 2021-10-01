const mongoose = require('mongoose');

// User schema
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true,
    },
    fileName: {
        type: String,
        trim: true,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: false,
    },
    url: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Post', postSchema);
