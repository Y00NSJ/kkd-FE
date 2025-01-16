import React, { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, backgroundClass, children }) => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true);
    } else {
      setTimeout(() => setShowAnimation(false), 300);
    }
  }, [isOpen]);

  if (!isOpen && !showAnimation) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300 ${backgroundClass}`}
    >
      {/* 흐림 효과 추가 */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md transition-opacity duration-300"></div>
      {/* Modal Content */}
      <div
        className={`relative z-10 bg-gradient-to-br from-white/20 to-white/10 
                    backdrop-blur-lg p-8 rounded-lg w-96 shadow-lg transform transition-transform duration-300 ${
                      isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0"
                    }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
      {/* Background Decorations */}
      <div className="rounded-full h-40 w-40 absolute top-1/4 right-7 bg-gradient-to-br from-white to-transparent z-0"></div>
      <div className="rounded-full h-20 w-20 absolute bottom-1/3 right-1/3 bg-gradient-to-tl from-white to-transparent z-0"></div>
      <div className="bg-circles rounded-full h-10 w-10 absolute bottom-1/4 right-1/4 bg-gradient-to-b from-white to-transparent z-0"></div>
    </div>
  );
};

export default Modal;
