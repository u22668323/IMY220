import React from 'react';

function Profile () {
  const user = {
    username: 'JohnDoe',
    bio: 'Music lover and playlist creator',
    followerCount: 150,
  };

  return (
    <div className="profile">
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <p>{user.followerCount} followers</p>
    </div>
  );
};

export default Profile;
