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

                            <ul className="space-y-4">
                                {groupedMenus[category].map((item) => (
                                    <li key={item._id} className="text-gray-700 font-medium flex justify-between">
                                        <span>{item.name}</span>
                                        <span className="text-orange-600 font-semibold">Rs. {item.price}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default Menu;
