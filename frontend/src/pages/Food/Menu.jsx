import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        }
    };

    // Group menu items by category
    const groupedMenus = menus.reduce((acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
    }, {});

    if (loading) {
        return <p className="text-center pt-40 text-xl">Loading menu...</p>;
    }

    return (
        <div className="pt-32 pb-20 bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-cursive">
                        Our <span className="text-red-600">Menu</span>
                    </h1>
                    <p className="text-xl text-gray-600 italic">
                        Authentic flavors from the heart of the Himalayas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {Object.keys(groupedMenus).map((category, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-orange-900 border-b-2 border-orange-100 pb-2">
                                {category}
                            </h3>

                            <div className="grid grid-cols-1 gap-6">
                                {groupedMenus[category].map((item) => (
                                    <div key={item._id} className="flex gap-4 items-center border-b border-dashed border-gray-200 pb-4 last:border-0 last:pb-0">
                                        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                                            <img
                                                src={item.image ? (item.image.startsWith('http') ? item.image : `http://localhost:5000/uploads/${item.image}`) : 'https://placehold.co/150x150?text=No+Img'}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => { e.target.src = 'https://placehold.co/150x150?text=No+Img'; }}
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <h4 className="text-lg font-bold text-gray-800">{item.name}</h4>
                                                <span className="text-orange-600 font-bold whitespace-nowrap ml-2">Rs. {item.price}</span>
                                            </div>
                                            <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Menu;
