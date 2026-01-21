import React from 'react';

const Hungry = () => {
  return (
    <div
      className="relative w-full h-[500px] md:h-[600px] bg-cover bg-center"
      style={{
        backgroundImage:
          " url('/hungry.jpg')",
      }}
    >
      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center w-full px-6">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 font-cursive drop-shadow-lg">
          Hungry Yet?
        </h2>
        <button className="px-12 py-4 bg-orange-600 text-white text-xl font-semibold rounded-full shadow-2xl hover:bg-orange-700 transition-all transform hover:scale-105">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default Hungry;
