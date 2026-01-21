import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, ChevronDown, LogOut, LayoutDashboard, Settings } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsUserMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full shadow-sm z-50 font-sans bg-[linear-gradient(110deg,#ffffff_35%,#9a3412_35%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex justify-between items-center h-24">

          {/* Left Side - Logo */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center">
              <img src="/namesta.jpg" alt="Namesta Logo" className="h-35 w-auto object-contain mt-16" />
            </Link>
          </div>

          {/* Center Navigation */}
          <div className="flex items-center space-x-8">

            {/* Auth/User Icon Section */}
            <div className="relative group">
              <button
                className="text-white hover:text-yellow-300 focus:outline-none transition-colors p-2"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                onBlur={() => setTimeout(() => setIsUserMenuOpen(false), 200)}
              >
                <User className="w-6 h-6" />
              </button>

              <div className={`absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden transition-all duration-200 ${isUserMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                {user ? (
                  <div className="py-1">
                    <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                      <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.role}</p>
                    </div>
                    {isAdmin() && (
                      <Link to="/admin" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                        <LayoutDashboard className="w-4 h-4" />
                        Admin Dashboard
                      </Link>
                    )}
                    <Link to="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">
                      <Settings className="w-4 h-4" />
                      Settings
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="py-1">
                    <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-bold">Sign In</Link>
                    <Link to="/register" className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600">Create Account</Link>
                  </div>
                )}
              </div>
            </div>

            {/* Community Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-yellow-300 font-bold text-xl py-2 transition-colors">
                Community
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2">
                  <Link to="/community/membership" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Relish Membership</Link>
                  <Link to="/community/local-matters" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Local Matters</Link>
                  <Link to="/community/careers" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Join Our Team</Link>
                  <Link to="/community/sourcing" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Australian Sourcing</Link>
                  <Link to="/community/sustainability" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-semibold">Sustainability</Link>
                </div>
              </div>
            </div>

            {/* Restaurants Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-yellow-300 font-bold text-xl py-2 transition-colors">
                Restaurants
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2">
                  <Link to="/restaurants/find" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Find a Restaurant</Link>
                  <Link to="/restaurants/bookings" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Group Bookings</Link>
                  <Link to="/about" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">About Us</Link>
                  <Link to="/news" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-semibold">News</Link>
                </div>
              </div>
            </div>

            {/* Food Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-white hover:text-yellow-300 font-bold text-xl py-2 transition-colors">
                Food
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-0 w-64 bg-white border border-gray-100 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-2">
                  <Link to="/menu" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Menu</Link>
                  <Link to="/food/catering" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Catering</Link>
                  <Link to="/food/nutrition" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 border-b border-gray-50 font-semibold">Nutrition & Allergen</Link>
                  <Link to="/food/gift-cards" className="block px-6 py-3 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-semibold">Gift Cards</Link>
                </div>
              </div>
            </div>

            {/* Order Now Button */}
            <button className="bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-3 px-8 text-lg rounded-full transition-colors shadow-sm ml-6">
              ORDER NOW
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
