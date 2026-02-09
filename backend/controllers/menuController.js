const Menu = require('../models/Menu');

// @desc    Get all menu items
// @route   GET /api/menu
// @access  Public
exports.getMenus = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.status(200).json({
            success: true,
            count: menus.length,
            data: menus
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Create new menu item
// @route   POST /api/menu
// @access  Private/Admin
exports.createMenu = async (req, res) => {
    try {
        const menuData = { ...req.body };
        if (req.file) {
            menuData.image = `http://localhost:5000/uploads/${req.file.filename}`;
        }

        const menu = await Menu.create(menuData);
        res.status(201).json({
            success: true,
            data: menu
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Update menu item
// @route   PUT /api/menu/:id
// @access  Private/Admin
exports.updateMenu = async (req, res) => {
    try {
        let menu = await Menu.findById(req.params.id);
        if (!menu) {
            return res.status(404).json({ success: false, error: 'Menu item not found' });
        }

        const menuData = { ...req.body };
        if (req.file) {
            menuData.image = `http://localhost:5000/uploads/${req.file.filename}`;
        }

        menu = await Menu.findByIdAndUpdate(req.params.id, menuData, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: menu
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Delete menu item
// @route   DELETE /api/menu/:id
// @access  Private/Admin
exports.deleteMenu = async (req, res) => {
    try {
        const menu = await Menu.findByIdAndDelete(req.params.id);

        if (!menu) {
            return res.status(404).json({ success: false, error: 'Menu item not found' });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};
