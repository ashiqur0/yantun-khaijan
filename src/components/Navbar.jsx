import React from 'react';
import Logo from './Logo';
import Link from 'next/link';

const Navbar = () => {
    return (
        <header>
            <nav className='px-5 py-2 flex justify-between items-center gap-5 bg-stone-800'>
                <Logo />
                <div className='space-x-5'>
                    <Link prefetch={false} href={'/foods'} className="btn">Foods</Link>
                    <Link href={'/reviews'} className="btn">Reviews</Link>
                    <Link href={'/feedbacks'} className="btn">Feedbacks</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;