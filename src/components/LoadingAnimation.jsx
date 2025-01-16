// import React, { useState, useEffect } from "react";
// import { ThemeProvider, useTheme } from "../contexts/ThemeContext.jsx";
// import Layout from "../layouts/Layout";
// import { useNavigate } from "react-router-dom";

// function LoadingPage() {
//   const { isDarkMode, toggleDarkMode } = useTheme();
//   const [fadeIn, setFadeIn] = useState(false);
//   const navigate = useNavigate();
//   useEffect(() => {
//     // 컴포넌트가 마운트되면 fade-in 클래스 추가
//     setFadeIn(true);
//   }, []);

//   return (
//     <Layout isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}>
//       <main className="relative flex flex-col items-center justify-center min-h-screen px-4 transition-opacity duration-1000">
//         <div className="bg-gray-200 flex justify-center py-6 h-52">
//           <div className="h-36 w-36 flex items-center justify-center">
//             <div class="container flex justify-center items-center">
//               <div class="water h-20 w-20 bg-[#35b3e7] rounded-full relative overflow-hidden before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:-top-[50%] before:left-[50%] before:bg-white after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:-top-[50%] after:left-[50%] after:bg-white before:rounded-[45%] before:animate-[wave_5s_linear_infinite] after:rounded-[35%] after:bg-white/30 after:animate-[wave_5s_linear_infinite]"></div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </Layout>
//   );
// }

// export default LoadingPage;

import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center py-6 h-52">
      <div className="h-36 w-36 flex items-center justify-center">
        <div className="container flex justify-center items-center">
          <div className="water h-20 w-20 bg-[#35b3e7] rounded-full relative overflow-hidden before:content-[''] before:absolute before:w-[200%] before:h-[200%] before:-top-[50%] before:left-[50%] before:bg-white after:content-[''] after:absolute after:w-[200%] after:h-[200%] after:-top-[50%] after:left-[50%] after:bg-white before:rounded-[45%] before:animate-[wave_5s_linear_infinite] after:rounded-[35%] after:bg-white/30 after:animate-[wave_5s_linear_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
