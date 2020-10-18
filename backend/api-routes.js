// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!',
    });
});

// Import user controller
var userController = require('./controllers/userController');
// User routes
router.route('/user')
    .get(userController.index)
    .post(userController.createUser);
router.route('/user/:name')
    .get(userController.findUserByName)
    .patch(userController.updateUserByName)
    .put(userController.updateUserByName)
    .delete(userController.deleteUserByName)
router.route('/projects/:name')
    .put(userController.insertProjectToUser)



// Export API routes
module.exports = router;