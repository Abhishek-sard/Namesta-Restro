const express = require('express');
const {
    getMenus,
    createMenu,
    updateMenu,
    deleteMenu
} = require('../controllers/menuController');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

const { protect, authorize } = require('../middleware/authMiddleware');

router
    .route('/')
    .get(getMenus)
    .post(protect, authorize('admin'), upload.single('image'), createMenu);

router
    .route('/:id')
    .put(protect, authorize('admin'), upload.single('image'), updateMenu)
    .delete(protect, authorize('admin'), deleteMenu);

module.exports = router;
