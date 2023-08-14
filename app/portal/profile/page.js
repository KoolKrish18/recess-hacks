'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function ProfilePage() {
    const router = useRouter();
    const userEmail = localStorage.getItem('email');
    useEffect(() => {
        router.push('/portal/profile/' + userEmail);
    });

    return (
        <div>
            <Link href={'/portal/profile/' + userEmail} />
        </div>
    );
}
