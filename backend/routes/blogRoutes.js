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

router.get('/', getBlogs);
router.get('/:id', getBlog);

// Protected routes (Admin only)
router.post('/', protect, authorize('admin'), createBlog);
router.put('/:id', protect, authorize('admin'), updateBlog);
router.delete('/:id', protect, authorize('admin'), deleteBlog);

module.exports = router;
