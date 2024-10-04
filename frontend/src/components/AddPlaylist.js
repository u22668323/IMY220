import React, { useState, useEffect } from 'react';

const AddToPlaylist = ({ songTitle }) => {
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('/api/playlists');
        const data = await response.json();
        setPlaylists(data);
      } catch (error) {
        setErrorMessage('Error fetching playlists');
      }
    };

    fetchPlaylists();
  }, []);

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
        setSuccessMessage(`Successfully added ${songTitle} to playlist`);
        setErrorMessage('');
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Error adding song.');
      }
    } catch (error) {
      setErrorMessage('Network error.');
    }
  };

  return (
    <div className="add-to-playlist">
      <h4>Add "{songTitle}" to a Playlist</h4>
      <form onSubmit={handleSubmit}>
        <select value={selectedPlaylist} onChange={(e) => setSelectedPlaylist(e.target.value)}>
          <option value="" disabled>Select a Playlist</option>
          {playlists.map((playlist) => (
            <option key={playlist._id} value={playlist._id}>
              {playlist.name}
            </option>
          ))}
        </select>
        <button type="submit" disabled={!selectedPlaylist}>
          Add to Playlist
        </button>
      </form>
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default AddToPlaylist;
