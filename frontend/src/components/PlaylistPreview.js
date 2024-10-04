import React from 'react';

const PlaylistPreview = ({ name, description, songs = [], comments = [] }) => {
  return (
    <div className="playlist-preview">
      <h3>{name}</h3>
      <p>{description}</p>

      <h4>Songs:</h4>
      <ul>
        {songs.length > 0 ? (
          songs.map((song, index) => (
            <li key={index}>
              {typeof song === 'string' ? song : `Song ID: ${song}`}
            </li>
          ))
        ) : (
          <p>No songs available in this playlist.</p>
        )}
      </ul>

      <h4>Comments:</h4>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.user}:</strong> {comment.text} <br />
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </li>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </ul>
    </div>
  );
};

export default PlaylistPreview;
