import React from 'react';
import { Droplets, Zap, ShieldCheck } from 'lucide-react';

const EnergyWaterCare = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative group lg:order-2">
                        <img
                            src="https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?q=80&w=2013&auto=format&fit=crop"
                            alt="Water and Energy"
                            className="rounded-[3rem] shadow-2xl w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
                    </div>

                    <div className="space-y-8 lg:order-1">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-cursive">
                            Energy & Water <br /><span className="text-blue-600">Responsibility</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-cursive leading-relaxed">
                            Our operations focus on efficient energy use and water conservation to reduce our environmental footprint.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <div className="flex items-center gap-4 p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
                                <Zap className="w-10 h-10 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 font-cursive">Efficient Gear</h4>
                                    <p className="text-sm text-gray-600 font-cursive">Energy-star rated appliances.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-8 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-lg transition-shadow">
                                <Droplets className="w-10 h-10 text-blue-600 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800 font-cursive">Water Saving</h4>
                                    <p className="text-sm text-gray-600 font-cursive">Conscious consumption daily.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnergyWaterCare;
