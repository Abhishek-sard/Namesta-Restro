import StripeSettings from '../models/StripeSettings.js';
import { encryptSecret, decryptSecret } from '../utils/encryption.js';
import stripe from 'stripe';

/**
 * Get Stripe Settings (Admin only)
 * Returns public key and webhook URL (doesn't expose secrets)
 */
export const getStripeSettings = async (req, res) => {
    try {
        let settings = await StripeSettings.findOne();

        if (!settings) {
            return res.status(404).json({
                success: false,
                message: 'Stripe settings not configured'
            });
        }

        // Return non-sensitive data only
        res.status(200).json({
            success: true,
            data: {
                publicKey: settings.publicKey,
                webhookUrl: settings.webhookUrl,
                isLive: settings.isLive,
                isEnabled: settings.isEnabled,
                lastUpdated: settings.updatedAt
            }
        });
    } catch (error) {
        console.error('Error fetching stripe settings:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching stripe settings',
            error: error.message
        });
    }
};

/**
 * Update Stripe Settings (Admin only)
 * Encrypts secret keys before storing
 */
export const updateStripeSettings = async (req, res) => {
    try {
        const { publicKey, secretKey, webhookSecret, webhookUrl } = req.body;

        // Validate input
        if (!publicKey || !secretKey || !webhookSecret) {
            return res.status(400).json({
                success: false,
                message: 'Public key, secret key, and webhook secret are required'
            });
        }

        // Validate key formats
        if (!publicKey.startsWith('pk_test_') && !publicKey.startsWith('pk_live_')) {
            return res.status(400).json({
                success: false,
                message: 'Invalid public key format. Must start with pk_test_ or pk_live_'
            });
        }

        if (!secretKey.startsWith('sk_test_') && !secretKey.startsWith('sk_live_')) {
            return res.status(400).json({
                success: false,
                message: 'Invalid secret key format. Must start with sk_test_ or sk_live_'
            });
        }

        if (!webhookSecret.startsWith('whsec_')) {
            return res.status(400).json({
                success: false,
                message: 'Invalid webhook secret format. Must start with whsec_'
            });
        }

        // Verify keys match (test vs live)
        const isLive = publicKey.startsWith('pk_live_');
        if (isLive !== secretKey.startsWith('sk_live_')) {
            return res.status(400).json({
                success: false,
                message: 'Public key and secret key must both be test or both be live'
            });
        }

        // Encrypt sensitive data
        let encryptedSecretKey, encryptedWebhookSecret;
        try {
            encryptedSecretKey = encryptSecret(secretKey);
            encryptedWebhookSecret = encryptSecret(webhookSecret);
        } catch (encryptError) {
            console.error('Encryption error:', encryptError);
            return res.status(500).json({
                success: false,
                message: 'Failed to encrypt sensitive data'
            });
        }

        // Find or create settings (upsert pattern)
        let settings = await StripeSettings.findOne();

        if (!settings) {
            settings = new StripeSettings({
                publicKey,
                secretKey: encryptedSecretKey,
                webhookSecret: encryptedWebhookSecret,
                webhookUrl: webhookUrl || `${process.env.DOMAIN || 'http://localhost:5000'}/api/stripe/webhook`,
                isLive,
                updatedBy: req.user._id
            });
        } else {
            // Update existing settings
            settings.publicKey = publicKey;
            settings.secretKey = encryptedSecretKey;
            settings.webhookSecret = encryptedWebhookSecret;
            settings.webhookUrl = webhookUrl || settings.webhookUrl;
            settings.isLive = isLive;
            settings.updatedBy = req.user._id;
            settings.updatedAt = new Date();
        }

        await settings.save();

        // Return response without sensitive data
        res.status(200).json({
            success: true,
            message: 'Stripe settings updated successfully',
            data: {
                publicKey: settings.publicKey,
                webhookUrl: settings.webhookUrl,
                isLive: settings.isLive,
                isEnabled: settings.isEnabled,
                lastUpdated: settings.updatedAt
            }
        });
    } catch (error) {
        console.error('Error updating stripe settings:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating stripe settings',
            error: error.message
        });
    }
};

/**
 * Get Stripe instance for payments
 * Returns initialized Stripe instance with stored keys
 */
export const getStripeInstance = async () => {
    try {
        const settings = await StripeSettings.findOne();

        if (!settings || !settings.secretKey) {
            throw new Error('Stripe settings not configured');
        }

        // Decrypt secret key
        let decryptedSecretKey;
        try {
            decryptedSecretKey = decryptSecret(settings.secretKey);
        } catch (decryptError) {
            console.error('Decryption error:', decryptError);
            throw new Error('Failed to decrypt Stripe secret key');
        }

        // Initialize and return Stripe instance
        return stripe(decryptedSecretKey);
    } catch (error) {
        console.error('Error getting Stripe instance:', error);
        throw error;
    }
};

/**
 * Handle Stripe Webhook Events
 */
