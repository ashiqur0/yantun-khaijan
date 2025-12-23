'use client'

import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const InputSearch = () => {

    const router = useRouter();
    const params = useSearchParams();

    const handleInputSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        const newParams = new URLSearchParams(params.toString());
        newParams.set('search', search);
        router.push(`?${newParams.toString()}`);
    }

    return (
        <div>
            <form onSubmit={handleInputSearch}>
                <input
                    name='search'
                    type="text"
                    placeholder='Search Food'
                    className='px-1 py-3 border-2 rounded w-2xl'
                />

                <button type='submit' className='btn btn-soft btn-success border border-orange-400'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;