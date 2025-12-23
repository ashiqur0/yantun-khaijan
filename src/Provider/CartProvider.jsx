import { CartContext } from "@/context/CartContext";

const CartProvider = ({ children }) => {
    
    return <CartContext>{children}</CartContext>
};

export default CartProvider;