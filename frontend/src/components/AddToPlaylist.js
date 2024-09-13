import React, { useState } from 'react';

const AddToPlaylist = ({ songTitle }) => {
  const [playlist, setPlaylist] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Adding ${songTitle} to playlist: ${playlist}`);
  };

  return (
    <div className="add-to-playlist">
      <h4>Add {songTitle} to a Playlist</h4>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Playlist Name" value={playlist} onChange={(e) => setPlaylist(e.target.value)} />
        <button type="submit">Add to Playlist</button>
      </form>
    </div>
  );
};

export default AddToPlaylist;
