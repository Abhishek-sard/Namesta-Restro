import React from 'react';
import { Gift, CreditCard, Send } from 'lucide-react';

const GiftCards = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <Gift className="text-red-600 mx-auto mb-6" size={64} />
                    <h1 className="text-5xl font-bold mb-4 font-cursive">Give the Gift of <span className="text-red-600">Taste</span></h1>
                    <p className="text-xl text-gray-600 italic">Perfect for any occasion. Share the Namaste experience with your loved ones.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="bg-gradient-to-br from-gray-900 to-red-900 p-12 rounded-[40px] shadow-2xl text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-4 font-cursive text-yellow-400">Namaste Restro</h2>
                            <p className="text-xl mb-12 opacity-80 italic">E-GIFT CARD</p>
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-xs uppercase tracking-widest opacity-60">Valid across all branches</p>
                                    <p className="text-2xl font-bold font-mono">**** **** **** 2024</p>
                                </div>
                                <CreditCard size={48} className="opacity-20" />
                            </div>
                        </div>
                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
                    </div>

                    <div className="bg-white p-12 rounded-[40px] shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold mb-8">Purchase a Gift Card</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Select Amount</label>
                                <div className="grid grid-cols-4 gap-4">
                                    {['$25', '$50', '$100', 'Custom'].map((amt) => (
                                        <button key={amt} className="py-3 rounded-xl border-2 border-gray-100 hover:border-red-600 hover:text-red-600 font-bold transition-all">
                                            {amt}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Recipient Email</label>
                                <input type="email" placeholder="friend@example.com" className="w-full p-4 rounded-xl border border-gray-200" />
                            </div>
                            <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-100">
                                CONTINUE TO PAYMENT <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GiftCards;
