const Join = () => {
  return (
    <div className="bg-white py-20 px-25">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/groupworker.jpg"
            alt="Sustainable Nepali Cooking"
            className="w-full h-110 max-w-md rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 text-center md:text-left">
          <h4 className="text-orange-600 uppercase tracking-widest font-semibold mb-2 font-cursive">
            Join With Us
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-yellow-900 mb-6 font-cursive">
            Build Careers
          </h2>

          <p className="text-gray-700 text-lg mb-8 leading-relaxed font-cursive">
            At Namaste Restaurant, we are always looking for passionate individuals
            to join our team. Whether you're an experienced professional or just
            starting your career, we offer opportunities for growth and development
            in a supportive environment.
          </p>

          <button className="px-8 py-3 bg-yellow-900 text-white text-lg font-semibold rounded-xl shadow hover:bg-yellow-800 transition font-cursive">
            JOIN OUR TEAM
          </button>
        </div>
        

      </div>
      <div class="w-275 border-t-4 border-dotted border-gray-400 my-25"></div>

    </div>
  );
};

export default Join;
