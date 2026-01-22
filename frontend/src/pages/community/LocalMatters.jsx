import React from 'react';
import { Heart, Users, MapPin, Globe } from 'lucide-react';

const LocalMatters = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header / Hero */}
            <div className="relative py-32 bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/local.jpg')] bg-cover bg-center text-white text-center">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <span className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-8 inline-block shadow-lg">Community First</span>
                    <h1 className="text-5xl md:text-8xl font-bold mb-6 font-cursive">Local <span className="text-yellow-400">Matters</span></h1>
                    <p className="text-xl md:text-2xl text-gray-100 italic leading-relaxed">
                        At Namaste Restro, our heart beats for Australia. We believe in the power of local impact and the magic that happens when a community feeds itself.
                    </p>
                </div>
            </div>

            {/* Impact Counter Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Donated So Far", value: "$45,000+" },
                            { label: "Groups Supported", value: "250+" },
                            { label: "Community Meals", value: "12,400" },
                            { label: "Volunteer Hours", value: "3,200" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group p-8 rounded-3xl hover:bg-orange-50 transition-colors">
                                <div className="text-3xl md:text-5xl font-black text-red-600 mb-2 group-hover:scale-110 transition-transform tracking-tighter">{stat.value}</div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Support mechanism with Refined Design */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <img src="/local.jpg" alt="Local Community" className="rounded-[60px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] w-full h-[600px] object-cover ring-8 ring-[#fdfaf5]" />
                        <div className="absolute -bottom-10 -right-10 bg-yellow-400 p-10 rounded-[40px] shadow-2xl hidden md:block max-w-xs rotate-3">
                            <h4 className="text-2xl font-black text-gray-900 mb-2 italic">1-for-1 Promise</h4>
                            <p className="text-gray-800 text-sm font-medium">For every signature MoMo platter sold, we donate a meal to local shelters.</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight uppercase tracking-tighter">Our Community <br /><span className="text-red-600 italic font-cursive">Pillars</span></h2>
                        <p className="text-gray-600 text-lg mb-12">We don't just write checks; we show up. Our Local Matters program is built on three essential pillars that ensure your support reaches those who need it most.</p>

                        <div className="space-y-10">
                            {[
                                {
                                    icon: <Heart size={32} />,
                                    color: "bg-red-50 text-red-600",
                                    title: "The Token System",
                                    desc: "Each time you dine, you receive a token to vote for one of three local charities featured that month."
                                },
                                {
                                    icon: <Users size={32} />,
                                    color: "bg-blue-50 text-blue-600",
                                    title: "Sponsorship & Events",
                                    desc: "From local football teams to school plays, we provide the fuel for Sydney's rising stars."
                                },
                                {
                                    icon: <Globe size={32} />,
                                    color: "bg-green-50 text-green-600",
                                    title: "Sustainable Partnerships",
                                    desc: "We work with local Australian farmers to source our produce, keeping the cycle of growth local."
                                }
                            ].map((pillar, i) => (
                                <div key={i} className="flex gap-8 group">
                                    <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-12`}>
                                        {pillar.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-red-600 transition-colors uppercase tracking-tight">{pillar.title}</h4>
                                        <p className="text-gray-600 leading-relaxed font-medium">{pillar.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Monthly Features */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-black text-gray-900 uppercase">This Month's <span className="text-red-600">Shortlist</span></h2>
                            <p className="text-gray-500 mt-4">Every dollar from our token jar goes directly to these three causes. Cast your vote next time you visit.</p>
                        </div>
                        <button className="text-red-600 font-bold border-b-2 border-red-600 hover:text-gray-900 transition-colors">VIEW PAST WINNERS</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Sydney Food Pantry", cat: "Humanitarian", img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&auto=format&fit=crop" },
                            { name: "Urban Green Space", cat: "Environment", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?w=500&auto=format&fit=crop" },
                            { name: "Code for Kids", cat: "Education", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format&fit=crop" }
                        ].map((cause, i) => (
                            <div key={i} className="bg-white rounded-[40px] overflow-hidden shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 group border border-gray-100">
                                <div className="h-56 relative overflow-hidden">
                                    <img src={cause.img} alt={cause.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-red-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{cause.cat}</div>
                                </div>
                                <div className="p-10">
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{cause.name}</h3>
                                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">Dedicated to making a difference in the hearts of those who call Sydney home.</p>
                                    <button className="w-full py-4 bg-gray-900 text-white rounded-2xl font-black hover:bg-red-600 transition-colors uppercase tracking-widest text-xs">Read Story</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Nomination Section with Enhanced Styling */}
            <div className="bg-[#f0ece9] py-32 px-4 relative overflow-hidden">
                <div className="absolute left-0 bottom-0 opacity-5 -mb-20 -ml-20">
                    <Heart size={400} />
                </div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white mx-auto mb-10 shadow-2xl animate-pulse">
                        <MapPin size={32} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 italic font-cursive text-gray-900 leading-tight">Your Cause, Our Support</h2>
                    <p className="text-xl text-gray-700 mb-12 font-medium leading-relaxed">
                        Do you know a local non-profit, school, or community group that needs a helping hand? We allocate $3,000 every month to new causes nominated by our local family.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button className="bg-red-600 hover:bg-gray-900 text-white font-black py-5 px-12 rounded-full transition-all shadow-2xl uppercase tracking-widest text-sm transform hover:scale-105">
                            NOMINATE A CAUSE
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-900 font-black py-5 px-12 rounded-full transition-all shadow-md uppercase tracking-widest text-sm">
                            PARTNERSHIP ENQUIRY
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default LocalMatters;