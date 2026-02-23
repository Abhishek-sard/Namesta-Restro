import express from 'express';
import { registerUser, loginUser, getUserProfile, getAllUsers, updatePassword } from '../controllers/authController.js';
import { protect, authorize } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
router.get('/users', protect, authorize('admin'), getAllUsers);
router.put('/updatepassword', protect, updatePassword);

export default router;
