import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact Me" name="contact" className=" py-5 lg:py-10 w-full">
      <div className="  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4 flex flex-col justify-center ">
          <div className=" flex flex-col justify-center w-full">
            <div className=" text-center  font-semibold text-xl lg:text-2xl">
              CONTACT ME
            </div>
            <div className="w-[70px] mx-auto rounded-lg h-[4px] bg-green-600"></div>
          </div>

          <p className=" mt-2 text-xs lg:text-base text-center  text-gray-500 ">
            Have a project for me ? Let's connect
          </p>

          <div className=" flex  gap-4 justify-center mt-2">
            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href="https://www.instagram.com/_jerry_chile?igsh=MXZyZXkxZ2t2Nzh5Yw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
            </div>

            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href="https://youtube.com/@JB_Visuals.?si=nsecgpQgLMTXLDRX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href=" https://twitter.com/Jeremiah_Chile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
            </div>

            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
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

          <p className=" text-center text-xs mt-2 font-medium">
            {" "}
            <span className=" uppercase text-xs font-semibold mr-1">
              Call / whatsapp
            </span>
            0703 802 4064
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
