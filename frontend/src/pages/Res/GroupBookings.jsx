import React from 'react';
import { Users, PartyPopper, Music, Camera } from 'lucide-react';

const GroupBookings = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="py-20 bg-[#9a3412] text-white text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cursive text-yellow-400">Group <span className="text-white">Bookings</span></h1>
                <p className="text-xl italic max-w-2xl mx-auto">Planning a big event? Whether it's a birthday, corporate dinner, or family reunion, we've got the space for you.</p>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-10">Why celebrate with us?</h2>
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <PartyPopper className="text-red-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Dedicated Event Planner</h4>
                                    <p className="text-gray-600">We help you organize every detail from seating to special menus.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <Users className="text-blue-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Capacity for 50+ Guests</h4>
                                    <p className="text-gray-600">Flexible seating arrangements to accommodate large groups comfortably.</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <Music className="text-orange-600 flex-shrink-0" size={32} />
                                <div>
                                    <h4 className="font-bold text-xl mb-2">Live Music Options</h4>
                                    <p className="text-gray-600">Available upon request for private weekend bookings.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#fdfaf5] p-12 rounded-[60px] border border-orange-50 shadow-xl">
                        <h3 className="text-2xl font-bold mb-8 italic">Booking Enquiry</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="w-full p-4 rounded-xl border border-gray-200" />
                                <input type="number" placeholder="Guest Count" className="w-full p-4 rounded-xl border border-gray-200" />
                            </div>
                            <input type="text" placeholder="Date & Time" className="w-full p-4 rounded-xl border border-gray-200" />
                            <textarea placeholder="Special Requests (Cakes, Flowers, etc.)" className="w-full p-4 rounded-xl border border-gray-200 h-32"></textarea>
                            <button className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg">CHECK AVAILABILITY</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GroupBookings;
