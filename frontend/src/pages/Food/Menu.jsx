import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AlertCircle, Loader2, Plus } from 'lucide-react';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchMenus();
    }, []);

    const fetchMenus = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/menu');
            setMenus(res.data.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching menu:", error);
            setError("Failed to load menu. Please try again later.");
            setLoading(false);
        }
    };

    // Group menu items by category
    const groupedMenus = menus.reduce((acc, item) => {
        const category = item.category || 'Uncategorized';
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
    }, {});

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 flex flex-col items-center justify-center">
                <Loader2 className="w-16 h-16 text-orange-600 animate-spin mb-4" />
                <p className="text-2xl text-gray-700 font-semibold">Loading delicious items...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 flex flex-col items-center justify-center px-4">
                <div className="bg-white p-8 rounded-3xl border-2 border-red-200 text-center max-w-md shadow-2xl">
                    <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Oops! Something went wrong</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => { setLoading(true); setError(null); fetchMenus(); }}
                        className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:from-red-700 hover:to-orange-700 transition-all shadow-lg"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-cursive">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Menu</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 italic max-w-2xl mx-auto">
                        Authentic flavors from the heart of the Himalayas
                    </p>
                </div>

                {Object.keys(groupedMenus).length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-3xl shadow-xl border border-gray-200">
                        <p className="text-gray-400 text-2xl italic">No menu items available at the moment.</p>
                    </div>
                ) : (
                    <div className="space-y-16">
                        {Object.keys(groupedMenus).map((category, i) => (
                            <div key={i} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                                {/* Category Header */}
                                <div className="mb-8">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="flex-shrink-0 w-1.5 h-12 bg-gradient-to-b from-orange-600 to-red-600 rounded-full"></div>
                                        <h2 className="text-4xl font-bold text-gray-900">
                                            {category}
                                        </h2>
                                        <div className="flex-1 h-0.5 bg-gradient-to-r from-gray-200 to-transparent rounded-full"></div>
                                        <span className="text-lg text-gray-500 font-semibold">
                                            {groupedMenus[category].length} {groupedMenus[category].length === 1 ? 'item' : 'items'}
                                        </span>
                                    </div>
                                </div>

                                {/* Menu Items Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {groupedMenus[category].map((item) => (
                                        <div key={item._id} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200">
                                            {/* Image */}
                                            <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                                                <img
                                                    src={item.image ? (item.image.startsWith('http') ? item.image : `http://localhost:5000/uploads/${item.image}`) : 'https://placehold.co/400x300?text=No+Image'}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=No+Image'; }}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>

                                            {/* Content */}
                                            <div className="p-6">
                                                <div className="mb-3">
                                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 line-clamp-1">
                                                        {item.name}
                                                    </h3>
                                                    <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed min-h-[2.5rem]">
                                                        {item.description || "Delicious traditional dish prepared with authentic spices and fresh ingredients"}
                                                    </p>
                                                </div>

                                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                    <div className="flex items-baseline gap-1">
                                                        <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                                                            ${item.price}
                                                        </span>
                                                    </div>
                                                    <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-xl font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2">
                                                        <Plus className="w-5 h-5" />
                                                        Add
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Menu;
