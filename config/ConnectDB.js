const mongoose = require('mongoose');

const ConnectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log('mongoDB connected');
  } catch (error) {
    console.log('mongoDB connection failed:', error);
  }
};

module.exports = ConnectDB;
