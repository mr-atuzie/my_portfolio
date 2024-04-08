import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Vid from "./pages/Vid";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videography" element={<Vid />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
}

export default App;
