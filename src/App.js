import "./styles2.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
