'use client';
import React, { useEffect } from 'react';

const SignupPage = () => {
    useEffect(() => {
        fetch('./api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'msso',
                firstName: 'sss',
                lastName: 'sss',
                password: 'sss',
                type: 'sss',
                age: 15,
                bio: '2222',
            }),
        });
    }, []);
    return <div>SignupPage</div>;
};

export default SignupPage;
