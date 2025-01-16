import React, { useState, useEffect } from "react";
import "../styles/LoginButton.css";
import Layout from "../layouts/Layout";
import PreLoginScreen from "./PreLoginScreen";
import PostLoginScreen from "./PostLoginScreen";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";

function HomePage() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 새로고침 시 로그인 상태 복원
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    setIsLoggedIn(!!accessToken); // access 토큰이 있으면 true
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("access"); // 로그아웃 시 토큰 제거
    localStorage.removeItem("refresh");
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
