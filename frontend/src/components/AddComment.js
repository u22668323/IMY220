import React, { useState } from 'react';

export default function AddComment({ onAdd }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      onAdd(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
