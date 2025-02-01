const express = require('express');
const { addMenuItem, getMenuItems } = require('../controllers/menuController');

const router = express.Router();

router.post('/', addMenuItem);  // Add menu item
router.get('/', getMenuItems);  // Get all menu items

module.exports = router;
