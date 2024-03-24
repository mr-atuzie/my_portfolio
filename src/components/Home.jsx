import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/jerry.png";

const Home = () => {
  return (
    <div
      id="home"
      name="home"
      className=" flex items-center justify-center flex-col lg:h-[80vh] w-full"
    >
      <motion.img
        src={heroImg}
        className="w-[300px] lg:w-[300px] h-[300px] lg:h-[300px] rounded-full object-cover"
        alt="porfolioImg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      />
      <div className=" font-medium lg:text-lg capitalize">
        Hi, I'm Jeremiah mbinye
      </div>
      <h1 className="  text-xl font-extrabold lg:text-6xl">
        CINEMATOGRAPHER/VIDEO EDITOR
      </h1>
      <div className="  text-center text-gray-400  my-2  font-medium text-xs lg:text-sm">
        Adobe Premire Pro/ After Effect/ Davince Resolve/ Cap cut /Adobe
        Photoshop
      </div>
      <p className=" w-[90%] mx-auto text-sm leading-7 text-gray-500 lg:px-4 lg:max-w-2xl lg:text-center ">
        Step into the realm of visual storytelling, where every frame holds the
        power to captivate, evoke emotions, and transport viewers to realms
        beyond imagination. Meet the maestro behind the lens, the architect of
        mesmerizing narratives – the enigmatic video editor and cinematographer.
      </p>
    </div>
  );
};

export default Home;
