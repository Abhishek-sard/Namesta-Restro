import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const TikTok = ({ className }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
    >
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 1 0 1-7.6 6.83 6.83 0 0 0 3-1.11z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-orange-900 text-white font-sans pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* 1. Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">NAMESTA<span className="text-orange-500">.</span></h3>
                        <p className="text-white mb-6 leading-relaxed">
                            Experience the authentic taste of tradition. We bring you the finest culinary delights with a modern twist.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.facebook.com/share/17zas2D5Rf/" className="text-white hover:text-orange-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>

                            <a href="https://www.instagram.com/namasterestrosydney?igsh=ODF6cWlyZXBhMm95" className="text-white hover:text-orange-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="https://www.tiktok.com/@namastenepalirestaurant1?_r=1&_t=ZS-939GzdnR11j" className="text-white hover:text-orange-500 transition-colors">
                                <TikTok className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/" className="text-white hover:text-orange-500 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-white hover:text-orange-500 transition-colors">About Us</Link></li>
                            <li><Link to="/menu" className="text-white hover:text-orange-500 transition-colors">Our Menu</Link></li>
                            <li><a href="#" className="text-white hover:text-white transition-colors">Reservations</a></li>
                            <li><Link to="/contact" className="text-white hover:text-orange-500 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* 3. Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 text-white">
                                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                                <span>Ramdhuni-1, Sunsari Nepal</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white">
                                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                                <span>+61 420 253 134</span>
                            </li>
                            <li className="flex items-center space-x-3 text-white">
                                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                                <span>info@namasterestro.com.au</span>
                            </li>
                        </ul>
                    </div>

                    {/* 4. Newsletter */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 text-white">Newsletter</h4>
                        <p className="text-white mb-4">Subscribe to our newsletter for the latest updates and offers.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white text-gray-600 border border-gray-700 rounded-lg py-3 px-4 focus:outline-none focus:border-orange-500 transition-colors"
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
                <div className="border-t border-white mt-16 pt-8 text-center text-white text-sm">
                    <p>&copy; {new Date().getFullYear()} Namesta Restro. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
