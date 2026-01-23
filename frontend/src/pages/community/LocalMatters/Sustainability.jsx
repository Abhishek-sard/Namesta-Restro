import React from 'react';
import { ShieldCheck, Recycle, Globe, Zap } from 'lucide-react';

const Sustainability = () => {
    const items = [
        { icon: <Recycle className="w-8 h-8 text-green-600" />, title: "Reducing Food Waste", desc: "Implementing smart portioning and donation programs." },
        { icon: <ShieldCheck className="w-8 h-8 text-blue-600" />, title: "Eco-friendly Packaging", desc: "100% biodegradable and recyclable takeaway materials." },
        { icon: <Zap className="w-8 h-8 text-yellow-600" />, title: "Responsible Sourcing", desc: "Partnering with suppliers who share our ecological values." },
        { icon: <Globe className="w-8 h-8 text-emerald-600" />, title: "Respecting Nature", desc: "Minimizing our environmental footprint in every operation." }
    ];

    return (
        <section className="py-24 bg-[#1a2e1a] text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Sustainability & <span className="text-green-400">Responsibility</span>
                    </h2>
                    <p className="text-xl text-gray-300 font-light">
                        Our commitment to the planet is as strong as our commitment to our guests.
                        We strive for a sustainable future through conscious choices.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {items.map((item, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-all group">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                            <p className="text-gray-400 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sustainability;
