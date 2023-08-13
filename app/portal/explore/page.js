'use client';

import React, { useState } from 'react';

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
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedInterests, setSelectedInterests] = useState([]);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleInterestToggle = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(
                selectedInterests.filter((item) => item !== interest)
            );
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const filteredInterests = interestsData.filter((interest) =>
        interest.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container p-6 mx-auto ">
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search interests"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="w-full px-4 py-2 border rounded"
                />
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
