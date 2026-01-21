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
            <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-4xl font-bold mb-16 text-gray-900 font-sans uppercase">Why Namaste?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="p-8">
                        <Zap className="text-orange-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Growth</h4>
                        <p className="text-gray-600">Career pathing and skill development at every level.</p>
                    </div>
                    <div className="p-8">
                        <Smile className="text-blue-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Culture</h4>
                        <p className="text-gray-600">A friendly, diverse team where heritage is celebrated.</p>
                    </div>
                    <div className="p-8">
                        <Coffee className="text-green-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Benefits</h4>
                        <p className="text-gray-600">Generous staff discounts and balanced rosters.</p>
                    </div>
                    <div className="p-8">
                        <Briefcase className="text-red-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Heritage</h4>
                        <p className="text-gray-600">Represent authentic Nepali flavors to the world.</p>
                    </div>
                </div>
            </div>

            {/* Openings */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 italic">Current Openings</h2>
                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-md transition-shadow">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">{job.title}</h3>
                                    <p className="text-gray-500">{job.type} • {job.loc}</p>
                                </div>
                                <button className="bg-gray-900 text-white p-3 rounded-full hover:bg-red-600 transition-colors">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-6">Don't see your role? Send your CV to</p>
                        <a href="mailto:careers@namasterestro.com" className="text-2xl font-bold text-red-600 underline">careers@namasterestro.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
