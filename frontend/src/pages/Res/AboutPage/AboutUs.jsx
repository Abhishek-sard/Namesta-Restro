import React from 'react';
import { Heart, ShieldCheck, Leaf, Globe, Utensils, Users, Sparkles, Trophy, Award, Rocket, Moon } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5] overflow-hidden relative">
            {/* Animated Background Blobs */}
            <div className="absolute top-20 -left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
            <div className="absolute top-40 -right-20 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>

            {/* Heritage Section */}
            <div className="max-w-7xl mx-auto px-4 py-24 md:py-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="text-center lg:text-left animate-fade-in-up">
                        <h4 className="text-red-600 font-bold uppercase tracking-[0.3em] mb-4 text-sm md:text-base">Our Heritage</h4>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-cursive leading-tight">
                            The Story of <br className="hidden sm:block" />
                            <span className="text-orange-900 drop-shadow-sm">Namaste Restaurant</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-8 italic font-light">
                            "Namaste" is more than just a greeting; it's a way of life. Founded with a vision to bring the authentic flavors of Nepal to the vibrant streets of Sydney.
                        </p>
                        <p className="text-gray-900 leading-relaxed mb-10 text-base md:text-lg font-cursive text-justify">
                            Our journey started with a small kitchen and a big dream: to create a space where food is a bridge between cultures. Every spice we use is hand-picked, and every recipe is passed down through generations of Himalayan chefs, ensuring every bite tells a story of tradition and love. We believe that food is not just nourishment, but a language that connects us all.
                        </p>
                        <div className="grid grid-cols-2 gap-6 md:gap-12 py-10 border-t border-orange-100">
                            <div className="hover:transform hover:scale-105 transition-all duration-300">
                                <p className="text-4xl md:text-5xl font-black text-red-600 mb-2">10+</p>
                                <p className="text-gray-900 font-bold tracking-wider uppercase text-xs md:text-sm font-cursive">Years of Tradition</p>
                            </div>
                            <div className="hover:transform hover:scale-105 transition-all duration-300">
                                <p className="text-4xl md:text-5xl font-black text-red-600 mb-2">50+</p>
                                <p className="text-gray-900 font-bold tracking-wider uppercase text-xs md:text-sm font-cursive">Authentic Recipes</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-12 lg:mt-0 animate-fade-in-up md:animation-delay-2000">
                        <div className="absolute inset-0 bg-orange-900/10 rounded-[40px] md:rounded-[100px] transform rotate-3 scale-105 blur-2xl"></div>
                        <img
                            src="/about.jpg"
                            alt="About Us"
                            className="rounded-[40px] md:rounded-[100px] shadow-2xl relative z-10 w-full max-w-2xl mx-auto transform hover:rotate-1 transition-transform duration-700"
                        />
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-red-100 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Our Journey Timeline */}
            <div className="py-24 bg-[#fdfaf5] relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-2">The Timeline</h4>
                        <h2 className="text-4xl md:text-5xl font-bold font-cursive text-gray-900">Our Culinary Journey</h2>
                    </div>

                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-orange-200 hidden md:block"></div>
                        <div className="space-y-12 md:space-y-0 relative">
                            {[
                                { year: "2014", title: "The First Spice", desc: "Our doors first opened in Sydney with only six tables and a menu written by hand." },
                                { year: "2017", title: "Regional Recognition", desc: "Voted as the 'Hidden Gem' for authentic Himalayan flavors by the local community." },
                                { year: "2021", title: "Sustainable Shift", desc: "Committed to 100% plastic-free operations and direct-from-farm sourcing." },
                                { year: "2024", title: "A Decade of Taste", desc: "Celebrating 10 years of bringing joy, culture, and 'Namaste' to every guest." }
                            ].map((item, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                                    <div className="flex-1 w-full md:w-auto">
                                        <div className={`p-8 bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 border border-orange-50 ${idx % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} text-center md:text-left`}>
                                            <span className="text-2xl font-black text-orange-900 mb-2 block">{item.year}</span>
                                            <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 bg-orange-600 rounded-full border-4 border-[#fdfaf5] z-10 my-4 md:my-0 shadow-lg flex items-center justify-center">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                    <div className="flex-1 hidden md:block"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Meet the Chefs Section */}
            <div className="py-24 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h4 className="text-orange-600 font-bold uppercase tracking-widest mb-2">The Artisans</h4>
                        <h2 className="text-4xl md:text-5xl font-bold font-cursive text-gray-900">Masters Behind the Spices</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div className="animate-fade-in-up">
                            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
                                Our kitchen is led by chefs who didn't just learn to cook; they were born into the tradition. Hailing from the foothills of Annapurna, they bring the soul of the mountains to every pan and plate.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-8">
                                With over 30 years of combined experience in five-star kitchens and mountain tea houses, our team understands that great food requires two things: patience and the perfect temperature.
                            </p>
                            <div className="flex items-center space-x-4 p-6 bg-orange-50 rounded-2xl border border-orange-100">
                                <div className="bg-orange-600 p-3 rounded-xl text-white">
                                    <Utensils className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Craftsmanship First</p>
                                    <p className="text-sm text-gray-500">Every dumpling is hand-folded, every sauce is hand-ground.</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-orange-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img src="/chef1.jpg" alt="Chef" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400'; }} />
                                </div>
                                <div className="h-48 bg-gray-200 rounded-3xl overflow-hidden relative group">
                                    <img src="/chef2.jpg" alt="Chef" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=400'; }} />
                                </div>
                            </div>
                            <div className="pt-12 space-y-4">
                                <div className="h-48 bg-gray-200 rounded-3xl overflow-hidden relative group">
                                    <img src="/chef3.jpg" alt="Chef" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=80&w=400'; }} />
                                </div>
                                <div className="h-64 bg-gray-200 rounded-3xl overflow-hidden relative group">
                                    <img src="/chef4.jpg" alt="Chef" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1595273670150-db0a3d39074f?auto=format&fit=crop&q=80&w=400'; }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Awards & Recognition Section */}
            <div className="py-24 bg-[#fdfaf5] relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h4 className="text-red-600 font-bold uppercase tracking-widest mb-2">Excellence</h4>
                        <h2 className="text-4xl md:text-5xl font-bold font-cursive text-gray-900">Celebrating Recognition</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Trophy />, title: "Best Nepali Cuisine", org: "Sydney Food Awards 2023", color: "bg-yellow-50" },
                            { icon: <Award />, title: "Five Star Service", org: "Local Hospitality Hub", color: "bg-orange-50" },
                            { icon: <ShieldCheck />, title: "Hygiene Excellence", org: "NSW Health Standard", color: "bg-red-50" },
                            { icon: <Heart />, title: "Community Choice", org: "Restaurant Guru 2024", color: "bg-pink-50" }
                        ].map((award, idx) => (
                            <div key={idx} className={`${award.color} p-8 rounded-[2.5rem] text-center border border-white hover:shadow-xl transition-all duration-500 group`}>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-orange-600 shadow-sm group-hover:scale-110 transition-transform">
                                    {award.icon}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{award.title}</h3>
                                <p className="text-sm text-gray-500 font-medium">{award.org}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chef's Secret Section */}
            <div className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="bg-orange-50 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group">
                                <Utensils className="absolute -top-10 -right-10 w-40 h-40 text-orange-100 transform -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                                <h4 className="text-red-600 font-bold uppercase tracking-widest mb-4">Culinary Secrets</h4>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-cursive leading-tight">Authentic Himalayan <br />Ingredients</h2>
                                <p className="text-gray-700 text-lg mb-8 leading-relaxed text-justify">
                                    What makes Namaste unique? We use rare spices found only in the high-altitude valleys of the Himalayas. Our selection process is rigorous, ensuring only the most aromatic and flavorful spices make it to our kitchen.
                                </p>
                                <ul className="space-y-6">
                                    {[
                                        { name: "Jimbu", desc: "A wild Himalayan herb that adds a unique earthy profile to our famous Dal." },
                                        { name: "Timur", desc: "The peppercorn of the mountains, bringing a refreshing tingle to every Momo bite." },
                                        { name: "Sila", desc: "A nutty, traditional seed used to create rich, textured Himalayan sauces." }
                                    ].map((spice, idx) => (
                                        <li key={idx} className="flex items-start space-x-4">
                                            <div className="mt-1.5"><Sparkles className="w-5 h-5 text-orange-600" /></div>
                                            <div>
                                                <span className="font-bold text-gray-900">{spice.name}:</span>
                                                <span className="text-gray-600 ml-2">{spice.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="text-center lg:text-left">
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-cursive text-gray-900 italic">"We don't use powders; we grind our heritage."</h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8 italic">
                                Our chefs personally oversee the sourcing of our chillies from the eastern hills of Nepal and the slow-roasting of our cumin seeds right here in our kitchen.
                            </p>
                            <div className="flex justify-center lg:justify-start space-x-8">
                                <div className="text-center">
                                    <div className="bg-orange-100 p-4 rounded-2xl mb-3"><Leaf className="w-8 h-8 text-orange-600 mx-auto" /></div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">100% Natural</span>
                                </div>
                                <div className="text-center">
                                    <div className="bg-red-100 p-4 rounded-2xl mb-3"><ShieldCheck className="w-8 h-8 text-red-600 mx-auto" /></div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">Traditional Methods</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-[#fdfaf5] py-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h4 className="text-orange-600 font-bold uppercase tracking-widest mb-2">Philosophy</h4>
                        <h2 className="text-3xl md:text-5xl font-bold font-cursive text-gray-900">Our Core Values</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="w-8 h-8 text-red-500" />,
                                title: "Passion for Taste",
                                desc: "We pour our hearts into every dish, staying true to authentic Himalayan spices and techniques."
                            },
                            {
                                icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
                                title: "Pure Quality",
                                desc: "No compromises. Only the freshest, locally sourced ingredients reach our kitchen table."
                            },
                            {
                                icon: <Leaf className="w-8 h-8 text-green-600" />,
                                title: "Sustainable Roots",
                                desc: "Respecting the earth by minimizing waste and supporting local farmers and communities."
                            }
                        ].map((value, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-orange-50 group hover:-translate-y-2">
                                <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center shadow-md mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Looking Ahead Section */}
            <div className="py-24 bg-white relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-[#1a1a1a] rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                            <div>
                                <Rocket className="w-12 h-12 text-orange-500 mb-8 animate-pulse" />
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 font-cursive">Looking Ahead</h2>
                                <p className="text-xl text-gray-300 leading-relaxed mb-8 font-light text-justify">
                                    Our journey is only beginning. We envision a future where Namaste becomes a cultural hub—a place for workshops on Himalayan spices, community cooking classes, and deeper cultural exchange. We are exploring new flavors and techniques while staying true to our heritage.
                                </p>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center">
                                        <Moon className="w-5 h-5 text-gray-400" />
                                    </div>
                                    <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Innovation meets Tradition</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                                    <p className="text-3xl font-black text-orange-500 mb-1">2025</p>
                                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400">New Location</p>
                                </div>
                                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 text-center">
                                    <p className="text-3xl font-black text-orange-500 mb-1">100k+</p>
                                    <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Smiles Served</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Community & Hospitality Section */}
            <div className="py-24 bg-white relative z-10 overflow-hidden">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <Users className="w-16 h-16 text-red-600 mx-auto mb-8 animate-bounce-subtle" />
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 font-cursive text-gray-900">Atithi Devo Bhava</h2>
                    <h4 className="text-xl md:text-2xl text-orange-900 font-bold mb-8 uppercase tracking-[0.2em]">"The Guest is God"</h4>
                    <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto font-light lg:text-justify">
                        In Himalayan culture, hospitality is sacred. We don't just serve food; we welcome you into our family. This ancient philosophy guides every smile, every service, and every plate we bring to your table. We celebrate the unique stories our guests bring, enriching our own shared experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100">
                            <h3 className="text-xl font-bold mb-4 text-orange-900">Local Impact</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">By partnering with local Sydney farmers for fresh produce and importing spices directly from Nepalese cooperatives, we ensure our growth supports their families too. Our commitment to sustainability is woven into every aspect of our operations.</p>
                        </div>
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                            <h3 className="text-xl font-bold mb-4 text-red-900">Cultural Pride</h3>
                            <p className="text-gray-600 leading-relaxed text-justify">From supporting traditional Nepalese dance events to hosting community festivals, Namaste is a home for culture and connection. We take pride in sharing our rich heritage with the vibrant Australian community.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision Section */}
            <div className="bg-[#9a3412] py-24 md:py-32 relative text-white overflow-hidden">
                <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
                    <div className="inline-block p-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                        <Globe className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 italic tracking-wide">Our Vision</h2>
                    <p className="text-2xl md:text-4xl leading-relaxed font-cursive text-orange-50 drop-shadow-md">
                        "To be the heart of Nepali hospitality in Australia, serving joy on every plate while respecting our roots and nature."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
