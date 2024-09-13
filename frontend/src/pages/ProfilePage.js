import React from 'react';
import Profile from '../components/Profile';
import Feed from '../components/Feed';
import FollowerList from '../components/FollowerList';
import { useParams } from 'react-router-dom';

function ProfilePage  ()  {
    const { id } = useParams();
  return (
    <div className="profile-page">
    <h1>Profile Page</h1>
    <p>Profile ID: {id}</p>
      <Profile />
      <Feed />
      <FollowerList />
    </div>
  );
};

export default ProfilePage;
