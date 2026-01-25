import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4">Our Heritage</h4>
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-cursive">The Story of <br /><span className="text-orange-900">Namaste Restaurant</span></h1>
                        <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                            "Namaste" is more than just a greeting; it's a way of life. Founded with a vision to bring the authentic flavors of Nepal to the vibrant streets of Sydney.
                        </p>
                        <p className="text-gray-600 leading-relaxed mb-8">
                            Our journey started with a small kitchen and a big dream: to create a space where food is a bridge between cultures. Every spice we use is hand-picked, and every recipe is passed down through generations of Himalayan chefs.
                        </p>
                        <div className="grid grid-cols-2 gap-8 py-8 border-t border-orange-100">
                            <div>
                                <p className="text-4xl font-bold text-red-600 mb-2">10+</p>
                                <p className="text-gray-500 font-bold">Years of Tradition</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-red-600 mb-2">50+</p>
                                <p className="text-gray-500 font-bold">Authentic Recipes</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="/namesta.jpg" alt="About Us" className="rounded-[80px] shadow-2xl relative z-10" />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-100 rounded-full blur-3xl opacity-60"></div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="bg-white py-24">
                <div className="max-w-4xl mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold mb-8 italic">Our Vision</h2>
                    <p className="text-2xl text-gray-700 leading-relaxed font-cursive">
                        "To be the heart of Nepali hospitality in Australia, serving joy on every plate while respecting our roots and the environment."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
