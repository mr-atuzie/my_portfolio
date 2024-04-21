import React, { useState } from "react";
// import Navbar from "../components/Navbar";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
// import Contact from "../components/Contact";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/v1/jerry-portfolio/`;

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [photos, setPhotos] = useState([]);

  const getVideos = async () => {
    const res = await axios.get(API_URL + "video");
    setVideos(res.data);
  };

  const getPhotos = async () => {
    const res = await axios.get(API_URL + "photo");

    setPhotos(res.data);
  };

  useEffect(() => {
    getVideos();
    getPhotos();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <Portfolio videos={videos} photos={photos} />
      <Contact />
    </>
  );
};

export default Home;
