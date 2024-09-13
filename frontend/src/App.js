import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import PlaylistPage from './pages/PlaylistPage';
import Header from './components/Header';

function App() {
  return (
    <Router >
       <Header /> 
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </Router>
  );
}

export default App;