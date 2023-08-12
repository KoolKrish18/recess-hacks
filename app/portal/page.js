import React from 'react';

const accountsData = [
  {
    name: 'John Doe',
    profilePic: 'profile1.jpg', // Replace with image path
    interests: ['Gaming', 'Photography', 'Travel'],
  },
  {
    name: 'Jane Smith',
    profilePic: 'profile2.jpg', // Replace with image path
    interests: ['Cooking', 'Fitness', 'Reading'],
  },
  // Add more account data...
];

const PortalHome = () => {
  return (
    <div className="container p-6 mx-auto">
      <h1 className="mb-6 text-3xl font-semibold">Portal Home</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {accountsData.map((account, index) => (
          <AccountBox key={index} {...account} />
        ))}
      </div>
    </div>
  );
};

const AccountBox = ({ name, profilePic, interests }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <img src={profilePic} alt={`${name}'s Profile`} className="w-16 h-16 mx-auto rounded-full" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <div className="flex space-x-2">
        {interests.map((interest, index) => (
          <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded">{interest}</span>
        ))}
      </div>
    </div>
  );
};

export default PortalHome;
