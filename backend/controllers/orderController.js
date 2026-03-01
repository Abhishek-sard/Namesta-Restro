import Order from '../models/Order.js';
import Menu from '../models/Menu.js';

// @desc    Create a new order
// @route   POST /api/orders
// @access  Public
const createOrder = async (req, res) => {
    try {
        const {
            customerName,
            customerPhone,
            customerEmail,
            orderType,
            deliveryAddress,
            tableNumber,
            pickupTime,
            specialInstructions,
            items,
            subtotal,
            tax,
            deliveryFee,
            total,
            paymentMethod
        } = req.body;

        // Validate required fields
        if (!customerName || !customerPhone || !customerEmail) {
            return res.status(400).json({
                success: false,
                error: 'Please provide customer name, phone, and email'
            });
        }

        if (!items || items.length === 0) {
            return res.status(400).json({
                success: false,
                error: 'Please provide at least one item'
            });
        }

        // Validate items exist in menu and get prices
        for (let item of items) {
            const menuItem = await Menu.findById(item.menuItem);
            if (!menuItem) {
                return res.status(404).json({
                    success: false,
                    error: `Menu item ${item.menuItem} not found`
                });
            }
        }

        // Generate order number
        const count = await Order.countDocuments();
        const orderNumber = `ORD-${Date.now()}-${count + 1}`;

        // Create order
        const order = await Order.create({
            orderNumber,
            customerName: customerName.trim(),
            customerPhone: customerPhone.trim(),
            customerEmail: customerEmail.trim().toLowerCase(),
            orderType,
            deliveryAddress: deliveryAddress || '',
            tableNumber: tableNumber || '',
            pickupTime: pickupTime || 'ASAP',
            specialInstructions: specialInstructions || '',
            items,
            subtotal,
            tax,
            deliveryFee: deliveryFee || 0,
            total,
            status: 'pending_payment',
            paymentMethod: paymentMethod || 'stripe'
        });

        res.status(201).json({
            success: true,
            message: 'Order created successfully',
            order: order
        });

    } catch (err) {
        console.error('Error creating order:', err);
        res.status(400).json({
            success: false,
            error: err.message || 'Error creating order'
        });
    }
};

// @desc    Get all orders
// @route   GET /api/orders
// @access  Admin
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate('items.menuItem');
        res.status(200).json({
            success: true,
            count: orders.length,
            data: orders
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};

// @desc    Get order by ID
// @route   GET /api/orders/:id
// @access  Public
const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.id).populate('items.menuItem');

        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            data: order
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};

// @desc    Update order status
// @route   PUT /api/orders/:id
// @access  Admin
const updateOrder = async (req, res) => {
    try {
        const { status, stripePaymentIntentId, paidAt } = req.body;

        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found'
            });
        }

        if (status) order.status = status;
        if (stripePaymentIntentId) order.stripePaymentIntentId = stripePaymentIntentId;
        if (paidAt) order.paidAt = paidAt;

        await order.save();

        res.status(200).json({
            success: true,
            message: 'Order updated successfully',
            data: order
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};

// @desc    Delete order
// @route   DELETE /api/orders/:id
// @access  Admin
const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id);

        if (!order) {
            return res.status(404).json({
                success: false,
                error: 'Order not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Order deleted successfully'
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            error: err.message
        });
    }
};

export {
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
