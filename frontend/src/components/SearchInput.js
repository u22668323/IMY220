import React, { useState } from 'react';

function SearchInput  ()  {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    console.log('Searching for:', searchTerm);
  };

  return (
    <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
  );
};

export default SearchInput;
