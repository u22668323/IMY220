import React from 'react';

const SearchInput = ({ onSearchChange }) => {
  const handleInputChange = (event) => {
    onSearchChange(event.target.value); 
  };

  return (
    <div className="search-input">
      <input
        type="text"
        placeholder="Search songs or playlists..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchInput;
