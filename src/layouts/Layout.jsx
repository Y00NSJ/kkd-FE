import React from 'react';
import Navbar from '../components/Navbar';
import Stars from '../components/Stars';
import Clouds from '../components/Clouds';

const Layout = ({isDarkMode, toggleDarkMode, children}) => {
    return (
      <div className={`relative min-h-screen overflow-hidden ${
      isDarkMode
      ? 'bg-gradient-to-b from-purple-950 via-violet-800 to-blue-900'
      : 'bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300'}`}>
        <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Stars />
        <Clouds />
        {children}
      </div>
    );
  }
  
  export default Layout;
