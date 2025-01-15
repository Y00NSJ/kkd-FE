import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateDreamPage from "./pages/CreateDreamPage";
import PlayVideoPage from "./pages/PlayVideoPage";
import ListDreamPage from "./pages/ListDreamPage";
import ListFriendPage from "./pages/ListFriendPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dreams/write/" element={<CreateDreamPage />} />
        <Route path="/dreams/view/" element={<PlayVideoPage />} />
        <Route path="/dreams/list/" element={<ListDreamPage />} />
        <Route path="/friends/list/" element={<ListFriendPage />} />
      </Routes>
    </Router>
  );
}

export default App;
