import React, { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import Layout from "../layouts/Layout";
import DreamForm from "../components/DreamForm";
import { useNavigate } from "react-router-dom";

function CreateDreamPage() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [fadeIn, setFadeIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // 컴포넌트가 마운트되면 fade-in 클래스 추가
    setFadeIn(true);
  }, []);

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <main
        className={`relative flex flex-col items-center justify-center min-h-screen px-4 transition-opacity duration-1000 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
        style={{ opacity: fadeIn ? 1 : 0 }}
      >
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <h1
              className={`text-4xl font-bold mb-4 ${
                isDarkMode
                  ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"
                  : "text-gray-900"
              }`}
            >
              📽️ 꿈 영사기 📽️
            </h1>
            <p
              className={`text-lg ${
                isDarkMode
                  ? "text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]"
                  : "text-gray-600"
              }`}
            >
              어제 꾸었던 꿈을 보여드릴게요 💭
            </p>
          </div>
          <DreamForm />
          <div className=" flex justify-end">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3  text-white font-semibold rounded-lg hover:text-black transition-colors"
            >
              <i className="fas fa-home text-xl"></i>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default CreateDreamPage;
