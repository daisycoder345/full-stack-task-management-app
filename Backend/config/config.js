module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'yoursecretkey',  // Secure this key in .env
    MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/yourdb', // MongoDB URI
  };
  