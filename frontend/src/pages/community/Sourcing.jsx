import React from 'react';
import { Leaf, Truck, ShieldCheck, Map } from 'lucide-react';

const Sourcing = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative">
                            <img src="/food1.jpg" alt="Sourcing" className="rounded-3xl shadow-2xl relative z-10" />
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-40 -z-0"></div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <h4 className="text-red-600 font-bold tracking-widest uppercase mb-4">Our Commitment</h4>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-cursive">Aussie Fresh, <br /><span className="text-orange-900">Nepali Authentic</span></h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-10">
                            We believe that the best food starts with the best ingredients. That's why 90% of our produce, meats, and dairy are sourced directly from Australian farmers, ensuring freshness while we bring the 10% of soul from Nepal in the form of hand-picked spices.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex gap-4">
                                <Truck className="text-orange-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg">Farm to Table</h4>
                                    <p className="text-gray-600">Daily deliveries from NSW local growers.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Leaf className="text-green-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg">Organic Spices</h4>
                                    <p className="text-gray-600">Hand-selected Himalayan blends.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <ShieldCheck className="text-blue-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg">Quality Guaranteed</h4>
                                    <p className="text-gray-600">Strict standards for every batch.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Map className="text-purple-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-lg">Locally Rooted</h4>
                                    <p className="text-gray-600">Supporting Australian agriculture.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white py-20 text-center">
                <h2 className="text-3xl font-bold mb-10 italic">Tracing our Ingredients</h2>
                <div className="max-w-5xl mx-auto h-[400px] bg-gray-100 rounded-[50px] flex items-center justify-center border-4 border-dashed border-gray-200">
                    <p className="text-gray-400 text-xl font-cursive">Interactive Sourcing Map Coming Soon...</p>
                </div>
            </div>
        </div>
    );
};

export default Sourcing;
