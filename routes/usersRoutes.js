// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middlewares/index');
const { usersController } = require('../controllers/index');

router.get('/profile', authMiddleware, usersController.getUserProfile);

module.exports = router;
