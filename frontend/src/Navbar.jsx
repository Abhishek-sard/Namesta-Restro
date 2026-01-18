import React, { useState } from 'react';
import { User, ChevronDown } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Left Side - Logo */}
          <div className="flex-1 flex justify-start">
            <a href="/" className="flex items-center">
              {/* Placeholder for Logo - You can replace text with <img /> */}
              <span className="text-2xl font-bold text-gray-900 tracking-tight">
                NAMESTA<span className="text-orange-500">.</span>
              </span>
            </a>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">

            {/* Admin Icon */}
            <button className="text-gray-600 hover:text-orange-500 focus:outline-none transition-colors">
              <User className="w-6 h-6" />
            </button>

            {/* Community Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors">
                Community
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-56 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Relish Membership</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Local Matters</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Join Our Team</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Australian Sourcing</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Sustainability</a>
                </div>
              </div>
            </div>

            {/* Restaurants Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors">
                Restaurants
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Find a Restaurant</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Group Bookings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">About Us</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">News</a>
                </div>
              </div>
            </div>

            {/* Food Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-orange-500 font-medium py-2 transition-colors">
                Food
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-48 bg-white border border-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Menu</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Catering</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Nutrition</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Allergen Information</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Gift Cards</a>
                </div>
              </div>
            </div>

            {/* Order Now Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-sm">
              ORDER NOW
            </button>

          </div>

          {/* Right Side - Empty for balance */}
          <div className="flex-1"></div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
