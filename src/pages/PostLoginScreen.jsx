import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import Layout from "../layouts/Layout";
import React from "react";
import { useNavigate } from "react-router-dom";

const PostLoginScreen = ({ onLogout }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="flex items-center justify-center min-h-screen">
        {/* DreamCreate Button */}
        <button
          onClick={() => {
            console.log("이동");
            navigate("/dreams/create/");
          }}
          className="btn-primary"
        >
          Dream Create
        </button>
        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </Layout>
  );
};

export default PostLoginScreen;
