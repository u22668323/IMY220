import React, { useState } from 'react';
import Feed from '../components/Feed';
import SearchInput from '../components/SearchInput';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="home-page">
      <SearchInput onSearchChange={handleSearchChange} />
      <Feed searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;
