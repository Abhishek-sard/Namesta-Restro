import React, { useEffect, useState } from 'react';
import { X, ShoppingBag, Truck, Store } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const OrderDrawer = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Prevent body scroll when drawer is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
            }, 8500); // 8.5s to allow full animation
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = 'unset';
            setIsLoading(false);
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleNavigation = (path) => {
        onClose();
        navigate(path);
    };

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
                                style={{ animation: 'write-cursive 8s linear forwards, blink 0.75s step-end infinite' }}
                            >
                                Namaste Restaurant
                            </h1>
                        </div>
                    </div>
                ) : (
                    <div className="h-full flex flex-col animate-in fade-in duration-500">
                        {/* Header */}
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
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50">
                            <div className="space-y-4">
                                {/* Delivery Option */}
                                <button
                                    onClick={() => handleNavigation('/menu?type=delivery')}
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

                                {/* Pickup Option */}
                                <button
                                    onClick={() => handleNavigation('/menu?type=pickup')}
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

                            {/* Promo / Extra Info */}
                            <div className="mt-8">
                                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-6 text-white relative overflow-hidden">
                                    <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full blur-2xl" />
                                    <div className="relative z-10">
                                        <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-bold mb-3 backdrop-blur-sm">
                                            Limited Offer
                                        </span>
                                        <h3 className="text-xl font-bold mb-2">Free Delivery!</h3>
                                        <p className="text-white/90 text-sm mb-4">On all orders above $50. Use code <span className="font-mono font-bold bg-white/20 px-1 rounded">FREEDEL</span></p>
                                        <button onClick={() => handleNavigation('/menu')} className="w-full bg-white text-orange-600 font-bold py-3 rounded-xl hover:bg-gray-50 transition-colors shadow-lg">
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
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
