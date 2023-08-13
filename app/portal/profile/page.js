import React from 'react';

const ProfilePage = () => {
  const profileData = {
    name: 'John Doe',
    bio: 'Software Engineer | Nature Lover | Coffee Enthusiast',
    interests: ['Programming', 'Hiking', 'Photography'],
    mutualFriends: 23,
    age: 30,
    email: 'john@example.com',
  };

  return (
    <div className="container p-6 mx-auto">
      <div className="flex flex-col items-center space-y-6">
        <img
          src="profile.jpg" // Replace with actual profile image URL
          alt={`${profileData.name}'s Profile`}
          className="w-32 h-32 rounded-full"
        />
        <h1 className="text-2xl font-semibold">{profileData.name}</h1>
        <p className="text-gray-600">{profileData.bio}</p>
        <div className="flex space-x-2">
          {profileData.interests.map((interest, index) => (
            <span key={index} className="px-2 py-1 text-sm bg-gray-200 rounded">
              {interest}
            </span>
          ))}
        </div>
        <p className="text-gray-600">Mutual Friends: {profileData.mutualFriends}</p>
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
