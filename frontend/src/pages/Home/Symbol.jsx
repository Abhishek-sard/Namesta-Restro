const Symbol = () => {
  return (
    <div
      className="h-[550px] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center px-6"
      style={{
        backgroundImage:
          "linear-gradient(rgba(154, 52, 18, 0.75), rgba(154, 52, 18, 0.75)), url('/symbol.jpg')",
      }}
    >
      <div className="max-w-3xl">
        {/* Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-4">
          Are you hungry?
        </h1>

        {/* Subtitle */}
        <p className="text-gray-200 text-lg md:text-xl mb-8">
          High-quality products crafted to meet your daily needs.  
          Explore our collection and find what suits you best.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-yellow-400 transition">
            Sign Up 
          </button>

          <button className="px-8 py-3 border-2 border-white text-white text-lg font-semibold rounded-xl hover:bg-white hover:text-yellow-500 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Symbol;
