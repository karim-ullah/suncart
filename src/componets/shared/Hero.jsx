import React from 'react';
import heroImg from '@/assets/hero-img.png'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='bg-[#E3DCD6]'>
            <div className='max-w-11/12 mx-auto flex justify-between items-center gap-5'>
                <div className='text-[#1E2833] space-y-4'>
                    <h2 className='font-bold text-5xl leading-16'>40% Discount <br /> Summer Mega Sale</h2>
                    <p>Amazing Deals. Great 500+ Customers. Real Savings</p>
                    <Link href={'/products'} className='bg-amber-300 px-4 py-2 font-medium rounded-sm'>Shop Now</Link>
                </div>
                <div>
                    <Image src={heroImg} height={400} width={400}></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero;