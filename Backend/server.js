const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const menuRoutes = require('./routes/menuRoutes');
const connectDB = require('./config/db');

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(express.json());  // Body parser for JSON

// Routes
app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/menu', menuRoutes);

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
