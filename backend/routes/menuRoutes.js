import express from 'express';
import { getMenus, createMenu, updateMenu, deleteMenu } from '../controllers/menuController.js';
import upload from '../middleware/uploadMiddleware.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router
    .route('/')
    .get(getMenus)
    .post(protect, authorize('admin'), upload.single('image'), createMenu);

router
    .route('/:id')
    .put(protect, authorize('admin'), upload.single('image'), updateMenu)
    .delete(protect, authorize('admin'), deleteMenu);

export default router;
