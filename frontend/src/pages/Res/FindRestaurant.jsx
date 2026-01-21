import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const FindRestaurant = () => {
    const branches = [
        { name: "Sydney City (CBD)", addr: "2a/307 Pitt St, Sydney NSW 2000", phone: "02 8957 4165", time: "11:30 AM - 10:00 PM" },
        { name: "Parramatta", addr: "Near Church St, Parramatta NSW 2150", phone: "02 9635 1234", time: "12:00 PM - 10:00 PM" }
    ];

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h1 className="text-5xl font-bold text-center mb-16 font-cursive">Find a <span className="text-red-600">Restaurant</span></h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {branches.map((b, i) => (
                        <div key={i} className="bg-[#fdfaf5] p-10 rounded-[50px] border border-orange-50 shadow-sm flex flex-col md:flex-row gap-8 hover:shadow-xl transition-shadow">
                            <div className="md:w-1/2">
                                <div className="w-full h-64 bg-gray-200 rounded-3xl overflow-hidden">
                                    <iframe
                                        title={b.name}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(b.addr)}`}
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-6 text-orange-900">{b.name}</h3>
                                <div className="space-y-4">
                                    <div className="flex gap-4 text-gray-700">
                                        <MapPin className="text-red-600 flex-shrink-0" />
                                        <p>{b.addr}</p>
                                    </div>
                                    <div className="flex gap-4 text-gray-700">
                                        <Phone className="text-red-600 flex-shrink-0" />
                                        <p>{b.phone}</p>
                                    </div>
                                    <div className="flex gap-4 text-gray-700">
                                        <Clock className="text-red-600 flex-shrink-0" />
                                        <p>{b.time}</p>
                                    </div>
                                </div>
                                <button className="mt-8 bg-gray-900 text-white font-bold py-3 rounded-2xl hover:bg-red-600 transition-colors">BOOK A TABLE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FindRestaurant;
