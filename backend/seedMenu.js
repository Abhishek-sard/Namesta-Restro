
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Menu from './models/Menu.js';

dotenv.config({ path: './backend/.env' });

console.log('MONGO_URI:', process.env.MONGO_URI ? 'Defined' : 'Undefined');

const menuItems = [
    // STARTERS
    { name: 'SAMOSA (2 pcs)', category: 'Starters', price: 9.99, description: 'Home made pastry stuffed with potatoes, peas and spices' },
    { name: 'SAMOSA CHAT (WITHOUT YOGURT)', category: 'Starters', price: 11.99, description: 'Crushed samosas with sweet tamarind sauce topping' },
    { name: 'SAMOSA CHAT (WITH YOGURT)', category: 'Starters', price: 12.99, description: 'Crushed samosas with yoghurt and sweet tamarind sauce topping' },
    { name: 'VEGETABLE PAKAUDA (6 Pcs)', category: 'Starters', price: 9.99, description: 'Vegetable cake coated in spicy batter, deep fried and serve with side of homemade spicy dipping sauce' },
    { name: 'AALU CHOP (4 Pcs)', category: 'Starters', price: 11.99, description: 'Potato cake coated with spicy batter, deep fried and served with side of homemade dipping sauce' },
    { name: 'AALU KO ACHAAR', category: 'Starters', price: 9.99, description: 'Marinated potatoes in garlic, ginger, mixed spices and fresh herbs' },
    { name: 'BHATMAS SADEKO', category: 'Starters', price: 9.99, description: 'Fried soya bean marinated with onion, ginger, garlic, fresh herbs & mustard oil' },
    { name: 'CHATPATE', category: 'Starters', price: 10.99, description: 'Spicy marinated mixture of rice puff, onions, potato chilli, coriander, mix spices and fresh herbs' },
    { name: 'WAI WAI SADEKO', category: 'Starters', price: 11.99, description: 'Spicy marinated mixture of Wai Wai, onions, potato chilli, coriander, mix spices and fresh herbs' },
    { name: 'PANI PURI (8 Pcs)', category: 'Starters', price: 9.99, description: 'Crispy fried pastry, stuffed with spicy potato mix and filled with spicy sour watery sauce' },
    { name: 'DAHI PURI (8 Pcs)', category: 'Starters', price: 10.99, description: 'Crispy fried pastry, stuffed with spicy potato mix and topped with dahi' },
    { name: 'LAPHING(DRY)', category: 'Starters', price: 9.99, description: 'Aromatic starchy spiced roll served dry' },
    { name: 'LAPHING(JHOL)', category: 'Starters', price: 10.50, description: 'Aromatic starchy spiced roll served with spicy soup' },
    { name: 'BARA (PLAIN)', category: 'Starters', price: 8.99, description: 'Black lentil pan cake with ginger, garlic, fresh herbs and spices' },
    { name: 'BARA (EGG)', category: 'Starters', price: 10.99, description: 'Black lentil pan cake with ginger, garlic, fresh herbs and spices topped with egg' },
    { name: 'CHATTAMARI', category: 'Starters', price: 15.99, description: 'Traditional pan cake made of rice four, garlic, ginger, onion, spices, fresh herbs and topped with egg and chicken served with spicy dipping sauce' },
    { name: 'CHIPS CHILLI', category: 'Starters', price: 12.99, description: 'Crispy fried potato chips tossed with garlic, ginger, onions, coriander, Capsicum and homemade chilli sauce' },
    { name: 'PEERO AALU', category: 'Starters', price: 12.99, description: 'Spicy Potato, Cumin Potato, Sitchuan Pepper Potato' },
    { name: 'MUSTANG AALU', category: 'Starters', price: 12.99, description: 'Spicy Potato, Cumin Potato, Sitchuan Pepper Potato' },
    { name: 'PANEER CHILLI', category: 'Starters', price: 15.99, description: 'Pan fried cottage cheese cubes with garlic, ginger, onions, coriander, Capsicum and homemade chilli sauce' },
    { name: 'CHICKEN CHILLI', category: 'Starters', price: 15.99, description: 'Boneless chicken pieces fried and tossed with garlic, ginger, onions, coriander, Capsicum and homemade chilli sauce' },
    { name: 'BUFF CHILLI', category: 'Starters', price: 17.99, description: 'Tender buffalo meat pieces tossed with garlic, ginger, onions, coriander, Capsicum, homemade chilli sauce & fresh herbs' },
    { name: 'CHICKEN CHHOYLA', category: 'Starters', price: 15.99, description: 'Boneless chicken pieces cooked over tandoor, marinated with garlic, ginger, onions, Nepalese spices, fresh herbs & mustard oil, served cold.' },
    { name: 'CHICKEN CHHOYLA SET', category: 'Starters', price: 18.99, description: 'Chicken Chhoyla served as a set' },
    { name: 'CHICKEN SEKUWA', category: 'Starters', price: 15.99, description: 'Marinated chicken pieces cooked over tandoor' },
    { name: 'CHICKEN SEKUWA SET', category: 'Starters', price: 18.99, description: 'Chicken Sekuwa served as a set' },
    { name: 'LAMB SEKUWA', category: 'Starters', price: 15.99, description: 'Marinated boneless tender lamb pieces cooked over tandoor' },
    { name: 'LAMB SEKUWA SET', category: 'Starters', price: 19.99, description: 'Lamb Sekuwa served as a set' },
    { name: 'PORK SEKUWA', category: 'Starters', price: 15.99, description: 'Marinated boneless pork pieces cooked over tandoor' },
    { name: 'PORK SEKUWA SET', category: 'Starters', price: 18.99, description: 'Pork Sekuwa served as a set' },
    { name: 'BHUTTAN', category: 'Starters', price: 15.99, description: 'Pan fried goat intestine, with garlic, ginger onion & fresh herbs' },
    { name: 'BHUTTAN SET', category: 'Starters', price: 19.99, description: 'Bhuttan served as a set' },
    { name: 'BUFF SUKUTI', category: 'Starters', price: 18.99, description: 'Buff dry meat served with soya bean, rice flakes potato pickle green salad' },
    { name: 'BUFF SUKUTI SET', category: 'Starters', price: 22.99, description: 'Buff dry meat served with soya bean, rice flakes potato pickle green salad set' },
    { name: 'SAUSAGE FRY', category: 'Starters', price: 10.99, description: 'Crispy fried chicken sausages served with spicy dipping sauce' },
    { name: 'TIMMUR CHICKEN', category: 'Starters', price: 15.99, description: 'Boneless Chicken, santed in nepalese spices and sichuan pepper' },
    { name: 'NEWARI KHAJA SET', category: 'Starters', price: 19.99, description: 'Traditional mix plate of bara, rice flakes, soya bean, potato pickle, potato and bamboo shoot curry, green veg, homemade spicy dipping sauce' },
    { name: 'MIX PLATTER', category: 'Starters', price: 29.99, description: 'Mix plate of Chicken Sausage, vegetable pakauda, bara, chicken chhoyla, lamb chhoyla, bhatmas sadeko, aalu ko achar Served with side of homemade dipping sauce.' },
    { name: 'SUBHAKAMANA PLATTER', category: 'Starters', price: 28.99, description: '4 steam chicken mo:mo: Bara, chattamari, marinated soya bean, lamb or chicken chhoyla and fresh potato pickle served with homemade spicy dipping sauce.' },
    { name: 'VEGETARIAN PLATTER', category: 'Starters', price: 24.99, description: 'Mix Plate of pakauda, bhatmas, aalu achar, bara, aalu chop, samosa served with homemade dipping sauce.' },

    // MOMOS
    { name: 'STEAM MO:MO (VEG)', category: 'MoMos', price: 12.99, description: 'Homemade pastry stuffed with spicy veg mince served with homemade spicy tomato dipping sauce' },
    { name: 'STEAM MO:MO (CHICKEN)', category: 'MoMos', price: 12.99, description: 'Homemade pastry stuffed with spicy chicken mince served with homemade spicy tomato dipping sauce' },
    { name: 'STEAM MO:MO (BUFF)', category: 'MoMos', price: 14.99, description: 'Homemade pastry stuffed with spicy buff mince served with homemade spicy tomato dipping sauce' },
    { name: 'FRIED MO:MO (VEG)', category: 'MoMos', price: 14.99, description: 'Fried homemade pastry stuffed with spicy veg mince served with homemade spicy tomato dipping sauce' },
    { name: 'FRIED MO:MO (CHICKEN)', category: 'MoMos', price: 14.99, description: 'Fried homemade pastry stuffed with spicy chicken mince served with homemade spicy tomato dipping sauce' },
    { name: 'FRIED MO:MO (BUFF)', category: 'MoMos', price: 16.99, description: 'Fried homemade pastry stuffed with spicy buff mince served with homemade spicy tomato dipping sauce' },
    { name: 'CHILLI MO:MO (VEG)', category: 'MoMos', price: 15.99, description: 'Chilli homemade pastry stuffed with spicy veg mince served with homemade spicy tomato dipping sauce' },
    { name: 'CHILLI MO:MO (CHICKEN)', category: 'MoMos', price: 15.99, description: 'Chilli homemade pastry stuffed with spicy chicken mince served with homemade spicy tomato dipping sauce' },
    { name: 'CHILLI MO:MO (BUFF)', category: 'MoMos', price: 17.99, description: 'Chilli homemade pastry stuffed with spicy buff mince served with homemade spicy tomato dipping sauce' },
    { name: 'KOTHEY MO:MO (VEG)', category: 'MoMos', price: 15.99, description: 'Kothey homemade pastry stuffed with spicy veg mince served with homemade spicy tomato dipping sauce' },
    { name: 'KOTHEY MO:MO (CHICKEN)', category: 'MoMos', price: 15.99, description: 'Kothey homemade pastry stuffed with spicy chicken mince served with homemade spicy tomato dipping sauce' },
    { name: 'KOTHEY MO:MO (BUFF)', category: 'MoMos', price: 16.99, description: 'Kothey homemade pastry stuffed with spicy buff mince served with homemade spicy tomato dipping sauce' },
    { name: 'JHOL MO:MO (VEG)', category: 'MoMos', price: 15.99, description: 'Jhol homemade pastry stuffed with spicy veg mince served with homemade spicy tomato dipping sauce' },
    { name: 'JHOL MO:MO (CHICKEN)', category: 'MoMos', price: 15.99, description: 'Jhol homemade pastry stuffed with spicy chicken mince served with homemade spicy tomato dipping sauce' },
    { name: 'JHOL MO:MO (BUFF)', category: 'MoMos', price: 16.99, description: 'Jhol homemade pastry stuffed with spicy buff mince served with homemade spicy tomato dipping sauce' },
    { name: 'SADEKO MO:MO (VEG)', category: 'MoMos', price: 15.99, description: 'Sadeko homemade pastry stuffed with spicy veg mince served with homemade spicy tomato dipping sauce' },
    { name: 'SADEKO MO:MO (CHICKEN)', category: 'MoMos', price: 15.99, description: 'Sadeko homemade pastry stuffed with spicy chicken mince served with homemade spicy tomato dipping sauce' },
    { name: 'SADEKO MO:MO (BUFF)', category: 'MoMos', price: 17.99, description: 'Sadeko homemade pastry stuffed with spicy buff mince served with homemade spicy tomato dipping sauce' },
    { name: 'MO: MO: PLATTER (15 PCS) VEG', category: 'MoMos', price: 24.99, description: '15 PCS, STEAM, FRIED & CHILLI' },
    { name: 'MO: MO: PLATTER (15 PCS) CHICKEN', category: 'MoMos', price: 24.99, description: '15 PCS, STEAM, FRIED & CHILLI' },
    { name: 'MO: MO: PLATTER (15 PCS) BUFF', category: 'MoMos', price: 26.99, description: '15 PCS, STEAM, FRIED & CHILLI' },
    { name: 'MO: MO: PLATTER (20 PCS) VEG', category: 'MoMos', price: 35.99, description: '20 PCS, STEAM, KOTHEY, FRIED & CHILLI' },
    { name: 'MO: MO: PLATTER (20 PCS) CHICKEN', category: 'MoMos', price: 35.99, description: '20 PCS, STEAM, KOTHEY, FRIED & CHILLI' },
    { name: 'MO: MO: PLATTER (20 PCS) BUFF', category: 'MoMos', price: 37.99, description: '20 PCS, STEAM, KOTHEY, FRIED & CHILLI' },

    // CHOWMEIN
    { name: 'VEG CHOWMEIN', category: 'Chowmein', price: 14.99, description: 'Stir fried noodles tossed with fresh herbs, vegetables and homemade Nepalese style sauce' },
    { name: 'CHICKEN CHOWMEIN', category: 'Chowmein', price: 15.99, description: 'Stir fried noodles with chicken' },
    { name: 'EGG CHOWMEIN', category: 'Chowmein', price: 15.99, description: 'Stir fried noodles with egg' },
    { name: 'BUFF CHOWMEIN', category: 'Chowmein', price: 16.99, description: 'Stir fried noodles with buff' },
    { name: 'MIX CHOWMEIN', category: 'Chowmein', price: 17.99, description: 'Stir fried noodles with chicken, egg, buff' },

    // THUKPA
    { name: 'VEGETABLE THUKPA', category: 'Thukpa', price: 14.99, description: 'Noodles cooked with vegetables and fresh herbs in Nepalese style aromatic soup' },
    { name: 'CHICKEN THUKPA', category: 'Thukpa', price: 16.99, description: 'Noodles cooked with chicken' },
    { name: 'EGG THUKPA', category: 'Thukpa', price: 16.99, description: 'Noodles cooked with egg' },
    { name: 'BUFF THUKPA', category: 'Thukpa', price: 17.99, description: 'Noodles cooked with buff' },
    { name: 'MIX THUKPA', category: 'Thukpa', price: 18.99, description: 'Noodles cooked with chicken, egg' },
    { name: 'MO:MO THUKPA (VEG)', category: 'Thukpa', price: 21.00, description: 'Thukpa with veg MoMo' },
    { name: 'MO:MO THUKPA (CHICKEN)', category: 'Thukpa', price: 22.00, description: 'Thukpa with chicken MoMo' },
    { name: 'MO:MO THUKPA (BUFF)', category: 'Thukpa', price: 23.00, description: 'Thukpa with buff MoMo' },

    // THALI
    { name: 'THAKALI THALI (VEG)', category: 'Thali', price: 24.99, description: 'Plain rice, black lentil soup, green vegetable, mix pickle, papadams, side of sweet yoghurt and ghee with your choice of curry served with desert.' },
    { name: 'THAKALI THALI (GOAT)', category: 'Thali', price: 24.99, description: 'Plain rice, black lentil soup, green vegetable, mix pickle, papadams, side of sweet yoghurt and ghee with goat curry served with desert.' },
    { name: 'THAKALI THALI (CHICKEN)', category: 'Thali', price: 24.99, description: 'Plain rice, black lentil soup, green vegetable, mix pickle, papadams, side of sweet yoghurt and ghee with chicken curry served with desert.' },
    { name: 'THAKALI THALI (FISH)', category: 'Thali', price: 24.99, description: 'Plain rice, black lentil soup, green vegetable, mix pickle, papadams, side of sweet yoghurt and ghee with fish curry served with desert.' },
    { name: 'NEPALI THALI (VEG)', category: 'Thali', price: 19.99, description: 'Rice, daal, green leaves, mix pickle, sweet yoghurt and veg curry.' },
    { name: 'NEPALI THALI (GOAT)', category: 'Thali', price: 19.99, description: 'Rice, daal, green leaves, mix pickle, sweet yoghurt and goat curry.' },
    { name: 'NEPALI THALI (CHICKEN)', category: 'Thali', price: 19.99, description: 'Rice, daal, green leaves, mix pickle, sweet yoghurt and chicken curry.' },
    { name: 'NEPALI THALI (FISH)', category: 'Thali', price: 19.99, description: 'Rice, daal, green leaves, mix pickle, sweet yoghurt and fish curry.' },
    { name: 'DHINDO THALI SET (VEG)', category: 'Thali', price: 27.99, description: 'Slow cooked dough, black lentil soup, green vegetable, mix pickle, papadams side of sweet yoghurt and ghee with veg curry' },
    { name: 'DHINDO THALI SET (GOAT)', category: 'Thali', price: 27.99, description: 'Slow cooked dough, black lentil soup, green vegetable, mix pickle, papadams side of sweet yoghurt and ghee with goat curry' },
    { name: 'DHINDO THALI SET (CHICKEN)', category: 'Thali', price: 27.99, description: 'Slow cooked dough, black lentil soup, green vegetable, mix pickle, papadams side of sweet yoghurt and ghee with chicken curry' },
    { name: 'DHINDO THALI SET (FISH)', category: 'Thali', price: 28.99, description: 'Slow cooked dough, black lentil soup, green vegetable, mix pickle, papadams side of sweet yoghurt and ghee with fish curry' },

    // CURRY
    { name: 'DAAL', category: 'Curry', price: 12.99, description: 'Black lentil soup with Nepalese style herbs and aromatic spices.' },
    { name: 'AALU TAMA', category: 'Curry', price: 14.99, description: 'Potato, bamboo shoot and blackeyed bean cooked with Nepalese style aromatic herbs and spices' },
    { name: 'AALU BHENTA', category: 'Curry', price: 14.99, description: 'Vegetable curry with potato and eggplant cooked in Nepalese style aromatic blend of spices' },
    { name: 'AALU CAULI', category: 'Curry', price: 14.99, description: 'Vegetable curry with potato and cauliflower cooked in Nepalese style aromatic blend of spices' },
    { name: 'HARIYO SAAG', category: 'Curry', price: 9.99, description: 'Green vegetable leaf tossed in pan with light seasoning' },
    { name: 'CHICKEN CURRY', category: 'Curry', price: 15.99, description: 'Chicken with bone cooked in Nepalese style tomato and onion based rich curry sauce with fresh herbs and spices' },
    { name: 'GOAT CURRY', category: 'Curry', price: 16.99, description: 'Goat meat pieces with bone cooked in Nepalese style tomato and onion based rich curry sauce with fresh herbs and spices' },
    { name: 'MATAR PANEER', category: 'Curry', price: 16.99, description: 'Cottage cheese cubes & green peas cooked in rich blend of aromatic curry sauce finished with touch of cream' },
    { name: 'BUTTER CHICKEN', category: 'Curry', price: 18.99, description: 'Boneless chicken cooked in aromatic rich blend of curry sauce and finished with cashew nuts and touch of cream' },
    { name: 'FISH CURRY', category: 'Curry', price: 18.99, description: 'Boneless fish pieces cooked through Nepalese style tomato and onion based rich curry sauce with fresh herbs and spices' },

    // FRIED RICE
    { name: 'VEGETABLE FRIED RICE', category: 'Fried Rice', price: 14.99, description: 'Nepalese stlyle fried rice with aromatic spices and vegetables' },
    { name: 'EGG FRIED RICE', category: 'Fried Rice', price: 15.99, description: 'Nepalese stlyle fried rice with egg' },
    { name: 'CHICKEN FRIED RICE', category: 'Fried Rice', price: 15.99, description: 'Nepalese stlyle fried rice with chicken' },
    { name: 'MIX FRIED RICE (EGG & CHICKEN)', category: 'Fried Rice', price: 17.99, description: 'Nepalese stlyle fried rice with egg and chicken' },

    // BIRYANI
    { name: 'VEGETABLE BIRYANI', category: 'Biryani', price: 15.99, description: 'Biryani rice cooked through rich blend of aromatic spices with vegetables' },
    { name: 'CHICKEN BIRYANI', category: 'Biryani', price: 16.99, description: 'Biryani rice cooked through rich blend of aromatic spices with chicken' },
    { name: 'GOAT BIRYANI', category: 'Biryani', price: 17.99, description: 'Biryani rice cooked through rich blend of aromatic spices with goat meat' },

    // NAAN
    { name: 'PLAIN NAAN', category: 'Naan', price: 4.99, description: 'Freshly baked plain naan' },
    { name: 'BUTTER NAAN', category: 'Naan', price: 5.49, description: 'Freshly baked butter naan' },
    { name: 'GARLIC NAAN', category: 'Naan', price: 5.49, description: 'Freshly baked garlic naan' },
    { name: 'GARLIC BUTTER NAAN', category: 'Naan', price: 5.99, description: 'Freshly baked garlic butter naan' },

    // SWEETS
    { name: 'RASBARI (2pcs)', category: 'Desserts', price: 5.99, description: 'Soft cottage cheese balls in sugar syrup' },
    { name: 'GULAB JAMUN', category: 'Desserts', price: 6.99, description: 'Sweet milky solid balls in sugar syrup and yoghurt' },
    { name: 'RASMALAI', category: 'Desserts', price: 9.99, description: 'Soft cottage cheese solids in rich aromatic sweet milky syrup' },

    // DRINKS
    { name: 'COKE/FANTA/SPRITE', category: 'Drinks', price: 4.50, description: 'Soft drinks' },
    { name: 'JUICE (apple, orange, mango)', category: 'Drinks', price: 4.99, description: 'Fruit juice' },
    { name: 'LASSI (Plain or mango)', category: 'Drinks', price: 5.99, description: 'Yoghurt based drink' },
    { name: 'LASSI (banana, strawberry)', category: 'Drinks', price: 7.99, description: 'Yoghurt based drink' },
    { name: 'TEA', category: 'Drinks', price: 4.99, description: 'Milk tea, black tea, or lemon tea' },
];

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected...');

        // Optional: Clear existing menu items
        // await Menu.deleteMany();
        // console.log('Existing data cleared...');

        await Menu.insertMany(menuItems);
        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error('Error with data import:', error);
        process.exit(1);
    }
};

seedData();
