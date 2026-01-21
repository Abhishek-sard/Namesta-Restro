import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Product = () => {
  const products = [
    { id: 1, name: "Steamed Momo", description: "Authentic Nepali steamed dumplings with spicy tomato chutney.", price: "$12.99", image: "/momo.png" },
    { id: 2, name: "Dal Bhat Tarkari", description: "The soul of Nepali cuisine - rice, lentils, and seasonal vegetable curry.", price: "$18.50", image: "/dalbhat.png" },
    { id: 3, name: "Himalayan Thukpa", description: "Hearty Tibetan-style noodle soup with fresh vegetables and aromatic spices.", price: "$14.99", image: "/thukpa.png" },
    { id: 4, name: "Nepali Chow Mein", description: "Spicy stir-fried noodles with crisp vegetables and traditional Nepali zest.", price: "$13.50", image: "/chowmein.png" },
    { id: 5, name: "Mutton Sekuwa", description: "Traditionally grilled spiced mutton, smoky and tender.", price: "$16.99", image: "/sekuwa.png" },
    { id: 6, name: "Garlic Butter Naan", description: "Freshly baked clay-oven bread brushed with garlic butter.", price: "$4.50", image: "/naan.png" },
  ];

  const itemsPerPage = 4;
  const [index, setIndex] = useState(0);

  const next = () => {
    if (index + itemsPerPage < products.length) {
      setIndex(index + itemsPerPage);
    }
  };

  const prev = () => {
    if (index - itemsPerPage >= 0) {
      setIndex(index - itemsPerPage);
    }
  };

  return (
    <div className="bg-teal-50 min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-yellow-900 mb-8 mt-12 font-cursive">
        OUR GALLERY
      </h1>

      <div className="relative w-full max-w-6xl">
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(index, index + itemsPerPage).map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded-t-xl"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-500 text-sm">{product.description}</p>
                <p className="text-yellow-900 font-bold mt-2">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prev}
            disabled={index === 0}
            className="p-3 bg-black rounded-full shadow hover:bg-gray-900 disabled:opacity-40"
          >
            <ChevronLeft />
          </button>


          <button className="px-8 py-4 bg-yellow-900 text-white rounded-lg shadow hover:bg-yellow-300 mt-6">
            View Menu
          </button>

          <button
            onClick={next}
            disabled={index + itemsPerPage >= products.length}
            className="p-3 bg-black rounded-full shadow hover:bg-gray-900 disabled:opacity-40"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
