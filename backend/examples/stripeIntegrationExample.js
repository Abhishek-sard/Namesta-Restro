/**
 * Example: Using Stripe Integration in Your Application
 * This file shows how to use the Stripe system in real scenarios
 */

import { getStripeInstance } from '../controllers/stripeController.js';
import Order from '../models/Order.js'; // Assuming you have an Order model

// ============================================
// 1. CREATE PAYMENT INTENT (Backend)
// ============================================

export const createPaymentIntent = async (req, res) => {
    try {
        const { orderId, amount, currency = 'usd', customerId, description } = req.body;

        // Validate input
        if (!orderId || !amount) {
            return res.status(400).json({
                success: false,
                message: 'Order ID and amount are required'
            });
        }

        // Get Stripe instance with stored keys
        const stripe = await getStripeInstance();

        // Create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
            amount: Math.round(amount * 100), // Convert to cents
            currency,
            customer: customerId || undefined,
            description: description || `Order #${orderId}`,
            metadata: {
                orderId: orderId,
                orderDate: new Date().toISOString()
            }
        });

        // Save payment intent ID to order
        await Order.updateOne(
            { _id: orderId },
            {
                stripePaymentIntentId: paymentIntent.id,
                paymentStatus: 'pending'
            }
        );

        // Return client secret (safe to send to frontend)
        res.status(200).json({
            success: true,
            data: {
                clientSecret: paymentIntent.client_secret,
                paymentIntentId: paymentIntent.id
            }
        });

    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating payment intent',
            error: error.message
        });
    }
};

// ============================================
// 2. CONFIRM PAYMENT (Backend)
// ============================================

export const confirmPayment = async (req, res) => {
    try {
        const { paymentIntentId, paymentMethodId } = req.body;

        if (!paymentIntentId || !paymentMethodId) {
            return res.status(400).json({
                success: false,
                message: 'Payment intent ID and payment method ID are required'
            });
        }

        const stripe = await getStripeInstance();

        // Confirm the payment intent
        const paymentIntent = await stripe.paymentIntents.confirm(
            paymentIntentId,
            {
                payment_method: paymentMethodId
            }
        );

        // Check payment status
        if (paymentIntent.status === 'succeeded') {
            // Update order status
            const order = await Order.findOne({
                stripePaymentIntentId: paymentIntentId
            });

            if (order) {
                order.paymentStatus = 'completed';
                order.stripePaymentId = paymentIntent.id;
                order.paidAt = new Date();
                await order.save();

                // TODO: Send confirmation email
                // TODO: Update inventory
                // TODO: Create invoice
            }

            return res.status(200).json({
                success: true,
                message: 'Payment successful',
                data: {
                    paymentIntentId: paymentIntent.id,
                    status: paymentIntent.status
                }
            });
        }

        if (paymentIntent.status === 'requires_action') {
            return res.status(200).json({
                success: false,
                message: 'Additional payment action required',
                data: {
                    clientSecret: paymentIntent.client_secret,
                    status: paymentIntent.status
                }
            });
        }

        res.status(400).json({
            success: false,
            message: 'Payment failed',
            data: {
                status: paymentIntent.status,
                error: paymentIntent.last_payment_error?.message
            }
        });

    } catch (error) {
        console.error('Error confirming payment:', error);
        res.status(500).json({
            success: false,
            message: 'Error confirming payment',
            error: error.message
        });
    }
};

// ============================================
// 3. GET PAYMENT STATUS
// ============================================

export const getPaymentStatus = async (req, res) => {
    try {
        const { paymentIntentId } = req.params;

        if (!paymentIntentId) {
            return res.status(400).json({
                success: false,
                message: 'Payment intent ID is required'
            });
        }

        const stripe = await getStripeInstance();

        const paymentIntent = await stripe.paymentIntents.retrieve(
            paymentIntentId
        );

        res.status(200).json({
            success: true,
            data: {
                paymentIntentId: paymentIntent.id,
                status: paymentIntent.status,
                amount: paymentIntent.amount / 100,
                currency: paymentIntent.currency,
                lastError: paymentIntent.last_payment_error
            }
        });

    } catch (error) {
        console.error('Error getting payment status:', error);
        res.status(500).json({
            success: false,
            message: 'Error getting payment status',
            error: error.message
        });
    }
};

