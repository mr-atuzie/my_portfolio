import About from "./components/About";
import Cert from "./components/Cert";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
// import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Cert />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
