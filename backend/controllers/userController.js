// Import User model
const User = require('../models/userModel');
const mongoose = require('mongoose');

exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "User retrieved successfully",
            data: users
        });
    });
};

// Handle create user actions
exports.createUser = function (req, res) {
    var user = new User(req.body);
    user.save(function (err) {
        if (err)
            res.json(err);
        res.json({
            message: 'New user created!',
            data: user
        });
    });
};

// Handle view user info
exports.findUserByName = function (req, res) {
    User.find({ name: req.params.name }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'User details loading..',
            data: user
        });
    });
};

// Handle update user info
exports.updateUserByName = function (req, res) {
    User.find({ name: req.params.name }, function (err, user) {
        if (err)
            res.send(err);
        user.name = req.body.name,
            user.birthdate = req.body.birthdate,
            user.email = req.body.email,
            user.projects = req.body.projects
        // save the User and check for errors
        user.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User Info updated',
                data: user
            });
        });
    });
};

// Handle delete user
exports.deleteUserByName = function (req, res) {
    User.deleteOne({
        name: req.params.name
    }, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'User deleted'
        });
    });
};

exports.insertProjectToUser = function (req, res) {
    User.updateOne(
        { name: req.params.name },
        {
            $push: {
                project: {
                    name: req.body.name
                }
            }
        },
        function (err, success) {
            if (err)
                res.send(err);
            res.json({
                status: "success",
                message: 'User deleted'
            });
        });
};