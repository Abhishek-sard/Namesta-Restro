import React from 'react';
import { Gift, Star, Clock, ArrowRight } from 'lucide-react';

const Membership = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            {/* Hero Section */}
            <div className="relative py-20 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/namesta.jpg')] bg-cover bg-center text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cursive">Namaste <span className="text-yellow-400">Relish</span></h1>
                    <p className="text-xl md:text-2xl mb-8 italic">Where every bite brings you closer to exclusive rewards.</p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl">
                        JOIN THE FAMILY
                    </button>
                </div>
            </div>

            {/* Benefits Grid */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Membership Benefits</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6">
                            <Gift size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Welcome Treat</h3>
                        <p className="text-gray-600">Get a free plate of our signature steamed MoMo when you sign up today!</p>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center text-yellow-600 mx-auto mb-6">
                            <Star size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Points for Every $1</h3>
                        <p className="text-gray-600">Earn 10 points for every dollar spent. Redeem points for free meals and drinks.</p>
                    </div>

                    <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 text-center hover:-translate-y-2 transition-transform">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mx-auto mb-6">
                            <Clock size={32} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Priority Booking</h3>
                        <p className="text-gray-600">Skip the queue with priority table reservations for members only.</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-4 rounded-[40px] bg-[#9a3412] p-12 text-white flex flex-col md:flex-row items-center justify-between shadow-2xl">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-bold mb-2">Ready to relish the rewards?</h2>
                        <p className="text-orange-200">Registration is free and takes less than a minute.</p>
                    </div>
                    <button className="bg-white text-orange-900 font-bold py-4 px-8 rounded-2xl flex items-center gap-2 hover:bg-orange-50 transition-colors">
                        Sign Up Now <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Membership;
