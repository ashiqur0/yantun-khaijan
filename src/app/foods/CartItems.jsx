'use client'

import { CartContext } from '@/context/CartContext';
import React, { use, useContext } from 'react';

const CartItems = () => {

    const { cart } = use(CartContext);

    return (
        <div>
            {cart.length} items added
        </div>
    );
};

export default CartItems;