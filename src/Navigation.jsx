import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage.jsx";
import Header from "./components/header/Header.jsx";
import style from "./assets/main.module.scss"


function Navigation() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default Navigation
