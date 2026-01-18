import React, { useState, useEffect } from 'react';

const images = [
    "https://images.unsplash.com/photo-1514362545857-3bc16549766b?q=80&w=1920&auto=format&fit=crop", // Delicious Food Table
    "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop", // Restaurant Interior
    "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1920&auto=format&fit=crop", // Plating Food
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop"  // Fine Dining
];

const HeroSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Images */}
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for better text visibility if needed */}
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
            ))}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg tracking-wide">
                    Welcome to Namesta
                </h1>
                <p className="text-xl md:text-2xl text-white font-medium max-w-2xl drop-shadow-md">
                    Experience authentic flavors and unforgettable moments.
                </p>
                <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full text-lg transition-transform hover:scale-105 shadow-xl">
                    Book a Table
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
