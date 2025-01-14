import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateDreamPage from "./pages/CreateDreamPage";
import PlayVideoPage from "./pages/PlayVideoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dreams/create/" element={<CreateDreamPage />} />
        <Route path="/dreams/view/" element={<PlayVideoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
