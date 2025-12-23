'use client'

import useAuth from '@/hooks/useAuth';
import React, { useState } from 'react';

const CardButton = ({ food }) => {

    const [inCart, setInCart] = useState(false);
    const { addToCart } = useAuth();

    const handleAddToCart = () => {
        addToCart(food);
        setInCart(true);
    }

    return (
        <button
            disabled={inCart}
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition disabled:bg-gray-500"
        >
            {inCart ? 'Added' : 'Add to Cart'}
        </button>
    );
};

export default CardButton;