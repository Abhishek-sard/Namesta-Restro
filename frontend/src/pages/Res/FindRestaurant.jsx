import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const FindRestaurant = () => {
    const branch = {
        name: "Rockdale",
        addr: "508 Princes Hwy, Rockdale NSW 2216",
        phone: "(02) 7900 8711",
        time: "11:30 AM - 10:00 PM"
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-20">
                <h1 className="text-5xl font-bold text-center mb-16 font-cursive">Find a <span className="text-red-600">MAP</span></h1>

                <div className="max-w-3xl mx-auto">
                    <div className="bg-[#fdfaf5] p-10 rounded-[50px] border border-orange-50 shadow-sm flex flex-col md:flex-row gap-8 hover:shadow-xl transition-shadow">
                        <div className="md:w-2/3">
                            <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden">
                                <iframe
                                    title={branch.name}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(branch.addr)}&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="md:w-1/3 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-6 text-orange-900">{branch.name}</h3>
                            <div className="space-y-4">
                                <div className="flex gap-4 text-gray-700">
                                    <MapPin className="text-red-600 flex-shrink-0" />
                                    <p>{branch.addr}</p>
                                </div>
                                <div className="flex gap-4 text-gray-700">
                                    <Phone className="text-red-600 flex-shrink-0" />
                                    <p>{branch.phone}</p>
                                </div>
                                <div className="flex gap-4 text-gray-700">
                                    <Clock className="text-red-600 flex-shrink-0" />
                                    <p>{branch.time}</p>
                                </div>
                            </div>
                            <button className="mt-8 bg-gray-900 text-white font-bold py-3 rounded-2xl hover:bg-red-600 transition-colors">BOOK A TABLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindRestaurant;
