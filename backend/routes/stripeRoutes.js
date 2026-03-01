import express from 'express';
import { protect, authorize } from '../middleware/authMiddleware.js';
import {
    getStripeSettings,
    updateStripeSettings,
    handleStripeWebhook,
    toggleStripeEnabled
} from '../controllers/stripeController.js';

const router = express.Router();

/**
 * PUBLIC ROUTES
 */

/**
 * GET /api/stripe/config
 * Get Stripe public key (no secrets)
 */
router.get('/config', getStripeSettings);

/**
 * ADMIN ONLY ROUTES
 * Protected by JWT and Admin role
 */

/**
 * GET /api/stripe/settings
 * Get current Stripe settings (non-sensitive data only)
 */
router.get('/settings', protect, authorize('admin'), getStripeSettings);

/**
 * PUT /api/stripe/settings
 * Update Stripe settings (encrypt sensitive data)
 */
router.put('/settings', protect, authorize('admin'), updateStripeSettings);

/**
 * PUT /api/stripe/toggle
 * Enable/Disable Stripe payments
 */
router.put('/toggle', protect, authorize('admin'), toggleStripeEnabled);

/**
 * PUBLIC WEBHOOK ROUTE
 * POST /api/stripe/webhook
 * Handles Stripe webhook events
 * No authentication needed (verified by Stripe signature)
 */
router.post('/webhook', handleStripeWebhook);

export default router;
