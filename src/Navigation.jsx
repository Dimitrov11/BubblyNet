import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import Header from "./components/header/Header.jsx";
import style from "./assets/main.module.scss"
import RegisterPage from "./pages/Register/RegisterPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";

function Navigation() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>} />

        <Route path="/register" element={<RegisterPage/>} />

        <Route path="/login" element={<LoginPage/>} />
      </Routes>
    </>
  );
}

export default Navigation
