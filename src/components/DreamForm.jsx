import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DreamForm = () => {
  const navigate = useNavigate();

  const handleGenerateDream = () => {
    navigate("/dreams/view");
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
        ></textarea>

        {/* 버튼 그룹 */}
        <div className="flex justify-between items-center mt-6 space-x-4">
          {/* 이미지 추가 버튼 */}
          <button className="!rounded-button flex items-center space-x-2 bg-white/80 backdrop-blur px-6 py-3 border border-gray-200 hover:bg-white shadow-md">
            <i className="fas fa-camera text-custom"></i>
            <span>Add Image</span>
          </button>

          {/* 비어 있는 공간처럼 보이게 설정된 버튼 */}
          <button className="!rounded-button flex items-center space-x-2 bg-gray-100/50 backdrop-blur px-6 py-3 border border-gray-200 shadow-md pointer-events-none opacity-0">
            <i className="fas fa-plus-circle text-gray-400"></i>
            <span>Placeholder 1</span>
          </button>

          <button className="!rounded-button flex items-center space-x-2 bg-gray-100/50 backdrop-blur px-6 py-3 border border-gray-200 shadow-md pointer-events-none opacity-0">
            <i className="fas fa-plus-circle text-gray-400"></i>
            <span>Placeholder 2</span>
          </button>
        </div>

        {/* Dream 생성 버튼 */}
        <div className="flex justify-center mt-8">
          <button
            className="!rounded-button bg-custom text-white px-8 py-3 text-lg font-medium hover:bg-custom/90 transform transition hover:scale-105"
            onClick={handleGenerateDream}
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
