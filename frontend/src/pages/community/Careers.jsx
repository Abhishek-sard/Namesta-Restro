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
                <h2 className="text-4xl font-bold mb-16 text-gray-900 font-sans uppercase">Why Namaste?</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="p-8 hover:bg-orange-50 rounded-2xl transition-colors">
                        <Zap className="text-orange-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Growth</h4>
                        <p className="text-gray-600">Career pathing and skill development at every level.</p>
                    </div>
                    <div className="p-8 hover:bg-blue-50 rounded-2xl transition-colors">
                        <Smile className="text-blue-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Culture</h4>
                        <p className="text-gray-600">A friendly, diverse team where heritage is celebrated.</p>
                    </div>
                    <div className="p-8 hover:bg-green-50 rounded-2xl transition-colors">
                        <Coffee className="text-green-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Benefits</h4>
                        <p className="text-gray-600">Generous staff discounts and balanced rosters.</p>
                    </div>
                    <div className="p-8 hover:bg-red-50 rounded-2xl transition-colors">
                        <Briefcase className="text-red-500 mx-auto mb-4" size={40} />
                        <h4 className="font-bold text-xl mb-2">Heritage</h4>
                        <p className="text-gray-600">Represent authentic Nepali flavors to the world.</p>
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

            {/* Openings / Our Roles */}
            <div id="roles" className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-center text-gray-900 italic font-cursive">Our Roles</h2>
                    <p className="text-center text-gray-600 mb-12">Explore the opportunities waiting for you at Namaste Restro.</p>
                    <div className="space-y-4">
                        {jobs.map((job, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center group hover:shadow-lg transition-all hover:-translate-y-1">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors uppercase tracking-tight">{job.title}</h3>
                                    <p className="text-gray-500 font-medium">{job.type} • {job.loc}</p>
                                </div>
                                <button className="bg-gray-900 text-white p-3 rounded-full group-hover:bg-red-600 transition-colors">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center bg-white p-12 rounded-3xl shadow-xl border border-gray-50">
                        <h3 className="text-2xl font-bold mb-4">Don't see your perfect fit?</h3>
                        <p className="text-gray-600 mb-8 max-w-lg mx-auto">We're always looking for passionate people. Send your CV to our talent pool and we'll reach out when a role opens up.</p>
                        <a href="mailto:careers@namasterestro.com" className="inline-block bg-red-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-900 transition-colors shadow-lg shadow-red-200">
                            careers@namasterestro.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
