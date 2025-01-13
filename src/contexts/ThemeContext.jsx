import React, { createContext, useState, useContext } from "react";

// Context 생성
const ThemeContext = createContext();

// ThemeProvider 생성
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 커스텀 훅 생성
export const useTheme = () => useContext(ThemeContext);
