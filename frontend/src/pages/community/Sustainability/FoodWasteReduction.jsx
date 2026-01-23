import React from 'react';
import { UtensilsCrossed, Scale, ShieldAlert } from 'lucide-react';

const FoodWasteReduction = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-cursive">
                            Reducing <span className="text-orange-600">Food Waste</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-cursive leading-relaxed">
                            Our kitchen follows mindful cooking practices, smart portion sizes, and responsible food handling to minimize waste without compromising taste.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-6 items-start">
                                <div className="bg-orange-100 p-4 rounded-2xl">
                                    <Scale className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-800 font-cursive">Smart Portioning</h4>
                                    <p className="text-gray-600 font-cursive">Designed to satisfy without excess.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="bg-orange-100 p-4 rounded-2xl">
                                    <UtensilsCrossed className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-gray-800 font-cursive">Mindful Cooking</h4>
                                    <p className="text-gray-600 font-cursive">Reusing ingredients responsibly across our menu.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 group">
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop"
                                alt="Chef cooking"
                                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodWasteReduction;
