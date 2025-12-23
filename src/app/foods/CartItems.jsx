'use client'

import React, { useContext } from 'react';

const CartItems = () => {

    const { cart } = useContext();

    return (
        <div>
            {cart.length} items added
        </div>
    );
};

export default CartItems;