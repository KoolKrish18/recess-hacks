'use client';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

// Home is completely useless, it just redirects to the login or portal
export default function Home() {
    useEffect(() => {
        if (localStorage.getItem('email') && localStorage.getItem('password')) {
            redirect('/portal');
        }
        redirect('/login');
    });

    return <div></div>;
}
