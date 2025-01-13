import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Stars from '../components/Stars';
import Clouds from '../components/Clouds';
import '../styles/LoginButton.css'
import Layout from '../layouts/Layout';
import PreLoginScreen from './PreLoginScreen';
import PostLoginScreen from './PostLoginScreen';

function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      {isLoggedIn ? (
        <PostLoginScreen onLogout={handleLogout} />
      ) : (
        <PreLoginScreen onLogin={handleLogin} />
      )}
    </Layout>
  );
}

export default HomePage;