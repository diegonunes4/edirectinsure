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
    project: [{
        name: String,
        tasks: [{
            name: String,
            creationDate: {
                type: Date,
                default: new Date()
            },
            finishDate: {
                type: Date,
                default: new Date()
            }
        }]
    }],
});

var User = module.exports = mongoose.model('User', userSchema);

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}