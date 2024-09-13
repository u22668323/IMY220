import React from 'react';
import Song from './Song';
import EditPlaylist from './EditPlaylist';

function Playlist () {
  const songs = [
    { title: 'Song A', artist: 'Artist A', album: 'Album A', duration: '3:45' },
    { title: 'Song B', artist: 'Artist B', album: 'Album B', duration: '4:15' }
  ];

  return (
    <div className="playlist">
      <h2>Chill Vibes Playlist</h2>
      <p>Description: A relaxing playlist for chilling</p>
      <div className="songs">
      {songs.map((song, index) => (
        <div key={index}>
          <Song {...song} />
          <EditPlaylist />
        </div>
      ))}
      </div>
    </div>
  );
};

export default Playlist;
