import React from 'react';
import { Leaf, Award, Truck, Heart } from 'lucide-react';

const LocalSourcing = () => {
    const points = [
        { icon: <Leaf className="text-green-500" />, title: "Locally Sourced Vegetables", desc: "Fresh from nearby farmers' markets daily." },
        { icon: <Award className="text-yellow-500" />, title: "Fresh Spices", desc: "Hand-picked and ground to preserve authentic aroma." },
        { icon: <Truck className="text-blue-500" />, title: "Seasonal Ingredients", desc: "Menu adaptations based on nature's best offerings." },
        { icon: <Heart className="text-red-500" />, title: "Trusted Local Suppliers", desc: "Long-term partnerships with ethical producers." }
    ];

    return (
        <section className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-18">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                        <img
                            src="/localsupport.jpg"
                            alt="Local Vegetables and Spices"
                            className="rounded-3xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
                        />
                    </div>

                    <div className="lg:pl-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-cursive">
                            Local <span className="text-orange-600">Sourcing</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 font-cursive">
                            We believe that the best food starts with the best ingredients. By sourcing locally, we ensures maximum freshness while reducing our carbon footprint.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {points.map((point, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-800">{point.title}</h4>
                                        <p className="text-sm text-gray-500">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalSourcing;
