import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact Me" name="contact" className=" py-10 w-full">
      <div className="  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4 ">
          <div>
            <div className="  font-semibold text-xl lg:text-2xl">
              CONTACT ME
            </div>
            <div className="w-[70px] rounded-lg h-[4px] bg-green-600"></div>
          </div>

          <p className=" mt-2 text-xs lg:text-base  text-gray-500 ">
            Have a project for me ? Let's connect
          </p>

          <div className=" flex  gap-4 justify-center mt-2">
            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href=" https://twitter.com/IkwerreG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillEnvelopeFill size={20} />
              </a>
            </div>

            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href=" https://twitter.com/IkwerreG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillEnvelopeFill size={20} />
              </a>
            </div>

            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href=" https://twitter.com/IkwerreG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillEnvelopeFill size={20} />
              </a>
            </div>

            <div className=" w-[40px] h-[40px] bg-black rounded-full text-center flex justify-center items-center">
              <a
                className=" text-white flex items-center gap-1 "
                href=" https://twitter.com/IkwerreG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillEnvelopeFill size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
