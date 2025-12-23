import { CartContext } from '@/context/CartContext';
import React, { use } from 'react';

const useAuth = () => {

    const authInfo = use(CartContext);

    return authInfo;
};

export default useAuth;