import React from 'react';
import Navbar from '../components/Navbar';
import Stars from '../components/Stars';
import Clouds from '../components/Clouds';

function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300">
      <Navbar />
      <Stars />
      <Clouds />
      <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold text-white mb-12 text-center animate-pulse">
          Create Your Dream World
        </h1>
        <div className="flex flex-col gap-6 items-center">
          <button className="bg-black/90 hover:bg-custom text-white px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 hover:shadow-lg !rounded-button">
            Sign Up
          </button>
          <button className="bg-white/90 hover:bg-white text-custom px-12 py-4 rounded-full text-xl font-semibold transition-all transform hover:scale-105 hover:shadow-lg !rounded-button">
            Login
          </button>
        </div>
      </main>
    </div>
  );
}

export default HomePage;