const express = require('express');
const router = express.Router();
const {
    getBlogs,
    getBlog,
    createBlog,
    updateBlog,
    deleteBlog
} = require('../controllers/blogController');
const { protect, authorize } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.get('/', getBlogs);
router.get('/:id', getBlog);

// Protected routes (Admin only)
router.post('/', protect, authorize('admin'), upload.single('image'), createBlog);
router.put('/:id', protect, authorize('admin'), upload.single('image'), updateBlog);
router.delete('/:id', protect, authorize('admin'), deleteBlog);

module.exports = router;
