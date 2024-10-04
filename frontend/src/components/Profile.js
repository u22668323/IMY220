import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null); // State to store user data
  const [loading, setLoading] = useState(true); // State to manage loading
  const [error, setError] = useState(''); // State to manage errors

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users'); // Fetch users data
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        // Assuming you want to display the first user or you can modify to display a specific user
        setUser(data[0]); // Set the first user as the current user
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after fetch
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <p>Loading user data...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  return (
    <div className="profile">
      <h2>{user.username}</h2> {/* Display username */}
      <p>Email: {user.email}</p> {/* Display email */}
      <p>Followers: {user.followers}</p> {/* Display follower count */}
      <p>Subscription Type: {user.subscriptionType || 'N/A'}</p> {/* Display subscription type */}
      {/* Optionally display favorites */}
      <div>
        <h3>Favorites:</h3>
        <h4>Songs:</h4>
        <ul>
          {user.favorites?.songs.length > 0 ? (
            user.favorites.songs.map((songId) => (
              <li key={songId}>{songId}</li> // Replace with actual song titles if needed
            ))
          ) : (
            <li>No favorite songs</li>
          )}
        </ul>
        <h4>Playlists:</h4>
        <ul>
          {user.favorites?.playlists.length > 0 ? (
            user.favorites.playlists.map((playlistId) => (
              <li key={playlistId}>{playlistId}</li> // Replace with actual playlist titles if needed
            ))
          ) : (
            <li>No favorite playlists</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
