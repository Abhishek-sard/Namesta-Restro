import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const CareerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Our Story', path: '/restaurants/about' },
        { name: 'Our Impact', path: '/community/sustainability' },
        { name: 'Career Journey', path: '/community/careers#journey' },
        { name: 'Our Roles', path: '/community/careers#roles' },
        { name: 'Our Community', path: '/community/local-matters' },
    ];

    // Helper to handle smooth scroll for hash links
    const handleScroll = (e, path) => {
        if (path.includes('#') && location.pathname === path.split('#')[0]) {
            e.preventDefault();
            const id = path.split('#')[1];
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
            setIsOpen(false);
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md font-sans border-b-4 border-red-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center group">
                            <img src="/namesta.jpg" alt="Namesta Logo" className="h-14 w-auto transition-transform group-hover:scale-110" />
                            <div className="ml-3 flex flex-col">
                                <span className="text-xl font-black text-gray-900 leading-none tracking-tighter">NAMASTE</span>
                                <span className="text-xs font-bold text-red-600 tracking-[0.2em] uppercase">Careers</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={(e) => handleScroll(e, link.path)}
                                className={`text-[13px] uppercase tracking-widest font-bold transition-all hover:text-red-600 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-red-600 after:transition-all hover:after:w-full ${location.pathname === link.path.split('#')[0] ? 'text-gray-900' : 'text-gray-500'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/community/careers#roles"
                            onClick={(e) => handleScroll(e, '/community/careers#roles')}
                            className="bg-neutral-900 hover:bg-red-600 text-white px-7 py-3 rounded-none text-[12px] font-black tracking-[0.15em] transition-all transform hover:-translate-y-1 shadow-lg"
                        >
                            JOIN OUR TEAM
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-900 hover:text-red-600 transition-colors p-2"
                        >
                            {isOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="px-6 py-10 space-y-6 text-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={(e) => {
                                handleScroll(e, link.path);
                                setIsOpen(false);
                            }}
                            className="block text-xl font-black text-gray-900 hover:text-red-600 transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-6">
                        <Link
                            to="/community/careers#roles"
                            onClick={(e) => {
                                handleScroll(e, '/community/careers#roles');
                                setIsOpen(false);
                            }}
                            className="inline-block w-full bg-red-600 text-white px-8 py-5 text-lg font-black tracking-widest shadow-2xl"
                        >
                            JOIN OUR TEAM
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default CareerNavbar;
