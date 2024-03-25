import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import resume from "../assets/cv.pdf";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import logo from "../assets/jerry.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 3, link: "About" },
    { id: 2, link: "projects" },
    { id: 5, link: "Contact Me" },
  ];

  return (
    <motion.nav
      className=" flex justify-between items-center w-full h-20  px-4   bg-white"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, type: "tween" }}
    >
      <div className="flex items-center gap-1">
        <img
          className="w-12 h-12 rounded-full object-cover"
          src={logo}
          alt=""
        />
        <h1 className=" text-sm uppercase  font-semibold ">Jeremiah mbinye</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" capitalize px-4 cursor-pointer font-medium  hover:scale-105 duration-200"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex">
        <a
          className=" rounded-full  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
          href={resume}
          download
        >
          Download Resume
        </a>
      </div>

      <button
        onClick={() => setNav(!nav)}
        className=" border shadow-md p-1 bg-white rounded-md lg:hidden z-50"
      >
        {nav ? <IoCloseOutline size={25} /> : <HiOutlineBars3 size={25} />}
      </button>

      {nav && (
        <div className=" z-30 duration-300 flex flex-col fixed  shadow-md bg-gray-50 top-0 right-0  w-[90vw] h-screen">
          <div className=" bg-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-1">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={logo}
                alt=""
              />
              <h1 className=" uppercase  text-sm lg:text-5xl font-semibold ">
                Jeremiah mbinye
              </h1>
            </div>
            {/* <div
              onClick={() => setNav(!nav)}
              className=" cursor-pointer  p-4 md:hidden"
            >
              {nav ? (
                <IoCloseOutline size={30} />
              ) : (
                <HiOutlineBars3 size={30} />
              )}
            </div> */}
          </div>
          <ul className=" mt-8 ">
            {links.map(({ id, link }) => {
              return (
                <li
                  key={id}
                  className=" px-4 cursor-pointer capitalize  mb-4  hover:scale-105 duration-200"
                >
                  <Link
                    onClick={() => setNav(false)}
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            className=" m-4 rounded-full text-center  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
            href={resume}
            download
          >
            Download Resume
          </a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
