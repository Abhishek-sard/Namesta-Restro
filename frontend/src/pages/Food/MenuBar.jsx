import React, { useState } from "react";

const MenuBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const menuData = {
    "ENTREE": [
      { sub: "SAMOSA (2 Pcs)", price: "$9.99" },
      { sub: "SAMOSA CHAT (with/without yogurt)", price: "$11.99 / $12.99"  },
      {sub: "VEGETABLE PAKAUDA (6 Pcs) ", price: "$9.99"},
      {sub: "AALU CHOP (4 Pcs) ", price: "$11.99"},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
      {sub: "", price: ""},
    ],
    "Main Course": [
      { sub: "Veg Thali", price: 250 },
      { sub: "Chicken Thali", price: 350 }
    ],
    "Beverages": [
      { sub: "Coke", price: 60 },
      { sub: "Lassi", price: 90 }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Categories</span>
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                  : "bg-white border border-gray-200 hover:bg-orange-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategories with Price */}
        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[selectedCategory].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:border-orange-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.sub}
                </h3>
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
                  Rs. {item.price}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default MenuBar;