import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import { API_URL } from '../config';

const PaymentContext = createContext();

const usePayment = () => {
    const context = useContext(PaymentContext);
    if (!context) {
        throw new Error('usePayment must be used within PaymentProvider');
    }
    return context;
};

export const PaymentProvider = ({ children }) => {
    const [publicKey, setPublicKey] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch Stripe public key (safe to expose)
    const getPublicKey = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_URL}/stripe/config`);
            const pk = data?.data?.publicKey || import.meta.env.VITE_STRIPE_PUBLIC_KEY || null;
            setPublicKey(pk);
            setError(null);
            return pk;
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Failed to load Stripe configuration';
            setError(errorMsg);
            console.error('Error fetching public key:', err);
            // fallback to Vite env if backend not configured
            const pkFallback = import.meta.env.VITE_STRIPE_PUBLIC_KEY || null;
            setPublicKey(pkFallback);
            return pkFallback;
        } finally {
            setLoading(false);
        }
    };

    // Create payment intent
    const createPaymentIntent = async (orderId, amount, currency = 'usd') => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${API_URL}/payments/intent`, {
                orderId,
                amount,
                currency
            });
            setError(null);
            return data.data;
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Failed to create payment intent';
            setError(errorMsg);
            console.error('Error creating payment intent:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Confirm payment
    const confirmPayment = async (paymentIntentId, paymentMethodId) => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${API_URL}/payments/confirm`, {
                paymentIntentId,
                paymentMethodId
            });
            setError(null);
            return data;
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Payment failed';
            setError(errorMsg);
            console.error('Error confirming payment:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Get payment status
    const getPaymentStatus = async (paymentIntentId) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${API_URL}/payments/${paymentIntentId}`);
            setError(null);
            return data.data;
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Failed to get payment status';
            setError(errorMsg);
            console.error('Error getting payment status:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    // Process refund
    const refundPayment = async (chargeId, amount, reason) => {
        try {
            setLoading(true);
            const { data } = await axios.post(`${API_URL}/payments/refund`, {
                chargeId,
                amount,
                reason
            });
            setError(null);
            return data.data;
        } catch (err) {
            const errorMsg = err.response?.data?.message || 'Refund failed';
            setError(errorMsg);
            console.error('Error processing refund:', err);
            return null;
        } finally {
            setLoading(false);
        }
    };

    const value = {
        publicKey,
        loading,
        error,
        getPublicKey,
        createPaymentIntent,
        confirmPayment,
        getPaymentStatus,
        refundPayment
    };

    return (
        <PaymentContext.Provider value={value}>
            {children}
        </PaymentContext.Provider>
    );
};

export { usePayment };
