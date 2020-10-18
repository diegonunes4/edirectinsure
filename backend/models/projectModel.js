const mongoose = require('mongoose');

/**
 * Create database scheme for project
 */
const userSchema = mongoose.Schema({
    name: String,
    birthdate: {
        type: Date,
        default: new Date()
    },
    email: String,
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    }]
});

module.exports = mongoose.model('User', userSchema);