import React from 'react';
import { Leaf, ShoppingBag, Map } from 'lucide-react';

const LocalResponsibleSourcing = () => {
    return (
        <section className="py-24 bg-green-50">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img
                            src="/localfood.jpg"
                            alt="Local Market"
                            className="rounded-[3rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl z-20 hidden md:block max-w-xs">
                            <p className="font-cursive text-xl text-green-700 italic">"Freshness delivered from our local soil to your plate."</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 font-cursive">
                            Local & Responsible <br /><span className="text-green-600">Sourcing</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-cursive leading-relaxed">
                            We source fresh vegetables, spices, and ingredients from local suppliers whenever possible, ensuring quality, freshness, and support for local farmers.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                                <Leaf className="w-10 h-10 text-green-500 mx-auto mb-4" />
                                <h4 className="font-bold text-gray-800 font-cursive text-lg">Local Veggies</h4>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                                <ShoppingBag className="w-10 h-10 text-green-500 mx-auto mb-4" />
                                <h4 className="font-bold text-gray-800 font-cursive text-lg">Trusted Suppliers</h4>
                            </div>
                            <div className="text-center p-6 bg-white rounded-2xl shadow-sm border border-green-100 hover:shadow-md transition-shadow">
                                <Map className="w-10 h-10 text-green-500 mx-auto mb-4" />
                                <h4 className="font-bold text-gray-800 font-cursive text-lg">Seasonal Items</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalResponsibleSourcing;
