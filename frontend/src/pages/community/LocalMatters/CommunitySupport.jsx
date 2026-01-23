import React from 'react';

const CommunitySupport = () => {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                            Supporting the <br />
                            <span className="text-orange-600">Community</span>
                        </h2>
                        <div className="space-y-6 text-lg text-gray-700">
                            <p>
                                At Namaste, our community is our family. We take pride in more than just serving meals; we actively participate in the local life that surrounds us.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0"></span>
                                    <span>Supporting local farmers & suppliers through ethical trade.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0"></span>
                                    <span>Hiring local staff and providing professional growth opportunities.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0"></span>
                                    <span>Participating in neighborhood events and charity drives.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5 flex-shrink-0"></span>
                                    <span>Celebrating Nepali festivals like Dashain, Tihar, and Teej with all our neighbors.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 group">
                        <div className="relative overflow-hidden rounded-[2rem] shadow-2xl">
                            <img
                                src="/groupworker.jpg"
                                alt="Community Events"
                                className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-medium italic text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    "Bringing people together through culture and cuisine."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySupport;
