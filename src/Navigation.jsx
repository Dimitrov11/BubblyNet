import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/HomePage.jsx";

function HomePage() {
  return (
    <>
      <p>Hello</p>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default HomePage
