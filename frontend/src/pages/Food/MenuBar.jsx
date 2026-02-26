import React, { useState } from "react";
import { useCart } from "../../context/CartContext.jsx";

const MenuBar = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const { addToCart, getItemQuantityInCart } = useCart();

  const menuData = {
    ENTREE: [
      {
        sub: "SAMOSA (2 Pcs)",
        price: "$9.99",
        description: "Home made pastry stuffed with potatoes, peas and spices",
      },
      {
        sub: "SAMOSA CHAT (with/without yogurt)",
        price: "$11.99 / $12.99",
        description:
          "Crushed samosas with yoghurt and sweet tamarind sauce topping",
      },
      {
        sub: "VEGETABLE PAKAUDA (6 Pcs) ",
        price: "$9.99",
        description:
          "Vegetable cake coated in spicy batter, deep fried and serve. With side of homemade spicy dipping sauce ",
      },
      {
        sub: "AALU CHOP (4 Pcs) ",
        price: "$11.99",
        description:
          "Potato cake coated with spicy batter, deep fried and served with side of homemade dipping sauce",
      },
      {
        sub: "AALU KO ACHAAR",
        price: "$9.99",
        description:
          " Marinated potatoes in garlic, ginger, mixed spices and fresh herbs ",
      },
      {
        sub: "BHATMAS SADEKO ",
        price: "9.99",
        description:
          "Fried soya bean marinated with onion, ginger, garlic, fresh herbs & mustard oil",
      },
      {
        sub: "CHATPATE/WAI WAI SADEKO",
        price: "$10.99/11.99",
        description:
          "Spicy marinated mixture of rice puff, onions, potato chilli, coriander, mix spices and fresh herbs",
      },
      {
        sub: "PANI PURI / DAHI PURI (8 Pcs)",
        price: "$9.99/$10.99",
        description:
          "Crispy fried pastry, stuffed with spicy potato mix and filled with spicy sour watery sauce",
      },
      {
        sub: "LAPHING(DRY/JHOL) (CHIPS PEANUTS $1 EXTRA) ",
        price: "$9.99/$10.50",
        description:
          " Aromatic starchy spiced roll served dry or with spicy soup ",
      },
      {
        sub: "BARA (PLAIN/EGG)",
        price: "$8.99/$10.99",
        description:
          "Black lentil pan cake with ginger, garlic, fresh herbs and spices ",
      },
      {
        sub: "CHATTAMARI",
        price: "$15.99",
        description:
          "Traditional pan cake made of rice four, garlic, ginger, onion, spices, fresh herbs and topped with egg and chicken served with spicy dipping sauce",
      },
      {
        sub: "CHIPS CHILLI ",
        price: "$12.99",
        description:
          "Crispy fried potato chips tossed with garlic, ginger, onions, coriander, Capsicum and homemade chilli sauce",
      },
      {
        sub: "PEERO AALU, MUSTANG AALU",
        price: "$12.99",
        description: "Spicy Potato, Cumin Potato, Sitchuan Pepper Potato ",
      },
      {
        sub: "PANEER CHILLI",
        price: "$15.99",
        description:
          "Pan fried cottage cheese cubes with garlic, ginger, onions, coriander, Capsicum and homemade chilli sauce. ",
      },
      {
        sub: "CHICKEN CHILLI",
        price: "$15.99",
        description:
          " Boneless chicken pieces fried and tossed with garlic, ginger, onions, coriander, Capsicum and homemade chilli sauce",
      },
      {
        sub: "BUFF CHILLI",
        price: "$17.99",
        description:
          "Tender buffalo meat pieces tossed with garlic, ginger, onions, coriander, Capsicum, homemade chilli sauce & fresh herbs",
      },
      {
        sub: "CHICKEN CHHOYLA/SET",
        price: "$15.99/$18.99",
        description:
          "Boneless chicken pieces cooked over tandoor, marinated with garlic, ginger, onions, Nepalese spices, fresh herbs & mustard oil, served cold.",
      },
      {
        sub: "CHICKEN SEKUWA/SET",
        price: "$15.99/$18.99",
        description: "Marinated chicken pieces cooked over tandoor",
      },
      {
        sub: "LAMB SEKUWA/SET",
        price: "$15.99/$19.99",
        description:
          "Marinated boneless tender lamb pieces cooked over tandoor",
      },
      {
        sub: "PORK SEKUWA/SET",
        price: "$15.99/$18.99",
        description: "Marinated boneless pork pieces cooked over tandoor",
      },
      {
        sub: "BHUTTAN/SET",
        price: "$15.99/$19.99",
        description:
          "Pan fried goat intestine, with garlic, ginger onion & fresh herbs",
      },
      {
        sub: "BUFF SUKUTI/SET",
        price: "$18.99/$22.99",
        description:
          "Buff dry meat served with soya bean, rice flakes potato pickle   green salad",
      },
      {
        sub: "SAUSAGE FRY ",
        price: " $10.99",
        description:
          " Crispy fried chicken sausages served with spicy dipping sauce",
      },
      {
        sub: "TIMMUR CHICKEN ",
        price: "$15.99",
        description:
          "Boneless Chicken, santed in nepalese spices and sichuan pepper",
      },
      {
        sub: "NEWARI KHAJA SET(VEG, CHICKEN, BUFF)",
        price: "$19.99/$21.99",
        description: "",
      },
      {
        sub: "MIX PLATTER ",
        price: " $29.99",
        description:
          "Mix plate of Chicken Sausage, vegetable pakauda, bara, chicken chhoyla, lamb chhoyla, bhatmas sadeko, aalu ko achar Served with side of homemade dipping sauce.",
      },

      {
        sub: "VEGETARIAN PLATTER ",
        price: "$24.99",
        description:
          "Mix Plate of pakauda, bhatmas, aalu achar, bara, aalu chop, samosa served with homemade dipping sauce",
      },
      {
        sub: " SUBHAKAMANA SPECIALMOMO CHOWMEIN COMBO",
        price: "$15.99",
        description:
          "4 steam chicken mo:mo: Bara, chattamari, marinated soya bean, lamb or chicken chhoyla and fresh potato pickle served with homemade spicy dipping sauce.",
      },
      {
        sub: "NEWARI KHAJA SET(VEG, CHICKEN, BUFF) ",
        price: "$19.99/$21.99",
        description:
          " Traditional mix plate of bara, rice flakes, soya bean, potato pickle, potato and bamboo shoot curry,  green veg, homemade spicy dipping sauce and choice of chicken,lamb or without chhoyla",
      },
    ],
    "MAINS: momo": [
      {
        sub: "STEAM MO:MO",
        description: "VEG: $12.99| CHICKEN: $12.99 | BUFF: $14.99",
      },
      {
        sub: "FRIED MO:MO",
        description: "VEG: $14.99| CHICKEN: $14.99 | BUFF: $16.99",
      },
      {
        sub: "CHILLI MO:MO",
        description: "VEG: $15.99 | CHICKEN: $15.99| BUFF: $17.99",
      },
      {
        sub: "KOTHEY MO:MO",
        description: "VEG: $15.99 | CHICKEN: $15.99| BUFF: $16.99",
      },
      {
        sub: "JHOL MO:MO",
        description: "VEG: $15.99 | CHICKEN: $15.99| BUFF: $16.99",
      },
      {
        sub: "SADEKO MO:MO",
        description: "VEG: $15.99 | CHICKEN: $15.99| BUFF: $17.99",
      },
      {
        sub: "MO: MO: PLATTER (15 PCS, STEAM, FRIED & CHILLI)",
        description: "VEG: $24.99 | CHICKEN: $24.99| BUFF: $26.99",
      },
      {
        sub: "MO: MO: PLATTER (20 PCS, STEAM, KOTHEY, FRIED & CHILLI)",
        description: "VEG: $35.99 | CHICKEN: $35.99| BUFF: $37.99",
      },
    ],
    CHOWMEIN: [
      { sub: "VEG CHOWMEIN ", price: "$14.99" },
      { sub: "CHICKEN/EGG CHOWMEIN ", price: "$15.99" },
      { sub: "BUFF CHOWMEIN ", price: "$16.99" },
      { sub: "MIX CHOWMEIN (CHICHEN, EGG, BUFF)  ", price: "$17.99" },
    ],
    THUKPA: [
      { sub: "VEG THUKPA ", price: "$14.99" },
      { sub: "CHICKEN/EGG THUKPA ", price: "$16.99" },
      { sub: "BUFF THUKPA ", price: "$17.99" },
      { sub: "MIX THUKPA (CHICHEN, EGG)  ", price: "$18.99" },
      { sub: "MO:MO THUKPA (VEG/CHICKEN/BUFF) ", price: "$21/$22/$23" },
    ],
    THALI: [
      {
        sub: "THAKALI THALI ",
        price: "VEG $24.99 | CHICKEN $24.99|GOAT $24.99 | FISH $24.99 ",
        description:
          "THAKALI THALI\nPlain rice, black lentil soup, green vegetable, mix pickle, papadams, side of sweet yoghurt and ghee with your choice \nof curry served with desert.",
      },
      {
        sub: "NEPALI THALI ",
        price: "VEG $19.99 |GOAT $19.99 | CHICKEN $19.99FISH $19.99 ",
        description:
          " Rice, daal, green leaves, mix pickle, sweet yoghurt and choice of curry.",
      },
      {
        sub: "DHINDO THALI SET (limited available) ",
        price: "VEG $27.99 | GOAT $27.99  | CHICKEN $27.99 | FISH $28.99",
      },
    ],
    CURRY: [
      {
        sub: " DAAL",
        price: "$12.99",
        description:
          "Black lentil soup with Nepalese style herbs and aromatic spices.",
      },
      {
        sub: "AALU TAMA ",
        price: "$14.99",
        description:
          "Potato, bamboo shoot and blackeyed bean cooked with Nepalese style aromatic herbs and spices",
      },
      {
        sub: "AALU BHENTA / AALU CAULI  ",
        price: "$14.99",
        description:
          "Vegetable curry with potato and eggplant cooked in Nepalese style aromatic blend of spices",
      },
      {
        sub: "HARIYO SAAG ",
        price: "$9.99",
        description: "Green vegetable leaf tossed in pan with light seasoning ",
      },
      {
        sub: "CHICKEN CURRY ",
        price: "$15.99",
        description:
          "Chicken with bone cooked in Nepalese style tomato and onion based rich curry sauce with fresh herbs and spices",
      },
      {
        sub: "GOAT CURY ",
        price: "$16.99",
        description:
          "Goat meat pieces with bone cooked in Nepalese style tomato and onion based rich curry sauce with fresh herbs and spices",
      },
      {
        sub: "MATAR PANEER",
        price: "$16.99",
        description:
          "Cottage cheese cubes & green peas cooked in rich blend of aromatic curry sauce finished with touch of cream",
      },
      {
        sub: "BUTTER CHICKEN  ",
        price: "$18.99",
        description:
          "Boneless chicken cooked in aromatic rich blend of curry sauce and finished with cashew nuts and touch of cream",
      },
      {
        sub: "FISH CURRY",
        price: "$18.99",
        description:
          "Boneless fish pieces cooked through Nepalese style tomato and onion based rich curry sauce with fresh herbs and spices",
      },
    ],
    FRIES: [
      { sub: "VEGETABLE FRIED RICE", price: "$14.99" },
      { sub: "EGG FRIED RICE ", price: "$15.99" },
      { sub: "CHICKEN FREID RICE ", price: "$15.99" },
      { sub: "MIX FRIED RICE (EGG & CHICKEN) ", price: "$17.99" },
    ],
    BIRYANI: [
      { sub: "VEGETABLE BIRYANI ", price: "$15.99" },
      { sub: "GOAT BIRYANI ", price: "$17.99" },
      { sub: "CHICKEN BIRYANI ", price: "$16.99" },
    ],
    NAAN: [
      { sub: "PLAIN NAAN ", price: "$4.99" },
      { sub: "GARLIC NAAN ", price: "$5.99" },
      { sub: "GARLIC NAAN ", price: "$5.99" },
      { sub: "GARLIC BUTTER NAAN ", price: "$5.99" },
    ],
    EXTRAS: [
      { sub: "MOMO ACHAR/ CHILLI SAUCE ", price: "$2.00" },
      { sub: "MOMO JHOL ", price: "$2.99" },
      { sub: " THALI-ACHAR,SAAG,YOGHURT", price: "$3.00" },
      { sub: "THALI-CURRY ", price: "$6.00" },
    ],
    SIDES: [
      { sub: "PLAIN RICE ", price: "$4.99" },
      { sub: "RICE FLAKES ", price: "$3.99" },
      { sub: "SWEET YOGHURT ", price: "$5.99" },
      { sub: "MANGO PICKLE ", price: "$2.99" },
      { sub: "OMELETTE ", price: "$9.99" },
    ],
    SALADS: [
      {
        sub: "CUCUMBER AND CARROTS ",
        price: "$8.99",
        description:
          "Cucumber and carrots marinated in nepalese style spicy dressing",
      },
    ],
    "KIDS MENU": [
      { sub: "KIDS NUGGETS AND CHIPS ", price: "$9.99" },
      { sub: "CHIPS ", price: "$6.99" },
    ],
    SWEETS: [
      {
        sub: "RASBARI(2 pcs) ",
        price: "$5.99",
        description: "RASBARI (2pcs) Soft cottage cheese balls in sugar syrup",
      },
      {
        sub: "GULAB JAMUN ",
        price: "$6.99",
        description: "Sweet milky solid balls in sugar syrup and yoghurt",
      },
      {
        sub: "RASMALAI ",
        price: "$9.99",
        description:
          "Soft cottage cheese solids in rich aromatic sweet milky syrup",
      },
    ],
    "SOFT DRINKS": [
      { sub: "COKE, FANTA, SPRITE, LEMONADE ", price: "$4.50" },
      { sub: " JUICE (apple, orange, mango)  ", price: "$4.99" },
      { sub: " LASSI (Plain or mango) ", price: "$5.99" },
      { sub: "LASSI (banana, strawberry)", price: "$7.99" },
      { sub: "TEA (Milk tea, black tea, lemon tea)", price: "$4.99" },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl font-bold text-center mb-12">
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
            SUBHAKAMANA RESTAURANT & CATERING SERVICES
          </span>
        </h1>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all shadow-md ${selectedCategory === category
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                  : "bg-yellow-600 border border-gray-200 hover:bg-orange-100"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategories with Price */}
        {selectedCategory && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData[selectedCategory].map((item, index) => {
              const quantityInCart = getItemQuantityInCart(item.sub);
              return (
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
                  {item.description && (
                    <p className="mt-2 text-gray-600 text-sm">
                      {item.description}
                    </p>
                  )}
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => addToCart({
                        ...item,
                        _id: item._id || item.sub // use name as fallback id
                      })}
                      className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all shadow-md"
                    >
                      Add to cart
                    </button>
                    {quantityInCart > 0 && (
                      <span className="text-sm text-gray-700">
                        {quantityInCart} in cart
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuBar;
