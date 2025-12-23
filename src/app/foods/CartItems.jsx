'use client'

import React, { useContext } from 'react';

const CartItems = () => {

    const {addToCart, cart} = useContext();

    return (
        <div>
            {cart.length} items added
        </div>
    );
};

export default CartItems;