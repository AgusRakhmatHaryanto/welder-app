const userController = require('../controllers/user_controller');

const router = require('express').Router();

router.post('/login', userController.login);

module.exports = router;