import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";

function Navigation() {
  return (
    <>
      <p>Hello</p>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
}

export default Navigation
