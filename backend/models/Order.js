import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    orderNumber: {
        type: String,
        unique: true
    },
    customerName: {
        type: String,
        required: [true, 'Please add customer name'],
        trim: true
    },
    customerPhone: {
        type: String,
        required: [true, 'Please add phone number'],
        trim: true
    },
    customerEmail: {
        type: String,
        required: [true, 'Please add email'],
        trim: true,
        lowercase: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please add a valid email'
        ]
    },
    orderType: {
        type: String,
        enum: ['dine-in', 'delivery', 'pickup'],
        required: true
    },
    deliveryAddress: {
        type: String,
        default: ''
    },
    tableNumber: {
        type: String,
        default: ''
    },
    pickupTime: {
        type: String,
        default: 'ASAP'
    },
    specialInstructions: {
        type: String,
        default: ''
    },
    items: [
        {
            menuItem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Menu',
                required: true
            },
            quantity: {
                type: Number,
                required: true,
                min: 1
            },
            price: {
                type: Number,
                required: true
            }
        }
    ],
    subtotal: {
        type: Number,
        required: true
    },
    tax: {
        type: Number,
        required: true
    },
    deliveryFee: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending_payment', 'paid', 'preparing', 'ready', 'completed', 'cancelled'],
        default: 'pending_payment'
    },
    paymentMethod: {
        type: String,
        enum: ['stripe', 'cash'],
        default: 'stripe'
    },
    stripePaymentIntentId: {
        type: String,
        default: null
    },
    paidAt: {
        type: Date,
        default: null
    }
}, {
    timestamps: true
});

// Order number is now generated in the controller before creation

export default mongoose.model('Order', orderSchema);
