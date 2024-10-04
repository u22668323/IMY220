// FollowerList.js
import React, { useState, useEffect } from 'react';
import FollowerProfile from './FollowerProfile'; // Import the new FollowerProfile component

const FollowerList = () => {
  const [followers, setFollowers] = useState([]); // State to hold fetched followers
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(''); // State for error handling
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users'); // Fetch users from API
        if (!response.ok) {
          throw new Error('Failed to fetch followers.'); // Error handling
        }
        const data = await response.json();
        setFollowers(data); // Set fetched data to followers state
      } catch (error) {
        setError(error.message); // Update error state
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchFollowers(); // Call the fetch function
  }, []); // Empty dependency array to run only once on mount

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase()); // Update search term state
  };

  // Filter followers based on the search term
  const filteredFollowers = followers.filter(follower =>
    follower.username.toLowerCase().includes(searchTerm) // Check if username includes the search term
  );

  if (loading) return <p>Loading followers...</p>; // Loading state
  if (error) return <p>{error}</p>; // Error state

  return (
    <div className="follower-list">
      <h2>Followers</h2>
      <input
        type="text"
        placeholder="Search Followers"
        value={searchTerm}
        onChange={handleSearchChange} // Update search term on change
      />
      {filteredFollowers.length > 0 ? (
        filteredFollowers.map((follower) => (
          <FollowerProfile key={follower._id} user={follower} /> // Use FollowerProfile for each follower
        ))
      ) : (
        <p>No followers found.</p> // Message when no followers match the search
      )}
    </div>
  );
};

export default FollowerList;
