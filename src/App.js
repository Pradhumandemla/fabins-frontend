import "./styles.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Register from "./views/Register";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Dashboard />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
