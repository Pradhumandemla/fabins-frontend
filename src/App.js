import "./styles2.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import dotenv from "dotenv";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";

// if (process.env.NODE_ENV === "production") {
//   dotenv.config({ path: "/.env.production" });
// } else {
//   dotenv.config({ path: "/.env.development" });
//   // only for code sandbox editor
//   process.env.REACT_APP_URL = window.location.href;
//   process.env.REACT_APP_PUBLIC_URL = window.location.href + "public";
// }
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
