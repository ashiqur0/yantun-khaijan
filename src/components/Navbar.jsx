import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <nav className='px-5 py-2 flex justify-between items-center gap-5 bg-stone-800'>
                <Logo />
                <div className='space-x-5'>
                    <Link href={'/foods'} className="btn">Foods</Link>
                    <Link href={'/reviews'} className="btn">Reviews</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;