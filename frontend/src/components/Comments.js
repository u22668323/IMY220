import React, { useState } from 'react';
import AddComment from './AddComment';

export default function Comments({ comments: initialComments }) {
  const [comments, setComments] = useState(initialComments || []);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.length > 0 ? (
          comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.user}:</strong> {comment.text}
              <br />
              <small>{new Date(comment.timestamp).toLocaleString()}</small>
            </li>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </ul>
      <AddComment onAdd={handleAddComment} />
    </div>
  );
}
