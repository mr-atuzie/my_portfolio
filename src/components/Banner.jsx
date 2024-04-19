import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/jerry.png";
import { FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Banner = () => {
  return (
    <div
      id="home"
      name="home"
      className=" flex items-center justify-center flex-col lg:h-[80vh] w-full"
    >
      <motion.img
        src={heroImg}
        className="w-[250px] lg:w-[300px] h-[250px] lg:h-[300px] rounded-full object-cover"
        alt="porfolioImg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      />
      <div className=" font-semibold text-sm lg:text-lg capitalize">
        Hi, I'm Jeremiah mbinye
      </div>
      <h1 className="  font-extrabold lg:text-6xl">
        CINEMATOGRAPHER/VIDEO EDITOR
      </h1>
      <div className="  text-center text-gray-400  my-2  font-medium text-xs lg:text-sm">
        Adobe Premire Pro/ After Effect/ Davince Resolve/ Cap cut /Adobe
        Photoshop
      </div>
      <div className=" flex  gap-4 justify-center my-2">
        <div className=" w-[30px] h-[30px] bg-[#E1306C] rounded-full text-center flex justify-center items-center">
          <a
            className=" text-white flex items-center gap-1 "
            href="https://www.instagram.com/_jerry_chile?igsh=MXZyZXkxZ2t2Nzh5Yw%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        <div className=" w-[30px] h-[30px] bg-[#FF0000] rounded-full text-center flex justify-center items-center">
          <a
            className=" text-white flex items-center gap-1 "
            href="https://youtube.com/@JB_Visuals.?si=nsecgpQgLMTXLDRX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={20} />
          </a>
        </div>

        <div className=" w-[30px] h-[30px] bg-black rounded-full text-center flex justify-center items-center">
          <a
            className=" text-white flex items-center gap-1 "
            href=" https://twitter.com/Jeremiah_Chile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={20} />
          </a>
        </div>

        <div className=" w-[30px] h-[30px] bg-[#4267B2] rounded-full text-center flex justify-center items-center">
          <a
            className=" text-white flex items-center gap-1 "
            href="https://www.linkedin.com/in/jeremiah-chile-82825a19a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
      <p className=" text-center w-[90%] mx-auto text-sm leading-4  lg:px-4 lg:max-w-2xl lg:text-center ">
        Step into the realm of visual storytelling, where every frame holds the
        power to captivate, evoke emotions, and transport viewers to realms
        beyond imagination. Meet the maestro behind the lens, the architect of
        mesmerizing narratives – the enigmatic video editor and cinematographer.
      </p>
    </div>
  );
};

export default Banner;