// ============================================
// 4. REFUND PAYMENT
// ============================================

export const refundPayment = async (req, res) => {
    try {
        const { chargeId, amount, reason } = req.body;

        if (!chargeId) {
            return res.status(400).json({
                success: false,
                message: 'Charge ID is required'
            });
        }

        const stripe = await getStripeInstance();

        const refund = await stripe.refunds.create({
            charge: chargeId,
            amount: amount ? Math.round(amount * 100) : undefined, // Optional partial refund
            reason: reason || 'requested_by_customer'
        });

        // Update order status
        const order = await Order.updateOne(
            { stripePaymentId: chargeId },
            {
                paymentStatus: 'refunded',
                refundedAmount: refund.amount / 100,
                refundedAt: new Date()
            }
        );

        res.status(200).json({
            success: true,
            message: 'Refund processed successfully',
            data: {
                refundId: refund.id,
                amount: refund.amount / 100,
                status: refund.status
            }
        });

    } catch (error) {
        console.error('Error refunding payment:', error);
        res.status(500).json({
            success: false,
            message: 'Error refunding payment',
            error: error.message
        });
    }
};

// ============================================
// 5. CREATE CUSTOMER
// ============================================

export const createStripeCustomer = async (req, res) => {
    try {
        const { userId, name, email, phone } = req.body;

        if (!userId || !email) {
            return res.status(400).json({
                success: false,
                message: 'User ID and email are required'
            });
        }

        const stripe = await getStripeInstance();

        const customer = await stripe.customers.create({
            email,
            name,
            phone,
            metadata: {
                userId: userId.toString()
            }
        });

        // Save Stripe customer ID to user profile
        // Assuming you update your User model with stripeCustomerId
        // await User.updateOne({ _id: userId }, { stripeCustomerId: customer.id });

        res.status(200).json({
            success: true,
            message: 'Stripe customer created',
            data: {
                customerId: customer.id,
                email: customer.email
            }
        });

    } catch (error) {
        console.error('Error creating Stripe customer:', error);
        res.status(500).json({
            success: false,
            message: 'Error creating Stripe customer',
            error: error.message
        });
    }
};

// ============================================
// 6. FRONTEND EXAMPLE (React Component)
// ============================================

/**
 * Example React Component for Payment
 * (Add to your frontend)

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({ orderId, amount, publicKey }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsProcessing(true);

        try {
            // Step 1: Create payment intent on backend
            const response = await fetch('/api/payments/intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId,
                    amount,
                    currency: 'usd'
                })
            });

            const { data } = await response.json();
            const clientSecret = data.clientSecret;

            // Step 2: Confirm payment
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                    billing_details: { name: 'Customer Name' }
                }
            });

            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert('Payment successful!');
                // Redirect to order confirmation
            } else {
                alert('Payment failed');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment processing failed');
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || isProcessing}>
                {isProcessing ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

const StripePayment = ({ orderId, amount, publicKey }) => {
    const stripePromise = loadStripe(publicKey);

    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm orderId={orderId} amount={amount} publicKey={publicKey} />
        </Elements>
    );
};

export default StripePayment;

 */

// ============================================
// 7. WEBHOOK HANDLERS (Already in stripeController.js)
// ============================================

/**
 * The webhook handlers in stripeController.js handle:
 * - payment_intent.succeeded
 * - payment_intent.payment_failed
 * - charge.refunded
 * - invoice.paid
 * - invoice.payment_failed
 *
 * These automatically update order statuses and trigger
 * notifications without requiring frontend polling
 */

export default {
    createPaymentIntent,
    confirmPayment,
    getPaymentStatus,
    refundPayment,
    createStripeCustomer
};
