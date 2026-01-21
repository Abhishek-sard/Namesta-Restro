import React from 'react';

const Menu = () => {
    const categories = [
        { name: "Starters", items: ["MoMo (Steam/Jhol)", "Chatpatey", "Samosa", "Chicken Choila"] },
        { name: "Main Course", items: ["Goat Curry", "Chicken Tikka Masala", "Dal Bhat Set", "Paneer Butter Masala"] },
        { name: "Bread & Rice", items: ["Garlic Naan", "Jeera Rice", "Chicken Biryani"] },
        { name: "Desserts", items: ["Gulab Jamun", "Kheer (Rice Pudding)", "Yogurt"] }
    ];

    return (
        <div className="pt-32 pb-20 bg-[#fdfaf5]">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 font-cursive">Our <span className="text-red-600">Menu</span></h1>
                    <p className="text-xl text-gray-600 italic">Authentic flavors from the heart of the Himalayas.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {categories.map((cat, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                            <h3 className="text-2xl font-bold mb-6 text-orange-900 border-b-2 border-orange-100 pb-2">{cat.name}</h3>
                            <ul className="space-y-4">
                                {cat.items.map((item, j) => (
                                    <li key={j} className="text-gray-700 font-medium hover:text-red-600 transition-colors cursor-pointer flex justify-between">
                                        <span>{item}</span>
                                        <span className="text-orange-300">...</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <button className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:bg-red-600 transition-all shadow-lg">
                        DOWNLOAD FULL PDF MENU
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Menu;
