import React from 'react';

const LocalHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000  mt-23"
                style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.2)), url('/localmatter.jpg')`,
                }}
            />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-down font-cursive">
                    Local <span className="text-orange-500">Matters</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 font-medium leading-relaxed animate-fade-in-up">
                    Supporting local people, local food, and local culture.
                </p>
                <div className="mt-8 flex justify-center gap-4 animate-bounce-subtle">
                    <div className="w-1 h-12 bg-orange-500 rounded-full"></div>
                </div>
            </div>

            {/* Decorative bottom wave or slant */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 text-white fill-current">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default LocalHero;