export const handleStripeWebhook = async (req, res) => {
    try {
        const settings = await StripeSettings.findOne();

        if (!settings || !settings.webhookSecret) {
            return res.status(404).json({
                success: false,
                message: 'Stripe webhook secret not configured'
            });
        }

        // Decrypt webhook secret
        let decryptedWebhookSecret;
        try {
            decryptedWebhookSecret = decryptSecret(settings.webhookSecret);
        } catch (decryptError) {
            console.error('Decryption error:', decryptError);
            return res.status(500).json({
                success: false,
                message: 'Failed to verify webhook'
            });
        }

        const sig = req.headers['stripe-signature'];

        let event;

        try {
            // Verify webhook signature
            event = stripe.webhooks.constructEvent(
                req.body,
                sig,
                decryptedWebhookSecret
            );
        } catch (err) {
            console.error('Webhook signature verification failed:', err.message);
            return res.status(400).json({
                success: false,
                message: `Webhook Error: ${err.message}`
            });
        }

        // Handle specific events
        switch (event.type) {
            case 'payment_intent.succeeded':
                await handlePaymentIntentSucceeded(event.data.object);
                break;

            case 'payment_intent.payment_failed':
                await handlePaymentIntentFailed(event.data.object);
                break;

            case 'charge.refunded':
                await handleChargeRefunded(event.data.object);
                break;

            case 'invoice.paid':
                await handleInvoicePaid(event.data.object);
                break;

            case 'invoice.payment_failed':
                await handleInvoicePaymentFailed(event.data.object);
                break;

            default:
                console.log(`Unhandled event type ${event.type}`);
        }

        // Return success response
        res.status(200).json({
            success: true,
            received: true
        });

    } catch (error) {
        console.error('Webhook handler error:', error);
        res.status(500).json({
            success: false,
            message: 'Webhook handler error',
            error: error.message
        });
    }
};

/**
 * Handle payment_intent.succeeded event
 */
const handlePaymentIntentSucceeded = async (paymentIntent) => {
    try {
        console.log('✅ Payment succeeded:', {
            paymentIntentId: paymentIntent.id,
            amount: paymentIntent.amount,
            currency: paymentIntent.currency,
            clientSecret: paymentIntent.client_secret
        });

        // TODO: Update order status in your database
        // TODO: Send confirmation email to customer
        // TODO: Update inventory/stock
    } catch (error) {
        console.error('Error handling payment_intent.succeeded:', error);
    }
};

/**
 * Handle payment_intent.payment_failed event
 */
const handlePaymentIntentFailed = async (paymentIntent) => {
    try {
        console.log('❌ Payment failed:', {
            paymentIntentId: paymentIntent.id,
            amount: paymentIntent.amount,
            lastPaymentError: paymentIntent.last_payment_error
        });

        // TODO: Update order status to failed
        // TODO: Send failure email to customer with retry option
        // TODO: Log for support review
    } catch (error) {
        console.error('Error handling payment_intent.payment_failed:', error);
    }
};

/**
 * Handle charge.refunded event
 */
const handleChargeRefunded = async (charge) => {
    try {
        console.log('🔄 Charge refunded:', {
            chargeId: charge.id,
            amount: charge.amount,
            refundedAmount: charge.amount_refunded
        });

        // TODO: Update order refund status
        // TODO: Send refund confirmation email
    } catch (error) {
        console.error('Error handling charge.refunded:', error);
    }
};

/**
 * Handle invoice.paid event
 */
const handleInvoicePaid = async (invoice) => {
    try {
        console.log('✅ Invoice paid:', {
            invoiceId: invoice.id,
            customerId: invoice.customer,
            amount: invoice.amount_paid
        });

        // TODO: Update subscription status
        // TODO: Send invoice email
    } catch (error) {
        console.error('Error handling invoice.paid:', error);
    }
};

/**
 * Handle invoice.payment_failed event
 */
const handleInvoicePaymentFailed = async (invoice) => {
    try {
        console.log('❌ Invoice payment failed:', {
            invoiceId: invoice.id,
            customerId: invoice.customer,
            attemptCount: invoice.attempt_count
        });

        // TODO: Update subscription status
        // TODO: Send retry email
    } catch (error) {
        console.error('Error handling invoice.payment_failed:', error);
    }
};

/**
 * Enable/Disable Stripe payments
 */
export const toggleStripeEnabled = async (req, res) => {
    try {
        const { isEnabled } = req.body;

        let settings = await StripeSettings.findOne();

        if (!settings) {
            return res.status(404).json({
                success: false,
                message: 'Stripe settings not found'
            });
        }

        settings.isEnabled = isEnabled;
        settings.updatedBy = req.user._id;
        await settings.save();

        res.status(200).json({
            success: true,
            message: `Stripe payments ${isEnabled ? 'enabled' : 'disabled'}`,
            data: {
                isEnabled: settings.isEnabled
            }
        });
    } catch (error) {
        console.error('Error toggling stripe:', error);
        res.status(500).json({
            success: false,
            message: 'Error toggling stripe',
            error: error.message
        });
    }
};
