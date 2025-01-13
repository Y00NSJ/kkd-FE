import React from 'react';

function Navbar() {
  return (
    <nav className="absolute top-0 right-0 p-6 z-50">
      <div className="flex items-center gap-6">
        <button className="text-white hover:text-black transition-colors !rounded-button">
          <i className="fas fa-cog text-xl"></i>
        </button>
        <button className="text-white hover:text-black transition-colors !rounded-button">
          <i className="fas fa-globe text-xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;