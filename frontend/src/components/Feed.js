import React, { useState, useEffect } from 'react';
import Song from './Song';
import PlaylistPreview from './PlaylistPreview';
import AddSong from '../components/AddSong';

const Feed = ({ searchQuery }) => {
  const [songs, setSongs] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const songResponse = await fetch('http://localhost:3000/api/songs');
        const songData = await songResponse.json();
        setSongs(songData);

        const playlistResponse = await fetch('http://localhost:3000/api/playlists');
        const playlistData = await playlistResponse.json();
        setPlaylists(playlistData);
      } catch (error) {
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  // Filter songs and playlists based on the search query
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlaylists = playlists.filter(playlist =>
    playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="feed">
      <h2>Feed</h2>
      <AddSong />
      <div>
        {/* Render filtered songs */}
        {filteredSongs.map((song, index) => (
          <div key={index}>
            <Song {...song} />
          </div>
        ))}
      </div>
      <div className="playlists-feed">
        {/* Render filtered playlists */}
        {filteredPlaylists.map((playlist, index) => (
          <PlaylistPreview key={index} {...playlist} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
