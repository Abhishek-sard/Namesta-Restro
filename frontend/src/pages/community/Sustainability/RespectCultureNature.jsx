import React from 'react';
import { Heart } from 'lucide-react';

const RespectCultureNature = () => {
    return (
        <section className="py-24 bg-orange-50 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
                <Heart size={400} />
            </div>

            <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 font-cursive">
                    Respect for Culture & Nature
                </h2>
                <p className="text-2xl text-gray-700 leading-relaxed font-cursive italic">
                    Inspired by Nepali traditions, we believe in respecting nature, community, and future generations through conscious and sustainable choices.
                </p>
            </div>
        </section>
    );
};

export default RespectCultureNature;
