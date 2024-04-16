import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vid from "./pages/Vid";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Admin from "./pages/Admin";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videography" element={<Vid />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App;
