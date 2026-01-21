import React from 'react';
import { Heart, Users, MapPin, Globe } from 'lucide-react';

const LocalMatters = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header */}
            <div className="py-20 bg-orange-50 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-cursive">Local <span className="text-red-600">Matters</span></h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">At Namaste Restro, we don't just serve food; we serve our community. Supporting local causes is at the heart of what we do.</p>
            </div>

            {/* Support mechanism */}
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="/local.jpg" alt="Local Community" className="rounded-[80px] shadow-2xl w-full h-[500px] object-cover" />
                    </div>
                    <div>
                        <h2 className="text-4xl font-bold mb-8 text-gray-900">How We Support</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 flex-shrink-0">
                                    <Heart size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Local Charities</h4>
                                    <p className="text-gray-600 text-lg">Every month, we donate a portion of our profits to local Sydney charities chosen by our guests.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                                    <Users size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Cultural Integration</h4>
                                    <p className="text-gray-600 text-lg">We host monthly cultural events to bridge the gap between Nepali heritage and the Australian community.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                                    <Globe size={28} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Zero Hunger Initiative</h4>
                                    <p className="text-gray-600 text-lg">Partnership with local food banks to ensure that no surplus fresh food goes to waste.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nomination Section */}
            <div className="bg-[#fdfaf5] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <MapPin className="text-red-600 mx-auto mb-6" size={48} />
                    <h2 className="text-3xl font-bold mb-6 italic">Know a local cause that needs help?</h2>
                    <p className="text-xl text-gray-700 mb-10">We are always looking for new ways to contribute to the Sydney community. Tell us about a local organization or group that could use our support.</p>
                    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg">
                        NOMINATE A CAUSE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LocalMatters;
