import React, { useState } from 'react';
import AddComment from './AddComment';

export default function Comments() {
  const [comments, setComments] = useState([]);

  const handleAddComment = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <div>
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
      <AddComment onAdd={handleAddComment} />
    </div>
  );
}
