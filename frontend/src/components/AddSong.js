import React, { useState } from 'react';

const AddSong = () => {
  const [song, setSong] = useState({
    title: '',
    artist: '',
    album: '',
    duration: ''
  });

  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Song data:', song);
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <input type="text" name="title" placeholder="Song Title" onChange={handleChange} />
      <input type="text" name="artist" placeholder="Artist" onChange={handleChange} />
      <input type="text" name="album" placeholder="Album" onChange={handleChange} />
      <input type="text" name="duration" placeholder="Duration" onChange={handleChange} />
      <button type="submit">Add Song</button>
    </form>
  );
};

export default AddSong;
