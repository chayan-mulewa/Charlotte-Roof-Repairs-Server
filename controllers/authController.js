// controllers/authController.js
const { authService } = require('../services/index');

const signup = async (req, res) => {
  try {
    const { full_name, email, username, password } = req.body;
    const result = await authService.signup(full_name, email, username, password);
    if (result.success) {
      res.status(201).json({ message: result.message });
    } else {
      if (result.error === 'username' || result.error === 'email') {
        res.status(409).json({ error: result.error, message: result.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const result = await authService.signin(username, password);
    if (result.success) {
      res.json({ token: result.data });
    } else {
      res.status(401).json({ error: result.error, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const signinWithGoogle = async (req, res) => {
  try {
    const { full_name, username, email, token } = req.body;
    const result = await authService.signinWithGoogle(full_name, username, email, token);
    if (result.success) {
      res.json({ token: result.data });
    } else {
      res.status(401).json({ error: result.error, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const validateToken = async (req, res) => {
  try {
    const result = await authService.validateToken(req);
    if (result.success) {
      res.status(200).json({ message: 'Valid token' });
    } else {
      res.status(401).json({ error: result.error, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const validateEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const result = await authService.validateEmail(email);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ error: result.error, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const sendOTP = async (req, res) => {
  try {
    const { companyName, title, email, otp } = req.body;
    const result = await authService.sendOTP(companyName, title, email, otp);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ error: result.error, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const result = await authService.resetPassword(email, newPassword);
    if (result.success) {
      res.status(200).json({ message: result.message });
    } else {
      res.status(401).json({ error: result.error, message: result.message });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { full_name, email, username, password, profile_photo, userId } = req.body;
    const result = await authService.updateProfile(profile_photo, full_name, email, username, password, userId);
    if (result.success) {
      res.status(201).json({ message: result.message });
    } else {
      if (result.error === 'username' || result.error === 'email') {
        res.status(409).json({ error: result.error, message: result.message });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { signup, signin, signinWithGoogle, validateToken, validateEmail, sendOTP, resetPassword, updateProfile };