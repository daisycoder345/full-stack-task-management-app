const Menu = require('../models/Menu');

// Add Menu Item
const addMenuItem = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newMenuItem = new Menu({ name, description, price });
    await newMenuItem.save();
    res.status(201).json({ message: 'Menu item added', menuItem: newMenuItem });
  } catch (err) {
    res.status(500).json({ message: 'Error adding menu item' });
  }
};

// Get All Menu Items
const getMenuItems = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    res.json({ menuItems });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching menu items' });
  }
};

module.exports = { addMenuItem, getMenuItems };
