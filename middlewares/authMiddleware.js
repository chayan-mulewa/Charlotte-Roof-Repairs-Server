// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const { Users } = require('../models/index');
const { JWTKey } = require('../config/index')

const authMiddleware = async (req, res, next) => {

  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Authorization token is required' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWTKey);
    // const user = await User.findById(decoded.userId);
    const user = await Users.findById(decoded.userId).select('-password');
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;

