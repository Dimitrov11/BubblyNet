import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import Header from "./components/header/Header.jsx";
import style from "./assets/main.module.scss"
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import CreatePage from "./pages/Create/CreatePage.jsx";
import PostPage from "./pages/Post/PostPage.jsx";

function Navigation() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>} />

        <Route path="/register" element={<RegisterPage/>} />

        <Route path="/login" element={<LoginPage/>} />
                
        <Route path="/post/:id" element={<PostPage/>} />

        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </>
  );
}

export default Navigation
