import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const Logo = () => {
    return (
        <Link href={'/'} className='flex gap-2 items-center'>
            {/* <img src={'/logo.png'} className='w-15 h-auto' alt='logo'></img> */}
            <Image width={90} height={90} src={'/logo.png'} className='w-15 h-auto' alt='Yantun Khaijan'/>
            <h1 className="text-4xl">Yantun Khaijan</h1>
        </Link>
    );
};

export default Logo;