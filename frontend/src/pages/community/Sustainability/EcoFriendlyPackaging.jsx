import React from 'react';
import { Package, Recycle, Trash2 } from 'lucide-react';

const EcoFriendlyPackaging = () => {
    return (
        <section className="py-24 bg-green-900 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-green-500/10 rounded-full -ml-32 -mt-32 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 font-cursive">
                        Eco-Friendly <span className="text-green-400">Packaging</span>
                    </h2>
                    <p className="text-xl text-green-50 font-cursive italic opacity-90">
                        We use eco-friendly and recyclable packaging for takeaway orders, reducing plastic waste and protecting the environment.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 hover:bg-white/20 transition-all text-center">
                        <Package className="w-12 h-12 text-green-400 mx-auto mb-6" />
                        <h4 className="text-2xl font-bold mb-4 font-cursive">Paper Boxes</h4>
                        <p className="text-green-100 font-cursive">Sustainable and sturdy for your favorite meals.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 hover:bg-white/20 transition-all text-center">
                        <Recycle className="w-12 h-12 text-green-400 mx-auto mb-6" />
                        <h4 className="text-2xl font-bold mb-4 font-cursive">Biodegradable</h4>
                        <p className="text-green-100 font-cursive">Containers that return to the earth naturally.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20 hover:bg-white/20 transition-all text-center">
                        <Trash2 className="w-12 h-12 text-green-400 mx-auto mb-6" />
                        <h4 className="text-2xl font-bold mb-4 font-cursive">Reduced Plastic</h4>
                        <p className="text-green-100 font-cursive">Minimizing waste in every takeaway bag.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EcoFriendlyPackaging;
