import express from 'express';
import {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
} from '../controllers/orderController.js';

const router = express.Router();

router.get('/debug/ping', (req, res) => {
    res.json({ message: 'pong', timestamp: Date.now(), version: 'v2' });
});

/**
 * PUBLIC ROUTES
 */

/**
 * POST /api/orders
 * Create a new order
 */
router.post('/', createOrder);

/**
 * GET /api/orders/:id
 * Get order by ID
 */
router.get('/:id', getOrderById);

/**
 * ADMIN ROUTES
 * GET /api/orders
 * Get all orders
 */
router.get('/', getOrders);

/**
 * PUT /api/orders/:id
 * Update order
 */
router.put('/:id', updateOrder);

/**
 * DELETE /api/orders/:id
 * Delete order
 */
router.delete('/:id', deleteOrder);

export default router;
