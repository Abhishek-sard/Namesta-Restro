import React, { useEffect, useState } from "react";
import axios from "axios";
import { AlertCircle, Loader2, Plus } from "lucide-react";
import { API_URL, UPLOADS_URL } from "../../config";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const res = await axios.get(`${API_URL}/menu`);
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
    const category = item.category || "Uncategorized";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 flex flex-col items-center justify-center">
        <Loader2 className="w-12 h-12 text-orange-600 animate-spin mb-4" />
        <p className="text-xl text-gray-700 font-semibold">
          Loading delicious items...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 flex flex-col items-center justify-center px-4">
        <div className="bg-white p-6 rounded-2xl border border-red-200 text-center max-w-sm shadow-lg">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Oops! Something went wrong
          </h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => {
              setLoading(true);
              setError(null);
              fetchMenus();
            }}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all shadow-md"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16 bg-gradient-to-br from-orange-50 via-white to-red-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Menu
            </span>
          </h1>
          <p className="text-lg text-gray-600 italic max-w-xl mx-auto">
            Authentic flavors from the heart of the Himalayas
          </p>
        </div>

        {Object.keys(groupedMenus).length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-md border border-gray-200">
            <p className="text-gray-400 text-lg italic">
              No menu items available at the moment.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.keys(groupedMenus).map((category, i) => (
              <div key={i}>

                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-orange-600 to-red-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category}
                  </h2>
                  <span className="text-sm text-gray-500 font-medium">
                    ({groupedMenus[category].length})
                  </span>
                </div>

                {/* Compact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                  {groupedMenus[category].map((item) => (
                    <div
                      key={item._id}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-100"
                    >

                      {/* Image */}
                      <div className="relative h-32 bg-gray-100 overflow-hidden">
                        <img
                          src={
                            item.image
                              ? item.image.startsWith("http")
                                ? item.image
                                : `${UPLOADS_URL}/${item.image}`
                              : "https://placehold.co/400x300?text=No+Image"
                          }
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/400x300?text=No+Image";
                          }}
                        />
                      </div>

                      {/* Content */}
                      <div className="p-3">
                        <h3 className="text-base font-semibold text-gray-900 group-hover:text-orange-600 line-clamp-1">
                          {item.name}
                        </h3>

                        <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                          {item.description ||
                            "Delicious traditional dish prepared with authentic spices"}
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <span className="text-lg font-bold text-orange-600">
                            ${item.price}
                          </span>


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