import React, { useState } from 'react';

const AddToPlaylist = ({ songTitle }) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState('');

  const playlists = [
    { id: 'playlist_id_1', name: 'Chill Vibes' },
    { id: 'playlist_id_2', name: 'Workout Hits' },
    { id: 'playlist_id_3', name: 'Party Mix' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/playlists/${selectedPlaylist}/songs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ song: songTitle }),
      });

      if (response.ok) {
        console.log(`Successfully added ${songTitle} to playlist: ${selectedPlaylist}`);
      } else {
        console.error('Failed to add song');
      }
    } catch (error) {
      console.error('Error adding song:', error);
    }
  };

  return (
    <div className="add-to-playlist">
      <h4>Add "{songTitle}" to a Playlist</h4>
      <form onSubmit={handleSubmit}>
        <select value={selectedPlaylist} onChange={(e) => setSelectedPlaylist(e.target.value)}>
          <option value="" disabled>Select a Playlist</option>
          {playlists.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!selectedPlaylist}>Add to Playlist</button>
      </form>
    </div>
  );
};

export default AddToPlaylist;
