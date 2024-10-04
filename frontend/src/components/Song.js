import React from 'react';
import AddToPlaylist from './AddToPlaylist';

const Song = ({ title, artist, album, duration }) => {
  return (
    <div className="song">
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
      <p>Duration: {duration}</p>

      <AddToPlaylist songTitle={title} />
    </div>
  );
};

export default Song;
