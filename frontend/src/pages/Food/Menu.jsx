import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AlertCircle, Loader2 } from 'lucide-react';

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
            <div className="min-h-screen bg-[#fdfaf5] pt-32 flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 text-orange-600 animate-spin mb-4" />
                <p className="text-xl text-gray-600 font-medium">Loading delicious items...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#fdfaf5] pt-32 flex flex-col items-center justify-center px-4">
                <div className="bg-red-50 p-6 rounded-3xl border border-red-100 text-center max-w-md">
                    <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h3>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => { setLoading(true); setError(null); fetchMenus(); }}
                        className="bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-20 bg-[#fdfaf5] min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-cursive">
                        Our <span className="text-red-600">Menu</span>
                    </h1>
                    <p className="text-xl text-gray-600 italic">
                        Authentic flavors from the heart of the Himalayas.
                    </p>
                </div>

                {Object.keys(groupedMenus).length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <p className="text-gray-400 text-xl italic">No menu items available at the moment.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {Object.keys(groupedMenus).map((category, i) => (
                            <div key={i} className="bg-white p-6 rounded-[2rem] shadow-xl shadow-orange-50/50 border border-gray-100 hover:shadow-2xl hover:shadow-orange-100/50 transition-all duration-300">
                                <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-orange-600 rounded-full"></span>
                                    {category}
                                </h3>

                                <div className="space-y-6">
                                    {groupedMenus[category].map((item) => (
                                        <div key={item._id} className="group flex gap-4 items-start p-3 rounded-2xl hover:bg-orange-50/50 transition-colors">
                                            <div className="w-24 h-24 flex-shrink-0 bg-gray-100 rounded-2xl overflow-hidden shadow-sm">
                                                <img
                                                    src={item.image ? (item.image.startsWith('http') ? item.image : `http://localhost:5000/uploads/${item.image}`) : 'https://placehold.co/150x150?text=No+Img'}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    onError={(e) => { e.target.src = 'https://placehold.co/150x150?text=No+Img'; }}
                                                />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-start gap-2 mb-1">
                                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-700 transition-colors leading-tight">
                                                        {item.name}
                                                    </h4>
                                                    <span className="text-orange-600 font-black whitespace-nowrap bg-orange-50 px-2 py-1 rounded-lg text-sm">
                                                        ${item.price}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                                                    {item.description || "No description available."}
                                                </p>
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
