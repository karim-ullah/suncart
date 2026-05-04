import React from 'react';
import heroImg from '@/assets/hero-img.png'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@heroui/react';

const Hero = () => {
    return (
        <div className='bg-[#E3DCD6]'>
            <div className='max-w-7xl px-4 mx-auto flex justify-between items-center gap-5 py-10 lg:py-0'>
                <div className=' text-[#1E2833] text-center lg:text-left mx-auto lg:mx-0 space-y-4'>
                    <h2 className='animate__animated animate__fadeInLeft font-bold text-3xl lg:text-5xl leading-8 lg:leading-16'>40% Discount <br /> Summer Mega Sale</h2>
                    <p className='animate__animated animate__fadeInLeft'>Amazing Deals. Great 500+ Customers. Real Savings</p>
                    <Button className='animate__animated animate__fadeInLeft'><Link href={'/products'}>Shop Now</Link></Button>
                </div>
                <div className='hidden lg:block '>
                    <Image className='animate__animated animate__fadeInRight' src={heroImg} height={400} width={400} alt='hero-img'></Image>
                </div>
            </div>
        </div>
    );
};

export default Hero;