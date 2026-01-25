import React from 'react';
import { Link } from 'react-router-dom';

const ClosingPromise = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

                    <h2 className="text-5xl md:text-7xl font-bold mb-8 relative z-10 font-cursive">Our Simple Promise</h2>
                    <p className="text-2xl md:text-3xl text-green-50 mb-12 max-w-3xl mx-auto relative z-10 opacity-90 font-cursive italic leading-relaxed">
                        “Good food should not harm the planet. At Namaste Restaurant, we cook with care—for people and for nature.”
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
                        <Link to="/menu" className="bg-white text-green-800 px-12 py-5 rounded-3xl font-bold hover:bg-green-50 transition-all shadow-lg hover:-translate-y-1 text-xl font-cursive">
                            Explore Our Menu
                        </Link>
                        <Link to="/restaurants/about" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-3xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm text-xl font-cursive">
                            Our Story
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClosingPromise;
