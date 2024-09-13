import React, { useState } from 'react';

const AddPlaylist = () => {
  const [song, setSong] = useState({
    title: ''
    
  });

  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Song data:', song);
  };

  return (
    <div>
      <h4>Add playlist</h4><br/>
    <form onSubmit={handleSubmit} className="add-song-form">
    <input type="text" name="title" placeholder="Playlist name" onChange={handleChange} />
      <button type="submit">Add playlist</button>
    </form>
    </div>
  );
};

export default AddPlaylist;
