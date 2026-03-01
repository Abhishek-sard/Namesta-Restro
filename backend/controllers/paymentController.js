import { getStripeInstance } from './stripeController.js';
import Order from '../models/Order.js';

// Create Payment Intent
const createPaymentIntent = async (req, res) => {
    try {
        const { orderId, amount, currency = 'usd' } = req.body;

        if (!orderId || !amount) {
            return res.status(400).json({ success: false, message: 'orderId and amount are required' });
        }

        const stripe = await getStripeInstance();

        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100),
            currency,
            metadata: { orderId },
            automatic_payment_methods: { enabled: true }
        });

        res.status(201).json({ success: true, data: { clientSecret: paymentIntent.client_secret, id: paymentIntent.id } });
    } catch (err) {
        console.error('Error creating payment intent:', err);
        res.status(500).json({ success: false, message: 'Failed to create payment intent', error: err.message });
    }
};

// Confirm Payment Intent (optional server-side confirm)
const confirmPaymentIntent = async (req, res) => {
    try {
        const { paymentIntentId, paymentMethodId } = req.body;

        if (!paymentIntentId || !paymentMethodId) {
            return res.status(400).json({ success: false, message: 'paymentIntentId and paymentMethodId required' });
        }

        const stripe = await getStripeInstance();

        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
            payment_method: paymentMethodId
        });

        res.status(200).json({ success: true, data: paymentIntent });
    } catch (err) {
        console.error('Error confirming payment intent:', err);
        res.status(500).json({ success: false, message: 'Failed to confirm payment', error: err.message });
    }
};

// Get Payment Intent Status
const getPaymentIntent = async (req, res) => {
    try {
        const { id } = req.params;
        const stripe = await getStripeInstance();
        const paymentIntent = await stripe.paymentIntents.retrieve(id);
        res.status(200).json({ success: true, data: paymentIntent });
    } catch (err) {
        console.error('Error fetching payment intent:', err);
        res.status(500).json({ success: false, message: 'Failed to fetch payment intent', error: err.message });
    }
};

// Refund (by charge id)
const refundPayment = async (req, res) => {
    try {
        const { chargeId, amount, reason } = req.body;
        if (!chargeId) {
            return res.status(400).json({ success: false, message: 'chargeId is required' });
        }

        const stripe = await getStripeInstance();
        const refund = await stripe.refunds.create({
            charge: chargeId,
            amount: amount ? Math.round(amount * 100) : undefined,
            reason: reason || undefined
        });

        res.status(200).json({ success: true, data: refund });
    } catch (err) {
        console.error('Error creating refund:', err);
        res.status(500).json({ success: false, message: 'Failed to create refund', error: err.message });
    }
};

export {
    createPaymentIntent,
    confirmPaymentIntent,
    getPaymentIntent,
    refundPayment
};
