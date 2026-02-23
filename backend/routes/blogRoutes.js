import express from 'express';
import { getBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/blogController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);

// Protected routes (Admin only)
router.post('/', protect, authorize('admin'), upload.single('image'), createBlog);
router.put('/:id', protect, authorize('admin'), upload.single('image'), updateBlog);
router.delete('/:id', protect, authorize('admin'), deleteBlog);

export default router;
