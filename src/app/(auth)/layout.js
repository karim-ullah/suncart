import Navbar from '@/componets/shared/Navbar';
import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default AuthLayout;