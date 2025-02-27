import { useState } from "react";
import Modal from "../components/Modal";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import { login } from "../api/auth";

const PreLoginScreen = ({ onLogin, backgroundClass }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLogin = async (username, password) => {
    try {
      const data = await login(username, password); // Django 로그인 API 호출
      localStorage.setItem("access", data.access);
      localStorage.setItem("refresh", data.refresh);
      setIsLoginOpen(false); // 로그인 성공 후 모달 닫기
      onLogin(); // 부모(HomePage)에서 로그인 상태 업데이트
    } catch (error) {
      alert("아이디와 비밀번호를 확인하세요.");
    }
  };

  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-5xl font-bold text-white mb-12 text-center animate-pulse">
        Create Your Dream World
      </h1>
      <div className="flex flex-col gap-6 items-center">
        <button onClick={() => setIsSignupOpen(true)} className="btn-primary">
          Sign Up
        </button>
      </div>
      <div className="flex flex-col gap-6 items-center">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="hover:shadow-lg px-12 py-4 hover:scale-105 transition-all login-button"
        >
          <span>Login</span>
        </button>
      </div>

      <Modal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        backgroundClass={backgroundClass}
      >
        <SignupForm onSubmit={() => setIsSignupOpen(false)} />
      </Modal>

      <Modal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        backgroundClass={backgroundClass}
      >
        <LoginForm onSubmit={handleLogin} />
      </Modal>
    </main>
  );
};
export default PreLoginScreen;
