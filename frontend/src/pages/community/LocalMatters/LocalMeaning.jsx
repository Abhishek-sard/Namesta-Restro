import React from 'react';

const LocalMeaning = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 relative inline-block font-cursive">
                    What "Local Matters" Means
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500 transform scale-x-50"></div>
                </h2>
                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light italic font-cursive">
                        "At Namaste Restaurant, Local Matters means building strong connections with our community.
                        We choose fresh, locally sourced ingredients and support small businesses to ensure quality,
                        sustainability, and authentic Nepali flavors."
                    </p>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        For us, every plate tells a story of local farmers, artisans, and the shared culture that makes our neighborhood thrive. When you dine with us, you're not just eating; you're investing in the local ecosystem.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default LocalMeaning;
