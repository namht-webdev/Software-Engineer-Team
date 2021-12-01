const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
const verifyUser = require('../middleware/verifyUser');
const verifyAmind = require('../middleware/verifyAdmin');

router.post('/register', UserController.register);
router.post('/activate', UserController.verifyEmail);

// Login
router.post('/login', UserController.login);
router.get('/refresh-token', UserController.getAccessToken);

// Reset password
router.post('/forgot-password', UserController.forgotPassword);
router.patch('/reset-password', verifyUser, UserController.resetPassword);

// Admin

router.post('/block', verifyUser, verifyAmind, UserController.blockUser);


module.exports = router;