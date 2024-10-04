import React, { useState, useEffect } from 'react';
import PlaylistPreview from './PlaylistPreview'; 
import EditPlaylist from './EditPlaylist';

function Playlist() {
  const [playlists, setPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/playlists');
        if (!response.ok) {
          throw new Error('Failed to fetch playlists');
        }
        const data = await response.json();
        setPlaylists(data); 
      } catch (error) {
        setError('Failed to load playlists. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, []);

  const refreshPlaylists = async () => {
    setLoading(true);
    await fetchPlaylists();
  };

  if (loading) return <p>Loading playlists...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="playlists">
      <h2>Playlists</h2>
      {playlists.map((playlist) => (
        <div key={playlist._id}>
          <PlaylistPreview {...playlist} />
          <EditPlaylist 
            playlistId={playlist._id} 
            initialPlaylistData={playlist}  // Pass initial playlist data
            onUpdate={refreshPlaylists} // Function to refresh the playlists
          />
        </div>
      ))}
    </div>
  );
}

export default Playlist;
