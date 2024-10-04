import React, { useState } from 'react';

const AddSong = () => {
  const [song, setSong] = useState({
    title: '',
    artist: '',
    album: '',
    duration: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:3000/api/songs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(song) // Send song data in JSON format
      });

      if (!response.ok) {
        throw new Error('Failed to add song');
      }

      const data = await response.json();
      console.log('Song added:', data);
      setSuccess(true); // Show success message

      // Reset form
      setSong({ title: '', artist: '', album: '', duration: '' });

    } catch (error) {
      setError('Failed to add the song.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-song-form">
      <input
        type="text"
        name="title"
        placeholder="Song Title"
        value={song.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="artist"
        placeholder="Artist"
        value={song.artist}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="album"
        placeholder="Album"
        value={song.album}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration"
        value={song.duration}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding Song...' : 'Add Song'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Song added successfully!</p>}
    </form>
  );
};

export default AddSong;
