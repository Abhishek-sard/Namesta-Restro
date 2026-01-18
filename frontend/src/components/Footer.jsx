import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const TikTok = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white font-sans pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* 1. Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">NAMESTA<span className="text-orange-500">.</span></h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Experience the authentic taste of tradition. We bring you the finest culinary delights with a modern twist.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/17zas2D5Rf/" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a href="https://www.instagram.com/namasterestrosydney?igsh=ODF6cWlyZXBhMm95" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@namastenepalirestaurant1?_r=1&_t=ZS-939GzdnR11j" className="text-gray-400 hover:text-orange-500 transition-colors">
                                <TikTok className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-500">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Our Menu</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Reservations</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-500">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-gray-400">
                                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                                <span>Ramdhuni-1, sunsari Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>+61 420 253 134</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span>nfo@namasterestro.com.au</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-orange-500">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-gray-800 text-white border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-orange-500 transition-colors"
                            />
                            <button
                                type="button"
                                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Namesta Restro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
