import React, { useState } from 'react';

const EditPlaylist = ({ playlistId, initialPlaylistData, onUpdate }) => {
  // Check if initialPlaylistData is provided
  if (!initialPlaylistData) {
    return <p>No playlist data available.</p>;
  }

  const [name, setName] = useState(initialPlaylistData.name || ''); // Default to empty string
  const [description, setDescription] = useState(initialPlaylistData.description || ''); // Default to empty string

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') setName(value);
    else if (name === 'description') setDescription(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/playlists/${playlistId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }), // Send updated name and description
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);
        onUpdate(); // Refresh or re-fetch the playlists if needed
      } else {
        const errorData = await response.json();
        console.error('Failed to update playlist:', errorData.message);
      }
    } catch (error) {
      console.error('Error updating playlist:', error);
    }
  };

  return (
    <div>
      <h4>Edit Playlist</h4>
      <form onSubmit={handleSubmit} className="edit-playlist-form">
        <input
          type="text"
          name="name"
          placeholder="Playlist Name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={handleChange}
        />
        <button type="submit">Update Playlist</button>
      </form>
    </div>
  );
};

export default EditPlaylist;
