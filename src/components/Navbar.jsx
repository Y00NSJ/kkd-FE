import React, { useState } from 'react';

function Navbar({isDarkMode, toggleDarkMode}) {


  return (
    <nav className="absolute top-0 right-0 w-full flex items-center justify-between p-6 z-50">
      <div>
        <button
          onClick={toggleDarkMode}
          className="text-white hover:text-black transition-colors !rounded-button"
        >
          <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'} text-lg`}></i>
        </button>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-white hover:text-black transition-colors !rounded-button">
          <i className="fas fa-cog text-xl"></i>
        </button>
        <button className="text-white hover:text-black transition-colors !rounded-button">
          <i className="fas fa-user-friends text-xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;