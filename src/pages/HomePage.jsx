import React, { useState } from "react";
import "../styles/LoginButton.css";
import Layout from "../layouts/Layout";
import PreLoginScreen from "./PreLoginScreen";
import PostLoginScreen from "./PostLoginScreen";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";

function HomePage() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

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
