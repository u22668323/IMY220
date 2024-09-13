
import React from 'react';
import Feed from '../components/Feed';
import SearchInput from '../components/SearchInput';

function HomePage() {
  return (
    <div className="home-page">
      <SearchInput />
      <Feed />
    </div>
  );
};

export default HomePage;