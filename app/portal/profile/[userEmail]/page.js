'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import GradientButton from '@components/GradientButton';

export default function ProfilePage() {
    const params = useParams();
    const profileEmail = params.userEmail;
    const [profileData, setProfileData] = useState({
        firstName: '',
        lastName: '',
        bio: '',
        interests: [],
        age: 0,
        email: '',
    });

    useEffect(() => {
        fetch('/api/user?email=' + profileEmail)
            .then((response) => response.json())
            .then((data) => {
                setProfileData(data.user);
                return data;
            });
    }, [profileEmail]);
    return (
        <div className="container p-6 mx-auto">
            <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-row flex-wrap">
                    <Image
                        src={profileData.profilePicture}
                        alt={`${profileData.name}'s Profile`}
                        width={128}
                        height={128}
                        className="w-32 h-32 rounded-full"
                    />
                    <h1 className="text-2xl font-semibold">
                        {profileData.firstName} {profileData.lastName}
                    </h1>
                </div>
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
                <GradientButton
                    text="Send Message"
                    className="px-4 py-2 text-white bg-blue-500 rounded-md"
                />
                <p className="text-gray-600">Email: {profileData.email}</p>
            </div>
        </div>
    );
}
