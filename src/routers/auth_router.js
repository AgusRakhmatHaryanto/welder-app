const authController = require('../controllers/auth_controller');
const userController = require('../controllers/user_controller');
const { postFormData } = require("../middlewares/multer");

const router = require('express').Router();

router.post('/login',postFormData.none(), authController.login);
router.get('/token/:token', authController.findByToken);
router.get('/refresh', authController.refreshToken);
router.delete('/token/:token', authController.deleteByToken);
router.get('/verify/:token', authController.verifyEmailToken);

module.exports = router;