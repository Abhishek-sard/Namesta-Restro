import React from 'react';

const SustainabilityHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 hover:scale-110"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('/sustainability.jpg')`,
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-fade-in-down font-cursive">
                    Sustain<span className="text-green-400">ability</span>
                </h1>
                <p className="text-xl md:text-3xl text-gray-100 font-medium leading-relaxed animate-fade-in-up font-cursive">
                    Cooking with care—for people and for nature.
                </p>
                <div className="mt-8 flex justify-center gap-4 animate-bounce-subtle">
                    <div className="w-1 h-12 bg-green-500 rounded-full"></div>
                </div>
            </div>

            {/* Decorative bottom slant */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-white fill-current">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default SustainabilityHero;
