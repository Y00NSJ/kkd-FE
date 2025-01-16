import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateDreamPage from "./pages/CreateDreamPage";
import PlayVideoPage from "./pages/PlayVideoPage";
import ListDreamPage from "./pages/ListDreamPage";
import ListFriendPage from "./pages/ListFriendPage";

// 인증된 경로를 보호하는 컴포넌트
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 상태 확인
  useEffect(() => {
    const accessToken = localStorage.getItem("access");
    setIsLoggedIn(!!accessToken); // access 토큰 존재 여부로 로그인 상태 설정
  }, []);

  return (
    <Router>
      <Routes>
        {/* 홈 경로 */}
        <Route
          path="/"
          element={
            <HomePage
              onLogin={() => setIsLoggedIn(true)}
              onLogout={() => setIsLoggedIn(false)}
            />
          }
        />
        {/* 인증된 경로 */}
        <Route
          path="/dreams/write/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CreateDreamPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dreams/view/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <PlayVideoPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dreams/list/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ListDreamPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends/list/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ListFriendPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
