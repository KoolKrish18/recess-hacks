'use client';

import Navbar from '@components/Navbar';
import { useEffect } from 'react';
import { redirect } from 'next/navigation';

const PortalLayout = ({ children }) => {
    useEffect(() => {
        if (
            !localStorage.getItem('email') &&
            !localStorage.getItem('password')
        ) {
            redirect('/login');
        }
    });

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">{children}</div>
            <Navbar />
        </div>
    );
};

export default PortalLayout;
