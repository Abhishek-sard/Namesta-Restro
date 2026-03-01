import React from 'react';
import { Briefcase, Zap, Smile, Coffee, ChevronRight } from 'lucide-react';

const Careers = () => {
    const jobs = [
        { title: "Sous Chef", type: "Full-Time", loc: "Sydney CBD" },
        { title: "Front of House", type: "Part-Time", loc: "Sydney Central" },
        { title: "Kitchen Hand", type: "Casual", loc: "Parramatta" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Hero */}
            <div className="relative h-[450px] flex items-center justify-center overflow-hidden">
                <img src="/groupworker.jpg" alt="Team" className="absolute inset-0 w-full h-full object-cover brightness-50" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cursive">Join Our <span className="text-yellow-400">Team</span></h1>
                    <p className="text-xl md:text-2xl max-w-2xl mx-auto italic">Start your journey with the heart of Nepali hospitality.</p>
                </div>
            </div>

            {/* Why Join Us */}
            <div id="story" className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-4xl font-bold mb-16 text-gray-900 font-sans uppercase font-cursive">Why Subhakamana?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="p-8 hover:bg-orange-50 rounded-2xl transition-colors">
                        <Zap className="text-orange-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Growth</h4>
                        <p className="text-gray-800 font-cursive">Career pathing and skill development at every level.</p>
                    </div>
                    <div className="p-8 hover:bg-blue-50 rounded-2xl transition-colors">
                        <Smile className="text-blue-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Culture</h4>
                        <p className="text-gray-800 font-cursive">A friendly, diverse team where heritage is celebrated.</p>
                    </div>
                    <div className="p-8 hover:bg-green-50 rounded-2xl transition-colors">
                        <Coffee className="text-green-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Benefits</h4>
                        <p className="text-gray-800 font-cursive">Generous staff discounts and balanced rosters.</p>
                    </div>
                    <div className="p-8 hover:bg-red-50 rounded-2xl transition-colors">
                        <Briefcase className="text-red-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Heritage</h4>
                        <p className="text-gray-800 font-cursive">Represent authentic Nepali flavors to the world.</p>
                    </div>
                </div>
            </div>

            {/* Career Journey */}
            <div id="journey" className="bg-red-900 text-white py-24">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 font-cursive italic text-yellow-400">Your Journey With Us</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        <div className="z-10">
                            <div className="w-16 h-16 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">1</div>
                            <h3 className="text-2xl font-bold mb-4">Onboarding</h3>
                            <p className="text-red-100">Immerse yourself in our culture, values, and the secret behind our authentic flavors.</p>
                        </div>
                        <div className="z-10">
                            <div className="w-16 h-16 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">2</div>
                            <h3 className="text-2xl font-bold mb-4">Development</h3>
                            <p className="text-red-100">Master your craft with hands-on training and mentorship from industry veterans.</p>
                        </div>
                        <div className="z-10">
                            <div className="w-16 h-16 bg-yellow-400 text-red-900 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">3</div>
                            <h3 className="text-2xl font-bold mb-4">Leadership</h3>
                            <p className="text-red-100">Step into management roles and help shape the future of Nepali hospitality in Australia.</p>
                        </div>
                        <div className="hidden md:block absolute top-8 left-1/4 right-1/4 h-0.5 bg-red-700 -z-0"></div>
                    </div>
                </div>
            </div>

            {/* Openings removed */}
        </div>
    );
};

export default Careers;
