import React from 'react';

const FollowerProfile = ({ user }) => {
  return (
    <div className="follower-profile">
      <h4>{user.username}</h4> {/* Display username */}
      <p>Email: {user.email}</p> {/* Display email */}
      <p>Followers: {user.followers}</p> {/* Display follower count */}
      <p>Subscription Type: {user.subscriptionType || 'N/A'}</p> {/* Display subscription type */}
    </div>
  );
};

export default FollowerProfile;
