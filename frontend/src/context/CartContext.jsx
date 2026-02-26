import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const normalizeId = (menuItem) => {
        // use _id if available otherwise fall back to the name/description field
        return menuItem._id || menuItem.sub || menuItem.name || menuItem;
    };

    const addToCart = (menuItem) => {
        const id = normalizeId(menuItem);
        const existingItem = cart.find(item => normalizeId(item.menuItem) === id);
        if (existingItem) {
            setCart(cart.map(item =>
                normalizeId(item.menuItem) === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            ));
        } else {
            setCart([...cart, { menuItem, quantity: 1 }]);
        }
    };

    const updateQuantity = (itemOrId, newQuantity) => {
        // support passing an object or just an identifier
        const id = typeof itemOrId === 'string' ? itemOrId : normalizeId(itemOrId);
        if (newQuantity <= 0) {
            removeFromCart(itemOrId);
        } else {
            setCart(cart.map(item =>
                normalizeId(item.menuItem) === id
                    ? { ...item, quantity: newQuantity }
                    : item
            ));
        }
    };

    const removeFromCart = (menuItem) => {
        const id = normalizeId(menuItem);
        setCart(cart.filter(item => normalizeId(item.menuItem) !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartTotal = () => {
        return cart.reduce((total, item) => {
            const price = typeof item.menuItem.price === 'string'
                ? parseFloat(item.menuItem.price.replace(/[^0-9\.]/g, '')) || 0
                : item.menuItem.price || 0;
            return total + price * item.quantity;
        }, 0);
    };

    const getCartItemCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    const getItemQuantityInCart = (itemOrId) => {
        const id = typeof itemOrId === 'string' ? itemOrId : normalizeId(itemOrId);
        const item = cart.find(i => normalizeId(i.menuItem) === id);
        return item ? item.quantity : 0;
    };

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            getCartTotal,
            getCartItemCount,
            getItemQuantityInCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
