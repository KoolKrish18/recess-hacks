'use client';

import React, { useState } from 'react';
import GradientButton from '@components/GradientButton';

const interestsData = [
    'Programming',
    'Hiking',
    'Photography',
    'Cooking',
    'Reading',
    'Gaming',
    'Fitness',
    'Travel',
];

const ExplorePage = () => {
    // search variables
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [userCards, setUserCards] = useState([]);

    const getUserCards = async () => {
        // Returns a list of all the user cards (no params)
        await fetch('/api/user').then((res) => res.json());
        setUserCards([]);
    };

    const getSearchTerm = async (interest) => {
        // Returns a list of all the user cards (no params)
        await fetch('/api/user/interest?interest=' + interest, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (userInterestResponse.userCards) {
                    setUserCards(userInterestResponse?.userCards[0]?.userCards);
                } else {
                    setUserCards([]);
                }
            });
    };

    // search functions
    const handleSearch = (event) => {
        getSearchTerm(event.target.value);
    };

    // only filter if it exists
    const handleInterestToggle = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(
                selectedInterests.filter((item) => item !== interest)
            );
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    // used for mapping
    const filteredInterests = interestsData.filter((interest) =>
        interest.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container p-6 mx-auto ">
            <div className="flex mb-4">
                <input
                    type="text"
                    placeholder="Search interests"
                    value={searchTerm}
                    className="w-full px-4 py-2 border rounded"
                />
                <GradientButton text="Search">
                    <button onClick={() => getSearchTerm()}></button>
                </GradientButton>
            </div>
            <div className="flex flex-wrap space-x-2">
                {filteredInterests.map((interest, index) => (
                    <button
                        key={index}
                        onClick={() => handleInterestToggle(interest)}
                        className={`py-1 px-3 rounded ${
                            selectedInterests.includes(interest)
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200 text-gray-600'
                        }`}
                    >
                        {interest}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ExplorePage;
