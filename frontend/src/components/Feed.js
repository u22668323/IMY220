import React from 'react';
import Song from './Song';
import PlaylistPreview from './PlaylistPreview';
import AddToPlaylist from '../components/AddToPlaylist';
import AddSong from '../components/AddSong';


const Feed = () => {
  const songs = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1', duration: '3:45' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2', duration: '4:15' }
  ];

  const playlists = [
    { name: 'Chill Vibes', songCount: 10, description: 'Relaxing playlist' },
    { name: 'Workout Mix', songCount: 15, description: 'Upbeat tracks for working out' }
  ];

  return (
    <div className="feed">
      <h2>Feed</h2>
      <AddSong/>
      <div>
      {songs.map((song, index) => (
        <div key={index}>
          <Song {...song} />
          <AddToPlaylist />
        </div>
      ))}
    </div>
      <div className="playlists-feed">
        {playlists.map((playlist, index) => <PlaylistPreview key={index} {...playlist} />)}
       
      </div>
    </div>
  );
};

export default Feed;
