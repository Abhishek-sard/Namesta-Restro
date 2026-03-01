import express from 'express';
import {
    createPaymentIntent,
    confirmPaymentIntent,
    getPaymentIntent,
    refundPayment
} from '../controllers/paymentController.js';

const router = express.Router();

// Create payment intent
router.post('/intent', createPaymentIntent);

// Confirm payment (server-side confirm, optional)
router.post('/confirm', confirmPaymentIntent);

// Get payment intent status
router.get('/:id', getPaymentIntent);

// Refund
router.post('/refund', refundPayment);

export default router;
