const mongoose = require('mongoose');

/**
 * Create database scheme for user
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

var User = module.exports = mongoose.model('User', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}