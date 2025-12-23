'use client'

import React, { useState } from 'react';

const CardButton = () => {

    const [inCart, setInCart] = useState(false);

    const handleAddToCart = () => {
        setInCart(true);
    }

    return (
        <button
            disabled={inCart}
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition disabled:bg-gray-500"
        >
            {inCart ? 'Added': 'Add to Cart'}
        </button>
    );
};

export default CardButton;