const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/authmiddleware');

const router = express.Router();

router.post('/', authMiddleware, createOrder);  // Create Order (requires authentication)
router.get('/', authMiddleware, getUserOrders);  // Get User's Orders (requires authentication)

module.exports = router;
