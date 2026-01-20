const SustainabilitySection = () => {
  return (
    <div className="bg-white py-20 px-20 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-600 uppercase tracking-widest font-semibold mb-2 font-cursive">
            Sustainability
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6 font-cursive">
            Caring for Nature & Community
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed font-cursive">
            At Namaste Restaurant, we believe in respecting nature.
            We source ingredients locally, reduce waste, and follow
            sustainable practices to protect our environment while
            serving authentic Nepali cuisine.
          </p>

          <button className="px-8 py-3 bg-yellow-900 text-white text-lg font-semibold rounded-xl shadow hover:bg-yellow-800 transition font-cursive">
            SEE MORE
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/farmer.jpg"
            alt="Sustainable Cooking"
            className="w-full h-125 max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default SustainabilitySection;
