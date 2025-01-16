module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwindcss-filters"), // 추가: backdrop-filter 지원
  ],
};
