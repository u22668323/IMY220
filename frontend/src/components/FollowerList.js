import React from 'react';
import Profile from './Profile';

const FollowerList = () => {
  const followers = [
    { username: 'Follower1', bio: 'Bio 1', followerCount: 20 },
    { username: 'Follower2', bio: 'Bio 2', followerCount: 35 }
  ];

  return (
    <div className="follower-list">
      <h3>Followers</h3>
      {followers.map((follower, index) => (
        <Profile key={index} user={follower} />
      ))}
    </div>
  );
};

export default FollowerList;
