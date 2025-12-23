'use client'

import React from 'react';

const InputSearch = () => {

    const handleInputSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log({ search });
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

                <button type='submit' className='px-4 py-2 bg-yellow-500 text-black rounded cursor-pointer'>Search</button>
            </form>
        </div>
    );
};

export default InputSearch;