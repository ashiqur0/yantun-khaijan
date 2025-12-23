import { CartContext } from "@/context/CartContext";
import { useState } from "react";

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([item, ...cart]);
    }

    const cartInfo = {
        addToCart, cart,
    }
    
    return <CartContext value={cartInfo}>{children}</CartContext>
};

export default CartProvider;