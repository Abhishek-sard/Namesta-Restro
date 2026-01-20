const Taste = () => {
    return (
        <div className="bg-white py-20 px-18">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">

                {/* LEFT CONTENT */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-yellow-900 font-cursive leading-snug">
                        ALL TASTE,NO
                        REGRETS.
                    </h1>

                    <p className="text-gray-900 text-lg mb-2 mt-6 font-cursive">
                        Healthy, delicious Restro. We've been refusing to compromise <br />
                        since 2014.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4">
                        <button className="px-8 py-3 bg-yellow-900 text-white text-lg font-semibold rounded-xl shadow hover:bg-yellow-800 transition">
                            About Us
                        </button>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <img
                        src="/food.jpg"
                        alt="Delicious Food"
                        className="w-full h-80 max-w-sm md:max-w-md rounded-2xl shadow-lg object-cover"
                    />
                </div>

            </div>
        </div>
    );
};

export default Taste;
