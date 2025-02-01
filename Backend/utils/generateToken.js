const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/config');

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateToken };
