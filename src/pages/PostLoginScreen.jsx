import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import Layout from "../layouts/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";

const PostLoginScreen = ({ onLogout }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refresh");
      if (!refreshToken) {
        throw new Error("No refresh token found.");
      }

      // 서버에 로그아웃 요청
      await axiosInstance.post("accounts/logout/", { refresh: refreshToken });

      // 로컬 스토리지에서 토큰 제거
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");

      onLogout(); // 부모 컴포넌트에서 추가 동작
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="flex items-center justify-center min-h-screen">
        {/* DreamCreate Button */}
        <button
          onClick={() => navigate("/dreams/write/")}
          className="btn-primary"
        >
          Dream Create
        </button>
        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default PostLoginScreen;
