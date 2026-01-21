import React from 'react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

const Nutrition = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-4xl mx-auto px-4 py-20 text-center">
                <CheckCircle2 className="text-green-600 mx-auto mb-6" size={64} />
                <h1 className="text-5xl font-bold mb-6 font-cursive">Healthy <span className="text-green-600">Living</span></h1>
                <p className="text-xl text-gray-700 leading-relaxed mb-12">
                    We value transparency. Our Nutrition & Allergen Guide aims to provide you with the most accurate information so you can enjoy your meal with total peace of mind.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
                    <div className="p-10 bg-[#fdfaf5] rounded-[40px] border border-orange-100">
                        <h3 className="text-2xl font-bold mb-6 text-orange-900 border-b-2 border-orange-100 pb-2">Dietary Friendly</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> 60% of our menu is Gluten Free</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Extensive Vegan & Vegetarian options</li>
                            <li className="flex items-center gap-2"><CheckCircle2 size={18} className="text-green-500" /> Low-sodium preparations available</li>
                        </ul>
                    </div>
                    <div className="p-10 bg-[#fdfaf5] rounded-[40px] border border-orange-100">
                        <h3 className="text-2xl font-bold mb-6 text-orange-900 border-b-2 border-orange-100 pb-2">Allergen Safety</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center gap-2"><ShieldAlert size={18} className="text-red-500" /> Strict cross-contamination protocols</li>
                            <li className="flex items-center gap-2"><ShieldAlert size={18} className="text-red-500" /> Nut-free environment options</li>
                            <li className="flex items-center gap-2"><ShieldAlert size={18} className="text-red-500" /> Staff trained in allergen handling</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-gray-900 p-12 rounded-[50px] text-white">
                    <h2 className="text-3xl font-bold mb-4">Detailed Guide</h2>
                    <p className="mb-10 text-gray-400">Download the comprehensive PDF for detailed calorie counts, macros, and full allergen lists.</p>
                    <button className="bg-red-600 px-10 py-4 rounded-full font-bold hover:bg-white hover:text-red-600 transition-all font-sans uppercase">DOWNLOAD PDF GUIDE</button>
                </div>
            </div>
        </div>
    );
};

export default Nutrition;
