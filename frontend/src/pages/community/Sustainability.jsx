import React from 'react';
import { Recycle, Droplets, Sun, Wind, CheckCircle2 } from 'lucide-react';

const Sustainability = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero */}
            <div className="py-24 bg-green-50 px-4 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mx-auto mb-8 shadow-inner">
                    <Recycle size={48} className="animate-pulse" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 font-cursive">Green <span className="text-green-600">Choices</span></h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto italic leading-relaxed">
                    At Namaste Restro, sustainability isn't a buzzword; it's our recipe for the future. From the Himalayas to Sydney, we strive to leave the smallest footprint possible.
                </p>
            </div>

            {/* Core Pillars */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="bg-[#fdfaf5] p-12 rounded-[60px] shadow-sm hover:shadow-xl transition-shadow border border-orange-50">
                        <Droplets className="text-blue-500 mb-6" size={40} />
                        <h3 className="text-3xl font-bold mb-4 italic">Water Conservation</h3>
                        <p className="text-gray-700 text-lg mb-6">Our kitchens are equipped with high-efficiency water management systems, reducing our annual consumption by 25% compared to standard restaurants.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 size={18} className="text-green-500" /> Smart sensor taps</li>
                            <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 size={18} className="text-green-500" /> Greywater recycling for plants</li>
                        </ul>
                    </div>

                    <div className="bg-[#fdfaf5] p-12 rounded-[60px] shadow-sm hover:shadow-xl transition-shadow border border-orange-50">
                        <Sun className="text-yellow-600 mb-6" size={40} />
                        <h3 className="text-3xl font-bold mb-4 italic">Solar Integration</h3>
                        <p className="text-gray-700 text-lg mb-6">60% of our daytime energy is powered by the beautiful Australian sun through our rooftop solar arrays.</p>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 size={18} className="text-green-500" /> 100% LED lighting</li>
                            <li className="flex items-center gap-2 text-gray-600"><CheckCircle2 size={18} className="text-green-500" /> Energy-star appliances</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Waste Section */}
            <div className="bg-[#9a3412] py-24 text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">Zero Waste to Landfill</h2>
                        <p className="text-xl text-orange-100 mb-10 leading-relaxed">
                            By 2026, our goal is to achieve 100% waste diversion. Currently, we compost all organic food waste and use 100% biodegradable takeaway packaging made from sugar cane fiber.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20">Plastic Free</span>
                            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20">Compostable</span>
                            <span className="bg-white/10 px-6 py-2 rounded-full border border-white/20">Recyclable</span>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/farmer.jpg" alt="Sustainability" className="rounded-[40px] shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;
