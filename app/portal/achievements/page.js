import React from 'react';

const AchievementsPage = () => {
    const totalPoints = 3;
    let currentPoints = 1;
    const progressPercentage = (currentPoints / totalPoints) * 100;

    const achievementsData = [
        {
            title: 'First Achievement',
            description: 'You accomplished your first task!',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
            ),
            points: 50,
        },
        {
            title: 'Milestone Achievement',
            description: 'You reached a significant milestone.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
            ),
            points: 100,
        },
        {
            title: 'Expert Achiever',
            description: 'You are recognized as an expert in your field.',
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                </svg>
            ),
            points: 150,
        },
    ];

    return (
        <div className="container p-5 mx-auto">
            <h1 className="mb-4 text-2xl font-semibold">Achievements</h1>
            <div className="mb-4">
                <p>
                    Achievements Completed: {currentPoints}/{totalPoints}
                </p>
                <div className="w-full h-4 bg-gray-400 rounded">
                    <div
                        className="h-4 bg-blue-500 rounded"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>
                <p className="mt-2 text-sm text-center">
                    {' '}
                    Checkpoint 1 - Checkpoint 2 - Completion
                </p>
            </div>
            <div className="flex flex-col space-y-4">
                {achievementsData.map((achievement, index) => (
                    <AchievementCard key={index} {...achievement} />
                ))}
            </div>
        </div>
    );
};

const AchievementCard = ({ title, description, icon, points }) => {
    return (
        <div className="p-4 bg-white rounded shadow">
            <div className="mb-2 text-3xl">{icon}</div>
            <h2 className="mb-1 text-xl font-semibold">{title}</h2>
            <p className="text-gray-700">{description}</p>
            <p className="mt-2 text-gray-600">Points: {points}</p>
        </div>
    );
};

export default AchievementsPage;
