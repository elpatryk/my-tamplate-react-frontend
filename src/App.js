import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";

import SignUp from "./pages/SignUp";
import NewsPage from "./pages/NewsPage";
import LoginPage from "./pages/LoginPage";
import ArticlePage from "./components/ArticlePage";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<NewsPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/news/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
