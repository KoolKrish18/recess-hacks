'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        interests: [],
        age: 0,
        email: '',
    });

    let profData = () => {
        fetch('/api/user?email=' + localStorage.getItem('email'))
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setProfileData(data.user);
                return data;
            });
    };
    useEffect(() => {
        profData();
    }, []);
    return (
        <div className="container p-6 mx-auto">
            <div className="flex flex-col items-center space-y-6">
                <Image
                    src="https://innocenceproject.org/wp-content/uploads/2023/02/AP_22082506803469-scaled-1.jpg"
                    alt={`${profileData.name}'s Profile`}
                    width={128}
                    height={128}
                    className="w-32 h-32 rounded-full"
                />
                <h1 className="text-2xl font-semibold">
                    {profileData.firstName} {profileData.lastName}
                </h1>
                <p className="text-gray-600">{profileData.bio}</p>
                <div className="flex space-x-2">
                    {profileData.interests.map((interest, index) => (
                        <span
                            key={index}
                            className="px-2 py-1 text-sm bg-gray-200 rounded"
                        >
                            {interest}
                        </span>
                    ))}
                </div>

                <p className="text-gray-600">Age: {profileData.age}</p>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
                    Send Message
                </button>
                <p className="text-gray-600">Email: {profileData.email}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
