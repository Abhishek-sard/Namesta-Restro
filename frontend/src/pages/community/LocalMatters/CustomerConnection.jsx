import React from 'react';
import { Quote } from 'lucide-react';

const CustomerConnection = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 -z-0">
                <Quote size={400} />
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl font-bold mb-16 text-gray-900 font-cursive">Customer <span className="text-orange-600">Connection</span></h2>

                <div className="space-y-12">
                    <div className="relative p-10 bg-gray-50 rounded-[3rem] shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <p className="text-2xl md:text-3xl text-gray-800 font-light italic leading-relaxed font-cursive">
                            “Namaste feels like home — fresh food and warm people.”
                        </p>
                        <div className="mt-8">
                            <h4 className="font-bold text-gray-900">Sarah Jenkins</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Local Resident</p>
                        </div>
                    </div>

                    <div className="relative p-10 bg-orange-50 rounded-[3rem] shadow-sm hover:shadow-xl transition-shadow duration-500">
                        <p className="text-2xl md:text-3xl text-gray-800 font-light italic leading-relaxed font-cursive">
                            “The spices are vibrant, and you can truly taste the quality in every bite. It’s a community treasure.”
                        </p>
                        <div className="mt-8">
                            <h4 className="font-bold text-gray-900">David Miller</h4>
                            <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">Food Enthusiast</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerConnection;
