import React from 'react';

const PlaylistPreview = ({ name, songCount, description }) => {
  return (
    <div className="playlist-preview">
      <h3>{name}</h3>
      <p>{songCount} songs</p>
      <p>{description}</p>
    </div>
  );
};

export default PlaylistPreview;
