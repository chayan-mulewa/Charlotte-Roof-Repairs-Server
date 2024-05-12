// controllers/userController.js
const { Users } = require('../models/index');

const getUserProfile = (req, res) => {
    const user = req.user;
    if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    res.json(user);
};

module.exports = { getUserProfile };