import React, { useState } from 'react';
import { Utensils, Users, Calendar, Truck } from 'lucide-react';

const Catering = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "61279008711"; // Rockdale branch number (02) 7900 8711
        const text = `*New Catering Enquiry*%0A%0A*Name:* ${formData.fullName}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="pt-24 min-h-screen bg-white text-gray-900">
            <div className="relative py-24 bg-[#9a3412] text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-cursive text-yellow-400">Catering Services</h1>
                    <p className="text-xl max-w-3xl mx-auto italic">Make your events unforgettable with the spice of Nepal. From small gatherings to grand weddings.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
                    {[
                        { icon: <Utensils />, title: "Custom Menus", desc: "Tailored to your taste and budget." },
                        { icon: <Users />, title: "Staffing", desc: "Professional servers and chefs." },
                        { icon: <Calendar />, title: "All Events", desc: "Weddings, Birthdays, Corporate." },
                        { icon: <Truck />, title: "Delivery", desc: "Fresh & hot at your doorstep." }
                    ].map((item, i) => (
                        <div key={i} className="text-center p-8 bg-[#fdfaf5] rounded-3xl border border-orange-50 shadow-sm">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 mx-auto mb-6 shadow-md">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-[#fdfaf5] p-12 rounded-[50px] border border-orange-100 flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src="/restor.jpg" alt="Catering" className="rounded-[40px] shadow-2xl" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold mb-6 italic">Enquire Now</h2>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200"
                                required
                            />
                            <textarea
                                name="message"
                                placeholder="Tell us about your event..."
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-4 rounded-xl border border-gray-200 h-32"
                                required
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors"
                            >
                                SEND ENQUIRY
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catering;
