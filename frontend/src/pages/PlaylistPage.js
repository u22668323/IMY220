import React from 'react';
import Playlist from '../components/Playlist';
import Comments from '../components/Comments';
import { useParams } from 'react-router-dom';


function PlaylistPage ()  {
    const { id } = useParams();
  return (
    <div className="playlist-page">
        <h1>Playlist Page</h1>
        <p>Playlist ID: {id}</p>
      <Playlist /> 
      <Comments/>  
    </div>
  );
};

export default PlaylistPage;
