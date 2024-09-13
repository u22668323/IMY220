import React from 'react';

const Song = ({ title, artist, album, duration }) => {
  return (
    <div className="song">
      <h3>{title}</h3>
      <p>Artist: {artist}</p>
      <p>Album: {album}</p>
      <p>Duration: {duration}</p>
    </div>
  );
};

export default Song;
