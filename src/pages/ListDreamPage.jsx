import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
import Layout from "../layouts/Layout";
import React from "react";

const dreams = [
  {
    title: "My Dream Title",
    content: "선글라스를 쓴 곰이 정글에서 일렉트릭 기타를 연주하며 춤추는 꿈",
    video: "videos/abcd1234.mp4",
    created_at: "2025-01-13T15:00:00Z",
  },
  // 필요 시 추가 데이터
];

const ListDreamPage = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
      <div className="min-h-screen flex flex-col justify-center items-center p-6">
        <h1
          className={`text-4xl font-bold text-gray-900 mb-8 z-10 text-center ${
            isDarkMode ? "dark-text" : "light-text"
          }`}
        >
          꿈 리스트
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {dreams.length > 0 ? (
            dreams.map((dream, index) => (
              <div
                key={index}
                className="relative bg-black w-[300px] sm:w-[350px] group transition-all duration-700 aspect-video flex items-center justify-center cursor-pointer"
                onClick={() => handleCardClick(dream)}
              >
                {/* 카드 내부 */}
                <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16 rounded-lg">
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 font-serif">
                    {dream.title}
                  </h2>
                  <p className="px-10 text-[10px] sm:text-[12px] text-gray-700">
                    {dream.content}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(dream.created_at).toLocaleString()}
                  </p>
                </div>

                {/* Seal 버튼 */}
                <button className="seal bg-violet-500 text-violet-800 w-10 aspect-square rounded-full z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-violet-700">
                  D
                </button>

                {/* 애니메이션 레이어 */}
                <div className="tp transition-all duration-1000 group-hover:duration-100 bg-purple-900 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"></div>
                <div className="lft transition-all duration-700 absolute w-full h-full bg-purple-950 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"></div>
                <div className="rgt transition-all duration-700 absolute w-full h-full bg-purple-900 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"></div>
                <div className="btm transition-all duration-700 absolute w-full h-full bg-purple-950 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"></div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 dark:text-gray-300">
              저장된 꿈이 없습니다.
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ListDreamPage;
