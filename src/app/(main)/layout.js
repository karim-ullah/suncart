import Hero from '@/componets/shared/Hero';
import Navbar from '@/componets/shared/Navbar';
import React from 'react';

const MainLayOut = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            {children}
        </div>
    );
};

export default MainLayOut;