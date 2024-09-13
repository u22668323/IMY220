import React from 'react';
import { Link } from 'react-router-dom'; 

function Header ()  {
  return (
    <nav className="header-nav">
      <ul>
        <li><Link to="/">Splash</Link></li>
        <li><Link to="/home">home</Link></li>
        <li><Link to="/playlist/1234">Playlists</Link></li>
        <li><Link to="/profile/1234">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
