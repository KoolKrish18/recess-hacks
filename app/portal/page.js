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
      <div className="flex flex-col space-y-4">
        {accountsData.map((account, index) => (
          <AccountBox key={index} {...account} />
        ))}
      </div>
    </div>
  );
};

const AccountBox = ({ name, profilePic, interests }) => {
  return (
    <div className="flex flex-row p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <img src={profilePic} alt={`${name}'s Profile`} className="w-16 h-16 mr-auto rounded-full" />
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold">{name}</h3>
        <div className="flex space-x-2">
          {interests.map((interest, index) => (
            <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded">{interest}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortalHome;
