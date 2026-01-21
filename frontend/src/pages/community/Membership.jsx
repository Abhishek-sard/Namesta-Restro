import React from 'react';
import { Gift, Star, Clock, ArrowRight } from 'lucide-react';

const Membership = () => {
    return (
        <div className="pt-24 min-h-screen bg-[#fdfaf5]">
            {/* Hero Section */}
            <div className="relative py-32 bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/groupworker.jpg')] bg-cover bg-fixed bg-center text-white text-center">
                <div className="max-w-4xl mx-auto px-4 relative z-10">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 inline-block">The Inner Circle</span>
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 font-cursive">Namaste <span className="text-yellow-400">Relish</span></h1>
                    <p className="text-xl md:text-2xl mb-10 italic text-gray-200">More than just a loyalty program. It's a journey through the heart of Nepal.</p>

                </div>
            </div>

            {/* How It Works */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 uppercase tracking-tighter">How It Works</h2>
                        <p className="text-gray-500 text-lg">Simple steps to start earning your rewards.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {[
                            { step: "01", title: "Join", desc: "Sign up in seconds online or via our app." },
                            { step: "02", title: "Eat", desc: "Enjoy your favorite dishes at any location." },
                            { step: "03", title: "Earn", desc: "Collect 10 points for every $1 spent." },
                            { step: "04", title: "Relish", desc: "Redeem points for free food & perks." }
                        ].map((s, idx) => (
                            <div key={idx} className="relative group p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:bg-red-50/30 transition-all">
                                <span className="text-6xl font-black text-gray-100 group-hover:text-red-100 transition-colors absolute top-4 right-8">{s.step}</span>
                                <h3 className="text-2xl font-bold mb-4 relative z-10 text-gray-900">{s.title}</h3>
                                <p className="text-gray-600 relative z-10">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Exclusive Tiers */}
            <div className="py-24 bg-neutral-900 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase italic font-cursive text-yellow-500">The Membership Tiers</h2>
                        <p className="text-gray-400">The more you relish, the more you earn.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Silver Tier */}
                        <div className="bg-neutral-800 p-10 rounded-[40px] border border-neutral-700 hover:scale-105 transition-transform">
                            <h3 className="text-3xl font-bold mb-2">Silver</h3>
                            <p className="text-yellow-500 font-bold mb-8">0 - 500 Points</p>
                            <ul className="space-y-4 text-gray-400 mb-10">
                                <li className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> Free Birthday Dessert</li>
                                <li className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> 10 Points per $1</li>
                                <li className="flex items-center gap-2"><Star size={16} className="text-yellow-500" /> Member Only News</li>
                            </ul>
                            <div className="text-sm italic text-gray-500">Entry level membership</div>
                        </div>

                        {/* Gold Tier */}
                        <div className="bg-neutral-800 p-10 rounded-[40px] border-4 border-yellow-500 relative transform md:-translate-y-4 shadow-2xl shadow-yellow-500/10">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black px-6 py-2 rounded-full font-black text-sm uppercase">Most Popular</div>
                            <h3 className="text-3xl font-bold mb-2">Gold</h3>
                            <p className="text-yellow-500 font-bold mb-8">501 - 2,500 Points</p>
                            <ul className="space-y-4 text-gray-100 mb-10">
                                <li className="flex items-center gap-2"><Star size={16} className="fill-yellow-500 text-yellow-500" /> 15 Points per $1</li>
                                <li className="flex items-center gap-2"><Star size={16} className="fill-yellow-500 text-yellow-500" /> Priority Reservations</li>
                                <li className="flex items-center gap-2"><Star size={16} className="fill-yellow-500 text-yellow-500" /> Free Birthday Meal</li>
                                <li className="flex items-center gap-2"><Star size={16} className="fill-yellow-500 text-yellow-500" /> Invitation to Tastings</li>
                            </ul>
                            <button className="w-full bg-yellow-500 text-black py-4 rounded-2xl font-black">UPGRADE PERKS</button>
                        </div>

                        {/* Platinum Tier */}
                        <div className="bg-neutral-800 p-10 rounded-[40px] border border-neutral-700 hover:scale-105 transition-transform">
                            <h3 className="text-3xl font-bold mb-2 text-gray-200">Platinum</h3>
                            <p className="text-gray-400 font-bold mb-8">2,501+ Points</p>
                            <ul className="space-y-4 text-gray-400 mb-10">
                                <li className="flex items-center gap-2"><Star size={16} className="text-gray-200" /> 20 Points per $1</li>
                                <li className="flex items-center gap-2"><Star size={16} className="text-gray-200" /> Private Chef Table Access</li>
                                <li className="flex items-center gap-2"><Star size={16} className="text-gray-200" /> VIP Event Access</li>
                                <li className="flex items-center gap-2"><Star size={16} className="text-gray-200" /> Dedicated Account Manager</li>
                            </ul>
                            <div className="text-sm italic text-gray-500">The ultimate experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* App Promotion */}
            <div className="py-24 bg-red-600 text-white">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-5xl font-black mb-6 leading-tight uppercase">Rewards in the <br /><span className="text-gray-900 italic font-cursive">Palm of Your Hand</span></h2>
                        <p className="text-xl mb-10 text-red-100">Download the Namaste App to track your points, book tables instantly, and unlock app-only secret menu items.</p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <div className="bg-black p-4 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-neutral-900 transition-colors">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">A</div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">Download on the</p>
                                    <p className="text-lg font-bold">App Store</p>
                                </div>
                            </div>
                            <div className="bg-black p-4 rounded-xl flex items-center gap-3 cursor-pointer hover:bg-neutral-900 transition-colors">
                                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">G</div>
                                <div>
                                    <p className="text-[10px] uppercase font-bold text-gray-400">Get it on</p>
                                    <p className="text-lg font-bold">Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="w-64 h-[500px] bg-neutral-900 rounded-[3rem] border-8 border-neutral-800 shadow-2xl mx-auto relative overflow-hidden">
                            <div className="p-6">
                                <div className="w-12 h-12 bg-red-600 rounded-lg mb-8"></div>
                                <div className="space-y-4">
                                    <div className="w-full h-32 bg-neutral-800 rounded-2xl"></div>
                                    <div className="w-3/4 h-4 bg-neutral-800 rounded-full"></div>
                                    <div className="w-full h-4 bg-neutral-800 rounded-full"></div>
                                    <div className="w-1/2 h-4 bg-neutral-800 rounded-full"></div>
                                </div>
                            </div>
                            <div className="absolute bottom-10 left-0 right-0 px-6">
                                <div className="w-full h-12 bg-yellow-500 rounded-xl"></div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 bg-yellow-400 text-black p-6 rounded-full font-black -rotate-12 shadow-xl">500 PTS FREE</div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-24 bg-[#fdfaf5]">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-4xl font-black text-center mb-16 uppercase">Membership FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Does it cost to join?", a: "No, joining Namaste Relish is completely free. You can sign up through our website or by downloading our app." },
                            { q: "How do I redeem my points?", a: "Points can be redeemed at the checkout in any of our restaurants or directly through the app for digital vouchers." },
                            { q: "Do my points expire?", a: "Points are valid for 12 months from the date of your last visit. As long as you dine with us once a year, your points stay active." },
                            { q: "Can I use points for delivery?", a: "Currently, points can only be earned and redeemed for dine-in and pickup orders through our official channels." }
                        ].map((faq, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h4 className="text-xl font-bold mb-3 text-red-700">{faq.q}</h4>
                                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-white py-20">
                <div className="max-w-5xl mx-auto px-4 rounded-[40px] bg-[#9a3412] p-16 text-white text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/namesta.jpg')] opacity-10 bg-cover bg-center"></div>
                    <div className="relative z-10">
                        <h2 className="text-5xl font-black mb-6 uppercase italic font-cursive">Start Your Relish Journey</h2>
                        <p className="text-orange-100 text-xl mb-12 max-w-2xl mx-auto">Sign up now and get a complimentary plate of MoMos on your next visit.</p>
                        <button className="bg-yellow-400 text-black font-black py-5 px-16 rounded-full text-xl hover:bg-white transition-all transform hover:scale-105 shadow-xl">
                            SIGN UP FOR FREE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Membership;
