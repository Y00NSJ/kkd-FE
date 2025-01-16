import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DreamForm = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState(""); // 입력된 텍스트 상태
  const [loading, setLoading] = useState(false); // 로딩 상태

  const handleGenerateDream = async () => {
    if (!content.trim()) {
      alert("내용을 입력해주세요!");
      return;
    }

    console.log("Request Payload:", { title: "My Dream Title", content });
    console.log("Access Token:", localStorage.getItem("access"));

    setLoading(true);
    navigate("/dreams/view/", { state: { isLoading: true } });

    try {
      const response = await axios.post(
        "http://localhost:8000/api/dreams/create/",
        { title: "My Dream Title", content },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access")}`,
          },
        }
      );
      console.log("Response Data:", response.data);

      const dreamId = response.data.id;
      navigate(`/dreams/view/${dreamId}`, { replace: true });
    } catch (error) {
      console.error("Error Response:", error.response);
      alert(
        error.response?.data?.error ||
          "Dream 생성 중 문제가 발생했습니다. 다시 시도해주세요."
      );
      navigate("/dreams/view/", { state: { isLoading: false, error: true } });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 relative overflow-hidden w-full max-w-4xl mx-auto">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-blue-500/5"></div>

      {/* 폼 내용 */}
      <div className="relative">
        {/* 텍스트 입력 필드 */}
        <textarea
          className="w-full h-40 bg-white/80 backdrop-blur rounded-2xl border-2 border-custom/20 focus:border-custom focus:ring focus:ring-custom/20 p-4 text-gray-700 placeholder-gray-400 resize-none"
          placeholder="자세히 설명할수록 실감나는 영상을 받아볼 수 있어요!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        {/* 버튼 그룹 */}
        <div className="flex justify-center mt-8">
          <button
            className={`!rounded-button bg-custom text-white px-8 py-3 text-lg font-medium transform transition hover:scale-105 ${
              loading ? "opacity-50 pointer-events-none" : "hover:bg-custom/90"
            }`}
            onClick={handleGenerateDream}
            disabled={loading}
          >
            <i className="fas fa-magic mr-2"></i>
            Generate Dream
          </button>
        </div>
      </div>
    </div>
  );
};

export default DreamForm;
