const Order = require('../models/Order');

// Create Order
const createOrder = async (req, res) => {
  const { items, totalAmount } = req.body;
  const userId = req.user; // Extracted from JWT token

  try {
    const newOrder = new Order({ userId, items, totalAmount });
    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (err) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Get User Orders
const getUserOrders = async (req, res) => {
  const userId = req.user;

  try {
    const orders = await Order.find({ userId });
    res.json({ orders });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching orders' });
  }
};

module.exports = { createOrder, getUserOrders };
