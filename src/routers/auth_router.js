const userController = require('../controllers/user_controller');
const { postFormData } = require("../middlewares/multer");

const router = require('express').Router();

router.post('/login',postFormData.none(), userController.login);

module.exports = router;