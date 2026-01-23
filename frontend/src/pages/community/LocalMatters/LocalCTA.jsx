import React from 'react';
import { Link } from 'react-router-dom';

const LocalCTA = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-gradient-to-br from-orange-600 to-red-700 rounded-[4rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>

                    <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10">Join Our <span className="text-orange-200">Local Family</span></h2>
                    <p className="text-xl md:text-2xl text-orange-50 mb-12 max-w-2xl mx-auto relative z-10 opacity-90">
                        Experience authentic flavors while supporting the community that makes it all possible.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        <Link to="/restaurants/find" className="bg-white text-orange-700 px-8 py-4 rounded-2xl font-bold hover:bg-orange-50 transition-all shadow-lg hover:-translate-y-1">
                            Visit Us
                        </Link>
                        <Link to="/menu" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                            View Menu
                        </Link>
                        <Link to="/community/careers" className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm">
                            Join Our Community
                        </Link>
                        <Link to="/restaurants/bookings" className="bg-black/20 text-white px-8 py-4 rounded-2xl font-bold hover:bg-black/40 transition-all backdrop-blur-sm border border-white/10">
                            Book a Table
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalCTA;
