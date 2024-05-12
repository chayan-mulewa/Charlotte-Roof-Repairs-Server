// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { authController } = require('../controllers/index');

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signinWithGoogle', authController.signinWithGoogle);
router.get('/validateToken', authController.validateToken);
router.post('/validateEmail', authController.validateEmail);
router.post('/sendOTP', authController.sendOTP);
router.post('/resetPassword', authController.resetPassword);

// router.post('/logout', authController.logout);

module.exports = router;
