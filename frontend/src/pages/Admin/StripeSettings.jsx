import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Eye, EyeOff, Save, Loader2, Lock, Key, Webhook, ToggleRight, ToggleLeft } from 'lucide-react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';

const StripeSettings = () => {
    const { user } = useAuth();
    const [settings, setSettings] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [showSecretKey, setShowSecretKey] = useState(false);
    const [showWebhookSecret, setShowWebhookSecret] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const [formData, setFormData] = useState({
        publicKey: '',
        secretKey: '',
        webhookSecret: '',
        webhookUrl: ''
    });

    const [toggling, setToggling] = useState(false);

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };
            const { data } = await axios.get('http://localhost:5000/api/stripe/settings', config);
            
            setSettings(data.data);
            setFormData(prev => ({
                ...prev,
                publicKey: data.data.publicKey || '',
                webhookUrl: data.data.webhookUrl || ''
            }));
            
            setMessage({ type: 'success', text: 'Settings loaded' });
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        } catch (error) {
            console.error('Error fetching settings:', error);
            setMessage({ 
                type: 'error', 
                text: error.response?.data?.message || 'Failed to load settings' 
            });
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveSettings = async (e) => {
        e.preventDefault();

        if (!formData.publicKey || !formData.secretKey || !formData.webhookSecret) {
            setMessage({ 
                type: 'error', 
                text: 'All fields are required: Public Key, Secret Key, and Webhook Secret' 
            });
            return;
        }

        setSaving(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const { data } = await axios.put(
                'http://localhost:5000/api/stripe/settings',
                {
                    publicKey: formData.publicKey,
                    secretKey: formData.secretKey,
                    webhookSecret: formData.webhookSecret,
                    webhookUrl: formData.webhookUrl
                },
                config
            );

            setSettings(data.data);
            setFormData(prev => ({
                ...prev,
                secretKey: '',
                webhookSecret: ''
            }));

            setMessage({ 
                type: 'success', 
                text: 'Stripe settings updated successfully!' 
            });
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        } catch (error) {
            console.error('Error saving settings:', error);
            setMessage({ 
                type: 'error', 
                text: error.response?.data?.message || 'Failed to save settings' 
            });
        } finally {
            setSaving(false);
        }
    };

    const handleToggleStripe = async () => {
        setToggling(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            };

            const newState = !settings?.isEnabled;
            const { data } = await axios.put(
                'http://localhost:5000/api/stripe/toggle',
                { isEnabled: newState },
                config
            );

            setSettings(prev => ({
                ...prev,
                isEnabled: data.data.isEnabled
            }));

            setMessage({ 
                type: 'success', 
                text: `Stripe payments ${newState ? 'enabled' : 'disabled'}` 
            });
            setTimeout(() => setMessage({ type: '', text: '' }), 3000);
        } catch (error) {
            console.error('Error toggling stripe:', error);
            setMessage({ 
                type: 'error', 
                text: 'Failed to toggle Stripe' 
            });
        } finally {
            setToggling(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <Loader2 className="w-8 h-8 text-orange-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-2">
                        <Key className="w-8 h-8 text-orange-600" />
                        <h1 className="text-4xl font-bold text-gray-900">Stripe Settings</h1>
                    </div>
                    <p className="text-gray-600">Configure your Stripe payment gateway securely</p>
                </div>

                {/* Message Alert */}
                {message.text && (
                    <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                        message.type === 'success' 
                            ? 'bg-green-50 border border-green-200' 
                            : 'bg-red-50 border border-red-200'
                    }`}>
                        {message.type === 'success' ? (
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        )}
                        <p className={message.type === 'success' ? 'text-green-800' : 'text-red-800'}>
                            {message.text}
                        </p>
                    </div>
                )}

                {/* Settings Sections */}
                <div className="space-y-8">
                    {/* Status Card */}
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Payment Status</h2>
                                <p className="text-gray-600">
                                    {settings?.isEnabled ? (
                                        <span className="flex items-center gap-2 text-green-600">
                                            <CheckCircle className="w-4 h-4" />
                                            Stripe payments are enabled
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2 text-red-600">
                                            <AlertCircle className="w-4 h-4" />
                                            Stripe payments are disabled
                                        </span>
                                    )}
                                </p>
                            </div>
                            <button
                                onClick={handleToggleStripe}
                                disabled={toggling}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all"
                                style={{
                                    backgroundColor: settings?.isEnabled ? '#ef4444' : '#10b981',
                                    color: 'white'
                                }}
                            >
                                {toggling ? (
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                ) : settings?.isEnabled ? (
                                    <>
                                        <ToggleRight className="w-5 h-5" />
                                        Disable
                                    </>
                                ) : (
                                    <>
                                        <ToggleLeft className="w-5 h-5" />
                                        Enable
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Configuration Form */}
                    <form onSubmit={handleSaveSettings} className="bg-white rounded-xl shadow-md p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-6">API Configuration</h2>

                        <div className="space-y-6">
                            {/* Public Key */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <span className="flex items-center gap-2">
                                        <Lock className="w-4 h-4" />
                                        Public Key (pk_test_/pk_live_)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="publicKey"
                                    value={formData.publicKey}
                                    onChange={handleInputChange}
                                    placeholder="pk_test_51234567890abcdefghij"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all font-mono text-sm"
                                    disabled={saving}
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    Get this from stripe.com dashboard → API Keys → Publishable key
                                </p>
                            </div>

                            {/* Secret Key */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <span className="flex items-center gap-2">
                                        <Key className="w-4 h-4 text-red-600" />
                                        Secret Key (sk_test_/sk_live_) *
                                    </span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showSecretKey ? "text" : "password"}
                                        name="secretKey"
                                        value={formData.secretKey}
                                        onChange={handleInputChange}
                                        placeholder={formData.secretKey ? "••••••••••••••••••••" : "sk_test_51234567890abcdefghij"}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all font-mono text-sm"
                                        disabled={saving}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowSecretKey(!showSecretKey)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showSecretKey ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    ⚠️ Keep this secret! Get from stripe.com dashboard → API Keys → Secret key
                                </p>
                            </div>

                            {/* Webhook Secret */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <span className="flex items-center gap-2">
                                        <Webhook className="w-4 h-4 text-purple-600" />
                                        Webhook Signing Secret (whsec_) *
                                    </span>
                                </label>
                                <div className="relative">
                                    <input
                                        type={showWebhookSecret ? "text" : "password"}
                                        name="webhookSecret"
                                        value={formData.webhookSecret}
                                        onChange={handleInputChange}
                                        placeholder={formData.webhookSecret ? "••••••••••••••••••••" : "whsec_1234567890abcdefghij"}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all font-mono text-sm"
                                        disabled={saving}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowWebhookSecret(!showWebhookSecret)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                    >
                                        {showWebhookSecret ? (
                                            <EyeOff className="w-5 h-5" />
                                        ) : (
                                            <Eye className="w-5 h-5" />
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-2">
                                    Get from stripe.com dashboard → Webhooks → Signing secret for your endpoint
                                </p>
                            </div>

                            {/* Webhook URL */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    <span className="flex items-center gap-2">
                                        <Webhook className="w-4 h-4" />
                                        Webhook URL (Auto-generated)
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    name="webhookUrl"
                                    value={formData.webhookUrl}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 outline-none font-mono text-sm text-gray-600"
                                    readOnly
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    Add this URL in Stripe Dashboard → Webhooks → Add endpoint
                                </p>
                            </div>
                        </div>

                        {/* Security Notice */}
                        <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm text-blue-800 flex items-start gap-2">
                                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                <span>
                                    <strong>Security Note:</strong> Your secret key and webhook secret are encrypted in the database and never exposed. 
                                    Only the public key is displayed.
                                </span>
                            </p>
                        </div>

                        {/* Current Status */}
                        {settings && (
                            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-sm text-green-800">
                                    <strong>Current Mode:</strong> {settings.isLive ? '🔴 Live' : '🟡 Test'} 
                                    {settings.lastUpdated && (
                                        <span className="block text-xs mt-1">
                                            Last updated: {new Date(settings.lastUpdated).toLocaleString()}
                                        </span>
                                    )}
                                </p>
                            </div>
                        )}

                        {/* Save Button */}
                        <button
                            type="submit"
                            disabled={saving}
                            className="w-full mt-8 bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-lg font-bold hover:from-orange-700 hover:to-red-700 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {saving ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <Save className="w-5 h-5" />
                                    Save Stripe Settings
                                </>
                            )}
                        </button>
                    </form>

                    {/* Help Section */}
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border border-blue-200">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <p>
                                <strong>1. Get API Keys:</strong> Visit <a href="https://dashboard.stripe.com/apikeys" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">stripe.com/dashboard</a>
                            </p>
                            <p>
                                <strong>2. Setup Webhook:</strong> Go to Webhooks section and create new endpoint with the URL above
                            </p>
                            <p>
                                <strong>3. Enable Events:</strong> Select payment_intent and charge events
                            </p>
                            <p>
                                <strong>4. Copy Signing Secret:</strong> From webhook details page
                            </p>
                            <p>
                                <strong>5. Test:</strong> Use test keys (starting with pk_test_ and sk_test_)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StripeSettings;
