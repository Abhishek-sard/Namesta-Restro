import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { AlertCircle, CheckCircle, Loader2, Lock, CreditCard } from 'lucide-react';
import { usePayment } from '../context/PaymentContext';

// Stripe Promise (singleton)
let stripePromise = null;

const getStripe = (publicKey) => {
    if (!stripePromise && publicKey) {
        stripePromise = loadStripe(publicKey);
    }
    return stripePromise;
};

/**
 * Inner checkout form component (requires Stripe Elements context)
 */
const StripeCheckoutForm = ({ 
    orderId, 
    amount, 
    customerInfo = {}, 
    onSuccess, 
    onError 
}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);
        setError(null);

        try {
            // Create payment method from card element
            const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: elements.getElement(CardElement),
                billing_details: {
                    name: customerInfo.name || 'Guest',
                    email: customerInfo.email || '',
                    phone: customerInfo.phone || ''
                }
            });

            if (methodError) {
                setError(methodError.message);
                onError?.(methodError.message);
                return;
            }

            // Create payment intent on backend
            const intentResponse = await fetch('http://localhost:5000/api/payments/intent', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    orderId,
                    amount,
                    currency: 'usd'
                })
            });

            if (!intentResponse.ok) {
                throw new Error('Failed to create payment intent');
            }

            const intentData = await intentResponse.json();
            const { clientSecret } = intentData.data;

            // Confirm payment
            const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
                clientSecret,
                {
                    payment_method: paymentMethod.id
                }
            );

            if (confirmError) {
                setError(confirmError.message);
                onError?.(confirmError.message);
                return;
            }

            if (paymentIntent.status === 'succeeded') {
                setSuccess(true);
                onSuccess?.({
                    paymentIntentId: paymentIntent.id,
                    amount: paymentIntent.amount / 100,
                    status: paymentIntent.status
                });
            } else if (paymentIntent.status === 'requires_action') {
                setError('Additional payment verification required');
                onError?.('Additional payment verification required');
            } else {
                setError('Payment processing failed');
                onError?.('Payment processing failed');
            }
        } catch (err) {
            console.error('Payment error:', err);
            setError(err.message || 'Payment processing failed');
            onError?.(err.message);
        } finally {
            setIsProcessing(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
                <p className="text-gray-600">Your payment has been processed successfully.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Error Message */}
            {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                        <h3 className="font-semibold text-red-900">Payment Failed</h3>
                        <p className="text-sm text-red-800">{error}</p>
                    </div>
                </div>
            )}

            {/* Card Element */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-4">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                    <span className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        Card Details
                    </span>
                </label>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                                fontFamily: 'Arial, sans-serif'
                            },
                            invalid: {
                                color: '#fa755a',
                                iconColor: '#fa755a',
                            },
                        },
                    }}
                    className="w-full"
                />
            </div>

            {/* Security Notice */}
            <div className="flex items-start gap-2 text-xs text-gray-600 p-3 bg-gray-50 rounded-lg border border-gray-200">
                <Lock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Your payment information is secure and will never be stored on our servers.</span>
            </div>

            {/* Test Card Info */}
            <div className="text-xs text-blue-600 bg-blue-50 p-3 rounded-lg">
                <strong>Testing?</strong> Use card 4242 4242 4242 4242 with any future date and 3-digit CVC
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={!stripe || isProcessing}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isProcessing ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Processing Payment...
                    </>
                ) : (
                    <>
                        <Lock className="w-5 h-5" />
                        Complete Payment
                    </>
                )}
            </button>
        </form>
    );
};

/**
 * Main Stripe Checkout Component (Wrapper)
 * Usage: <StripeCheckout orderId="123" amount={29.99} customerInfo={...} onSuccess={...} />
 */
const StripeCheckout = ({ 
    orderId, 
    amount, 
    customerInfo = {}, 
    onSuccess, 
    onError 
}) => {
    const { publicKey, getPublicKey, loading, error: paymentError } = usePayment();
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        if (!publicKey && !initialized) {
            getPublicKey().then(() => setInitialized(true));
        }
    }, [publicKey, getPublicKey, initialized]);

    if (loading && !publicKey) {
        return (
            <div className="flex items-center justify-center py-8">
                <Loader2 className="w-6 h-6 text-orange-600 animate-spin" />
            </div>
        );
    }

    if (paymentError || !publicKey) {
        return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                    <h3 className="font-semibold text-red-900">Payment System Unavailable</h3>
                    <p className="text-sm text-red-800">
                        {paymentError || 'Stripe is not configured. Please check back later.'}
                    </p>
                </div>
            </div>
        );
    }

    const stripe = getStripe(publicKey);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h2>
                <p className="text-gray-600">
                    Amount to pay: <span className="font-bold text-orange-600">${amount.toFixed(2)}</span>
                </p>
            </div>

            <Elements stripe={stripe}>
                <StripeCheckoutForm
                    orderId={orderId}
                    amount={amount}
                    customerInfo={customerInfo}
                    onSuccess={onSuccess}
                    onError={onError}
                />
            </Elements>
        </div>
    );
};

export default StripeCheckout;
export { StripeCheckoutForm };
