'use client';

import Navbar from '@components/Navbar';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const PortalLayout = ({ children }) => {
    const router = useRouter();
    useEffect(() => {
        if (
            !localStorage.getItem('email') &&
            !localStorage.getItem('password')
        ) {
            router.push('/login');
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
