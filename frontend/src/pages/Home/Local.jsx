const Local = () => {
  return (
    <div className="bg-white py-20 px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/local.jpg"
            alt="Supporting Local Community"
            className="w-full h-120 max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-yellow-900 uppercase tracking-widest font-semibold mb-2 font-cursive">
            Giving Back
          </h4>

          <h2 className="text-6xl md:text-5xl font-bold text-yellow-900 mb-6 font-cursive">
            LOCAL MATTERS.
          </h2>

          <p className="text-gray-900 text-lg mb-8 leading-relaxed font-cursive">
            At Namaste Restaurant, we believe in supporting our local community.
            We work with local farmers and suppliers to bring fresh ingredients
            while giving back through cultural and community initiatives.
          </p>

          <button className="px-8 py-3 bg-yellow-900 text-white text-lg font-semibold rounded-xl shadow hover:bg-yellow-800 transition">
            Learn More
          </button>
        </div>

      </div>
    </div>
  );
};

export default Local;
