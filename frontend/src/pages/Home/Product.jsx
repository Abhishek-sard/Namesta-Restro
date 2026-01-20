import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Product = () => {
  const products = [
    { id: 1, name: "Product 1", description: "This is product 1", price: "$10", image: "namesta.jpg" }, 
    { id: 2, name: "Product 2", description: "This is product 2", price: "$20", image: "namesta.jpg" },
    { id: 3, name: "Product 3", description: "This is product 3", price: "$30", image: "namesta.jpg" },
    { id: 4, name: "Product 4", description: "This is product 4", price: "$40", image: "namesta.jpg" },
    { id: 5, name: "Product 5", description: "This is product 5", price: "$50", image: "namesta.jpg" },
    { id: 6, name: "Product 6", description: "This is product 6", price: "$60", image: "namesta.jpg" },
    { id: 7, name: "Product 7", description: "This is product 7", price: "$70", image: "namesta.jpg" },
    { id: 8, name: "Product 8", description: "This is product 8", price: "$80", image: "namesta.jpg" },
    { id: 9, name: "Product 9", description: "This is product 9", price: "$90", image: "namesta.jpg" },
    { id: 10, name: "Product 10", description: "This is product 10", price: "$100", image: "namesta.jpg" },
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
      <h1 className="text-5xl font-bold text-yellow-900 mb-8 mt-12">
        Our Products
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
