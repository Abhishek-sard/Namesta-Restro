import React, { useEffect, useState } from 'react';
import { X, ShoppingBag, Truck, Store, UtensilsCrossed, ArrowLeft, Loader2, AlertCircle, ShoppingCart, Plus, Minus, Trash2, CheckCircle, CreditCard } from 'lucide-react';
import axios from 'axios';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const OrderDrawer = ({ isOpen, onClose }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [currentView, setCurrentView] = useState('order-type'); // 'order-type', 'menu', 'cart', 'checkout', 'confirmation'
    const [selectedOrderType, setSelectedOrderType] = useState(null);
    const [menus, setMenus] = useState([]);
    const [menuLoading, setMenuLoading] = useState(false);
    const [menuError, setMenuError] = useState(null);

    // Cart state
    const [cart, setCart] = useState([]);

    // Checkout state
    const [customerInfo, setCustomerInfo] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        tableNumber: '',
        specialInstructions: ''
    });
    const [orderNumber, setOrderNumber] = useState('');
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    const [paypalClientId, setPaypalClientId] = useState(null);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 8500);

            // Fetch PayPal Client ID
            const getPayPalClientId = async () => {
                try {
                    const { data } = await axios.get('http://localhost:5000/api/config/paypal');
                    setPaypalClientId(data.clientId);
                } catch (error) {
                    console.error("Error fetching PayPal client ID:", error);
                }
            };
            getPayPalClientId();

            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = 'unset';
            setIsLoading(false);
            // Reset all state when drawer closes
            setCurrentView('order-type');
            setSelectedOrderType(null);
            setCart([]);
            setCustomerInfo({
                name: '', phone: '', email: '', address: '', tableNumber: '', specialInstructions: ''
            });
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Fetch menu
    const fetchMenus = async () => {
        setMenuLoading(true);
        setMenuError(null);
        try {
            const res = await axios.get('http://localhost:5000/api/menu');
            setMenus(res.data.data);
            setMenuLoading(false);
        } catch (error) {
            console.error("Error fetching menu:", error);
            setMenuError("Failed to load menu. Please try again later.");
            setMenuLoading(false);
        }
    };

    const handleOrderTypeSelect = (type) => {
        setSelectedOrderType(type);
        setCurrentView('menu');
        fetchMenus();
    };

    // Cart functions
    const addToCart = (menuItem) => {
        const existingItem = cart.find(item => item.menuItem._id === menuItem._id);
        if (existingItem) {
            setCart(cart.map(item =>
                item.menuItem._id === menuItem._id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { menuItem, quantity: 1 }]);
        }
    };

    const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(itemId);
        } else {
            setCart(cart.map(item =>
                item.menuItem._id === itemId
                    ? { ...item, quantity: newQuantity }
                    : item
            ));
        }
    };

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.menuItem._id !== itemId));
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
    };

    const getCartItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const getItemQuantityInCart = (itemId) => {
        const item = cart.find(item => item.menuItem._id === itemId);
        return item ? item.quantity : 0;
    };

    // Navigation
    const handleBackToSelection = () => {
        setCurrentView('order-type');
        setSelectedOrderType(null);
        setMenus([]);
        setMenuError(null);
    };

    const handleViewCart = () => {
        setCurrentView('cart');
    };

    const handleContinueShopping = () => {
        setCurrentView('menu');
    };

    const handleProceedToCheckout = () => {
        setCurrentView('checkout');
    };

    const handleBackToCart = () => {
        setCurrentView('cart');
    };

    // Payment
    const handlePlaceOrder = async (e) => {
        e.preventDefault();
        setPaymentProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            const orderNum = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
            setOrderNumber(orderNum);
            setPaymentProcessing(false);
            setCurrentView('confirmation');
        }, 2000);
    };

    const handleOrderAgain = () => {
        setCart([]);
        setCurrentView('order-type');
        setSelectedOrderType(null);
        setCustomerInfo({
            name: '', phone: '', email: '', address: '', tableNumber: '', specialInstructions: ''
        });
    };

    // Group menu items by category
    const groupedMenus = menus.reduce((acc, item) => {
        const category = item.category || 'Uncategorized';
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
    }, {});

    const getOrderTypeInfo = () => {
        switch (selectedOrderType) {
            case 'delivery':
                return { title: 'Delivery Menu', icon: Truck, color: 'blue' };
            case 'dine-in':
                return { title: 'Dine-In Menu', icon: UtensilsCrossed, color: 'purple' };
            case 'pickup':
                return { title: 'Pickup Menu', icon: Store, color: 'green' };
            default:
                return null;
        }
    };

    const deliveryFee = selectedOrderType === 'delivery' ? 5 : 0;
    const tax = (getCartTotal() * 0.1);
    const finalTotal = getCartTotal() + deliveryFee + tax;

    return (
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={onClose}
            />

            {/* Drawer */}
            <div className={`fixed top-0 right-0 h-full w-full md:w-[700px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {isLoading ? (
                    // Welcome Animation
                    <div className="h-full flex flex-col items-center justify-center bg-red-600">
                        <style>
                            {`
                                @keyframes write-cursive {
                                    from { width: 0; }
                                    to { width: 100%; }
                                }
                                @keyframes blink {
                                    50% { border-color: transparent; }
                                }
                            `}
                        </style>
                        <div className="relative text-center">
                            <h2 className="text-3xl font-cursive text-white mb-4">Welcome to</h2>
                            <h1
                                className="text-5xl font-cursive text-white overflow-hidden whitespace-nowrap border-r-4 border-white pr-2 inline-block"
                                style={{ animation: 'write-cursive 8s linear forwards, blink 0.25s step-end infinite' }}
                            >
                                Namaste Restaurant
                            </h1>
                        </div>
                    </div>
                ) : currentView === 'confirmation' ? (
                    // Order Confirmation View
                    <div className="h-full flex flex-col bg-gradient-to-br from-green-50 to-blue-50">
                        <div className="flex-1 flex flex-col items-center justify-center p-6">
                            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl text-center">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle className="w-12 h-12 text-green-600" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                                <p className="text-gray-600 mb-6">Thank you for your order</p>

                                <div className="bg-orange-50 rounded-2xl p-4 mb-6">
                                    <p className="text-sm text-gray-600 mb-1">Order Number</p>
                                    <p className="text-2xl font-bold text-orange-600">{orderNumber}</p>
                                </div>

                                <div className="text-left mb-6 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Order Type:</span>
                                        <span className="font-semibold text-gray-900 capitalize">{selectedOrderType}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Items:</span>
                                        <span className="font-semibold text-gray-900">{getCartItemCount()}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Total:</span>
                                        <span className="font-bold text-gray-900">${finalTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Estimated Time:</span>
                                        <span className="font-semibold text-gray-900">
                                            {selectedOrderType === 'delivery' ? '30-45 mins' : '15-20 mins'}
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <button
                                        onClick={handleOrderAgain}
                                        className="w-full bg-orange-600 text-white py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
                                    >
                                        Order Again
                                    </button>
                                    <button
                                        onClick={onClose}
                                        className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : currentView === 'checkout' ? (
                    // Checkout View
                    <div className="h-full flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <button onClick={handleBackToCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                                </button>
                                <div className="bg-orange-100 p-2 rounded-xl">
                                    <CreditCard className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Checkout</h2>
                                    <p className="text-sm text-gray-500">Complete your order</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        <form onSubmit={handlePlaceOrder} className="flex-1 overflow-y-auto p-6 bg-gray-50/50 space-y-6">
                            {/* Customer Information */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Customer Information</h3>
                                <div className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Full Name *"
                                        required
                                        value={customerInfo.name}
                                        onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number *"
                                        required
                                        value={customerInfo.phone}
                                        onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email *"
                                        required
                                        value={customerInfo.email}
                                        onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                    />
                                    {selectedOrderType === 'delivery' && (
                                        <textarea
                                            placeholder="Delivery Address *"
                                            required
                                            value={customerInfo.address}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                                            rows="3"
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                                        />
                                    )}
                                    {selectedOrderType === 'dine-in' && (
                                        <input
                                            type="text"
                                            placeholder="Table Number (Optional)"
                                            value={customerInfo.tableNumber}
                                            onChange={(e) => setCustomerInfo({ ...customerInfo, tableNumber: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                                        />
                                    )}
                                    <textarea
                                        placeholder="Special Instructions (Optional)"
                                        value={customerInfo.specialInstructions}
                                        onChange={(e) => setCustomerInfo({ ...customerInfo, specialInstructions: e.target.value })}
                                        rows="2"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                                    />
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Order Summary</h3>
                                <div className="space-y-3 mb-4">
                                    {cart.map(item => (
                                        <div key={item.menuItem._id} className="flex justify-between text-sm">
                                            <span className="text-gray-600">{item.quantity}x {item.menuItem.name}</span>
                                            <span className="font-semibold text-gray-900">${(item.menuItem.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-t border-gray-200 pt-3 space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Subtotal</span>
                                        <span className="font-semibold text-gray-900">${getCartTotal().toFixed(2)}</span>
                                    </div>
                                    {deliveryFee > 0 && (
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Delivery Fee</span>
                                            <span className="font-semibold text-gray-900">${deliveryFee.toFixed(2)}</span>
                                        </div>
                                    )}
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-600">Tax (10%)</span>
                                        <span className="font-semibold text-gray-900">${tax.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                                        <span className="text-gray-900">Total</span>
                                        <span className="text-orange-600">${finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="bg-white rounded-3xl p-6 shadow-sm">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Payment</h3>
                                {!paypalClientId ? (
                                    <div className="flex items-center justify-center py-4">
                                        <Loader2 className="w-8 h-8 text-orange-600 animate-spin" />
                                    </div>
                                ) : (
                                    <div className="relative z-0">
                                        <PayPalScriptProvider options={{ "client-id": paypalClientId }}>
                                            <PayPalButtons
                                                style={{ layout: "vertical", shape: "pill", color: "gold", label: "pay" }}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        purchase_units: [
                                                            {
                                                                amount: {
                                                                    value: finalTotal.toFixed(2),
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }}
                                                onApprove={(data, actions) => {
                                                    return actions.order.capture().then((details) => {
                                                        const orderNum = 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
                                                        setOrderNumber(orderNum);
                                                        setCurrentView('confirmation');
                                                    });
                                                }}
                                                onError={(err) => {
                                                    console.error("PayPal Error:", err);
                                                    alert("Payment failed. Please try again.");
                                                }}
                                            />
                                        </PayPalScriptProvider>
                                    </div>
                                )}
                                <p className="text-xs text-gray-500 text-center mt-4">
                                    Secure payment via PayPal. Your information is encrypted.
                                </p>
                            </div>
                        </form>
                    </div>
                ) : currentView === 'cart' ? (
                    // Cart View
                    <div className="h-full flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <button onClick={handleContinueShopping} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                                </button>
                                <div className="bg-orange-100 p-2 rounded-xl">
                                    <ShoppingCart className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
                                    <p className="text-sm text-gray-500">{getCartItemCount()} items</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        {cart.length === 0 ? (
                            <div className="flex-1 flex flex-col items-center justify-center p-6">
                                <ShoppingCart className="w-20 h-20 text-gray-300 mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h3>
                                <p className="text-gray-500 mb-6">Add some delicious items to get started!</p>
                                <button
                                    onClick={handleContinueShopping}
                                    className="bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-colors"
                                >
                                    Browse Menu
                                </button>
                            </div>
                        ) : (
                            <>
                                <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                                    <div className="space-y-4">
                                        {cart.map(item => (
                                            <div key={item.menuItem._id} className="bg-white rounded-3xl p-4 shadow-sm flex gap-4">
                                                <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden">
                                                    <img
                                                        src={item.menuItem.image ? (item.menuItem.image.startsWith('http') ? item.menuItem.image : `http://localhost:5000/uploads/${item.menuItem.image}`) : 'https://placehold.co/150x150?text=No+Img'}
                                                        alt={item.menuItem.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => { e.target.src = 'https://placehold.co/150x150?text=No+Img'; }}
                                                    />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="font-bold text-gray-900 mb-1">{item.menuItem.name}</h4>
                                                    <p className="text-orange-600 font-bold mb-3">${item.menuItem.price}</p>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.menuItem._id, item.quantity - 1)}
                                                            className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                                                        >
                                                            <Minus className="w-4 h-4 text-gray-600" />
                                                        </button>
                                                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.menuItem._id, item.quantity + 1)}
                                                            className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center hover:bg-orange-700 transition-colors"
                                                        >
                                                            <Plus className="w-4 h-4 text-white" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end justify-between">
                                                    <button
                                                        onClick={() => removeFromCart(item.menuItem._id)}
                                                        className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 className="w-5 h-5 text-red-500" />
                                                    </button>
                                                    <p className="font-bold text-gray-900">${(item.menuItem.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6 bg-white border-t border-gray-100">
                                    <div className="space-y-2 mb-4">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Subtotal</span>
                                            <span className="font-semibold">${getCartTotal().toFixed(2)}</span>
                                        </div>
                                        {deliveryFee > 0 && (
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Delivery Fee</span>
                                                <span className="font-semibold">${deliveryFee.toFixed(2)}</span>
                                            </div>
                                        )}
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-600">Tax (10%)</span>
                                            <span className="font-semibold">${tax.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                                            <span>Total</span>
                                            <span className="text-orange-600">${finalTotal.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleProceedToCheckout}
                                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl"
                                    >
                                        Proceed to Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                ) : currentView === 'menu' ? (
                    // Menu View
                    <div className="h-full flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <button onClick={handleBackToSelection} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <ArrowLeft className="w-6 h-6 text-gray-600" />
                                </button>
                                <div className={`bg-${getOrderTypeInfo().color}-100 p-2 rounded-xl`}>
                                    {React.createElement(getOrderTypeInfo().icon, { className: `w-6 h-6 text-${getOrderTypeInfo().color}-600` })}
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">{getOrderTypeInfo().title}</h2>
                                    <p className="text-sm text-gray-500">Browse our menu</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {cart.length > 0 && (
                                    <button
                                        onClick={handleViewCart}
                                        className="relative p-2 hover:bg-orange-50 rounded-full transition-colors"
                                    >
                                        <ShoppingCart className="w-6 h-6 text-orange-600" />
                                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                            {getCartItemCount()}
                                        </span>
                                    </button>
                                )}
                                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                    <X className="w-6 h-6 text-gray-400" />
                                </button>
                            </div>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                            {menuLoading ? (
                                <div className="flex flex-col items-center justify-center py-20">
                                    <Loader2 className="w-12 h-12 text-orange-600 animate-spin mb-4" />
                                    <p className="text-xl text-gray-600 font-medium">Loading delicious items...</p>
                                </div>
                            ) : menuError ? (
                                <div className="flex flex-col items-center justify-center py-20 px-4">
                                    <div className="bg-red-50 p-6 rounded-3xl border border-red-100 text-center max-w-md">
                                        <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                                        <p className="text-gray-600 mb-6">{menuError}</p>
                                        <button onClick={fetchMenus} className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors">
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            ) : Object.keys(groupedMenus).length === 0 ? (
                                <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                                    <p className="text-gray-400 text-xl italic">No menu items available.</p>
                                </div>
                            ) : (
                                <div className="space-y-5">
                                    {Object.keys(groupedMenus).map((category, i) => (
                                        <div key={i} className="space-y-4">
                                            <div className="sticky top-0 bg-gray-50/95 backdrop-blur-sm py-3 z-10">
                                                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-3 px-1">
                                                    <span className="w-1.5 h-6 bg-gradient-to-b from-orange-600 to-red-600 rounded-full"></span>
                                                    {category}
                                                    <span className="text-sm font-normal text-gray-500">({groupedMenus[category].length})</span>
                                                </h3>
                                            </div>
                                            <div className="grid grid-cols-1 gap-4">
                                                {groupedMenus[category].map((item) => {
                                                    const quantityInCart = getItemQuantityInCart(item._id);
                                                    return (
                                                        <div key={item._id} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                                                            <div className="flex gap-4 p-4">
                                                                {/* Image */}
                                                                <div className="relative w-28 h-28 flex-shrink-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-xl overflow-hidden shadow-sm">
                                                                    <img
                                                                        src={item.image ? (item.image.startsWith('http') ? item.image : `http://localhost:5000/uploads/${item.image}`) : 'https://placehold.co/200x200?text=No+Image'}
                                                                        alt={item.name}
                                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                                        onError={(e) => { e.target.src = 'https://placehold.co/200x200?text=No+Image'; }}
                                                                    />
                                                                    {quantityInCart > 0 && (
                                                                        <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                                                            {quantityInCart} in cart
                                                                        </div>
                                                                    )}
                                                                </div>

                                                                {/* Content */}
                                                                <div className="flex-1 flex flex-col justify-between min-w-0">
                                                                    <div>
                                                                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1.5 line-clamp-1">
                                                                            {item.name}
                                                                        </h4>
                                                                        <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed mb-3">
                                                                            {item.description || "Delicious item from our menu"}
                                                                        </p>
                                                                    </div>

                                                                    <div className="flex items-center justify-between gap-3">
                                                                        <div className="flex items-center gap-2">
                                                                            <span className="text-2xl font-black text-orange-600">
                                                                                ${item.price}
                                                                            </span>
                                                                        </div>

                                                                        {quantityInCart > 0 ? (
                                                                            <div className="flex items-center gap-2 bg-gray-50 rounded-xl p-1.5">
                                                                                <button
                                                                                    onClick={() => updateQuantity(item._id, quantityInCart - 1)}
                                                                                    className="w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-red-50 transition-colors shadow-sm border border-gray-200"
                                                                                >
                                                                                    <Minus className="w-4 h-4 text-red-600" />
                                                                                </button>
                                                                                <span className="w-8 text-center font-bold text-gray-900">{quantityInCart}</span>
                                                                                <button
                                                                                    onClick={() => addToCart(item)}
                                                                                    className="w-8 h-8 bg-gradient-to-br from-orange-600 to-orange-700 rounded-lg flex items-center justify-center hover:from-orange-700 hover:to-orange-800 transition-all shadow-sm"
                                                                                >
                                                                                    <Plus className="w-4 h-4 text-white" />
                                                                                </button>
                                                                            </div>
                                                                        ) : (
                                                                            <button
                                                                                onClick={() => addToCart(item)}
                                                                                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-5 py-2.5 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                                                                            >
                                                                                <Plus className="w-4 h-4" />
                                                                                Add
                                                                            </button>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="p-4 bg-white border-t border-gray-100 shadow-lg">
                                <button
                                    onClick={handleViewCart}
                                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-between px-6"
                                >
                                    <span className="flex items-center gap-2">
                                        <ShoppingCart className="w-5 h-5" />
                                        View Cart ({getCartItemCount()})
                                    </span>
                                    <span>${getCartTotal().toFixed(2)}</span>
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    // Order Type Selection View
                    <div className="h-full flex flex-col animate-in fade-in duration-500">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
                            <div className="flex items-center gap-3">
                                <div className="bg-orange-100 p-2 rounded-xl">
                                    <ShoppingBag className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Start Your Order</h2>
                                    <p className="text-sm text-gray-500">Select how you'd like to receive your food</p>
                                </div>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X className="w-6 h-6 text-gray-400" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                            <div className="space-y-4">
                                <button
                                    onClick={() => handleOrderTypeSelect('delivery')}
                                    className="w-full bg-white p-6 rounded-3xl border-2 border-transparent hover:border-orange-500 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all group text-left relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Truck className="w-24 h-24 text-orange-600 transform rotate-12" />
                                    </div>
                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                                            <Truck className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Delivery</h3>
                                            <p className="text-sm text-gray-500 mb-3">We'll bring the food to your doorstep.</p>
                                            <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                                Check Availability
                                            </span>
                                        </div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleOrderTypeSelect('dine-in')}
                                    className="w-full bg-white p-6 rounded-3xl border-2 border-transparent hover:border-orange-500 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all group text-left relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <UtensilsCrossed className="w-24 h-24 text-orange-600 transform rotate-12" />
                                    </div>
                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                                            <UtensilsCrossed className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Order at a Table</h3>
                                            <p className="text-sm text-gray-500 mb-3">Dine in at our restaurant with table service.</p>
                                            <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full group-hover:bg-purple-600 group-hover:text-white transition-colors">
                                                Reserve Now
                                            </span>
                                        </div>
                                    </div>
                                </button>

                                <button
                                    onClick={() => handleOrderTypeSelect('pickup')}
                                    className="w-full bg-white p-6 rounded-3xl border-2 border-transparent hover:border-orange-500 shadow-sm hover:shadow-xl hover:shadow-orange-100 transition-all group text-left relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Store className="w-24 h-24 text-orange-600 transform -rotate-12" />
                                    </div>
                                    <div className="relative z-10 flex items-start gap-4">
                                        <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors">
                                            <Store className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">Pickup</h3>
                                            <p className="text-sm text-gray-500 mb-3">Come to the restaurant to pick up.</p>
                                            <span className="text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full group-hover:bg-green-600 group-hover:text-white transition-colors">
                                                Select Location
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>

                        <div className="p-6 bg-white border-t border-gray-100">
                            <p className="text-center text-xs text-gray-400">
                                By continuing, you agree to our Terms of Service and Privacy Policy.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default OrderDrawer;
