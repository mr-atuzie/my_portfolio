import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vid from "./pages/Vid";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Photos from "./pages/Photos";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videography" element={<Vid />} />
        <Route path="/photography" element={<Photos />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
