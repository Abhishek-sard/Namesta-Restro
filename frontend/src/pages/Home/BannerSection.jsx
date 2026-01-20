const BannerSection = () => {
  return (
    <div
      className="relative h-[600px] md:h-[650px] bg-cover bg-center flex items-center justify-center mt-15"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/food.jpg')",
      }}
    >
      {/* CENTER TEXT */}
      <div className="text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-cursive">
        100% Nepali Cuisine
        </h1>
        <p className="text-lg md:text-xl font-cursive">
          Fresh • Local • Authentic Nepali Flavors
        </p>
      </div>

      {/* BOTTOM BUTTON */}
      <div className="absolute bottom-8">
        <button className="px-8 py-3 bg-white text-orange-600 text-lg font-semibold rounded-xl shadow hover:bg-yellow-200 transition font-cursive">
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default BannerSection;
