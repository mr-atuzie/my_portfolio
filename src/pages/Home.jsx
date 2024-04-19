import React from "react";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
// import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
};

export default Home;
