import React from "react";
import Navbar from "../components/Navbar";
import Stars from "../components/Stars";
import Clouds from "../components/Clouds";
import { useState, useEffect } from "react";

const Layout = ({ isDarkMode, toggleDarkMode, children }) => {
  const [backgroundClass, setBackgroundClass] = useState("");
  useEffect(() => {
    const bgClass = isDarkMode
      ? "bg-gradient-to-b from-purple-950 via-violet-800 to-blue-800"
      : "bg-gradient-to-b from-purple-400 via-pink-300 to-blue-300";
    setBackgroundClass(bgClass);
  }, [isDarkMode]);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        backgroundClass || ""
      }`}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Stars />
      <Clouds />
      {children}
    </div>
  );
};

export default Layout;
