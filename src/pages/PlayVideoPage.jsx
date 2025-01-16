import React, { useState, useEffect } from "react";
import LoadingAnimation from "../components/LoadingAnimation";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import Laptop from "../assets/Labtop.jsx"; // Labtop 컴포넌트 임포트
import { Environment } from "@react-three/drei";
import Layout from "../layouts/Layout";
import { Canvas } from "@react-three/fiber";

const PlayVideoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    // 로딩 상태를 3초 후에 false로 설정
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer); // 타이머 정리
  }, []);

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            {/* h1은 중앙 위쪽에 위치 */}
            <h1
              className={`text-4xl font-bold text-gray-900 mb-8 z-10 text-center ${
                isDarkMode ? "dark-text" : "light-text"
              }`}
            >
              🎥 Your Dream Video
            </h1>
            {/* Canvas는 h1 바로 아래에 위치 */}
            <div className="w-full h-[60vh] mt-8">
              <Canvas
                camera={{
                  fov: 45,
                  near: 0.1,
                  far: 200,
                  position: [0, 1.5, 5],
                }}
              >
                <Environment files="/hdri/venice_sunset_1k.hdr" />
                <Laptop />
              </Canvas>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default PlayVideoPage;
