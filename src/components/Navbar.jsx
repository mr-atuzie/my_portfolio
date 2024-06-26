import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import resume from "../assets/cv.pdf";
import { motion } from "framer-motion";
import logo from "../assets/jerry.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "/", name: "home" },
    { id: 6, link: "/videography", name: "videography" },
    { id: 7, link: "/photography", name: "photography" },
    // { id: 2, link: "/login", name: "Admin" },
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
        {links.map(({ id, link, name }) => {
          return (
            <li
              key={id}
              className=" capitalize px-4 cursor-pointer font-medium  hover:scale-105 duration-200"
            >
              <Link to={link}>{name}</Link>
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
        <div className=" z-30 duration-300 flex flex-col fixed  shadow-md bg-gray-50 top-0 right-0  w-[90%] h-screen">
          <ul className=" mt-16 ">
            {links.map(({ id, link, name }) => {
              return (
                <li
                  key={id}
                  className=" px-4 text-sm font-medium cursor-pointer capitalize  mb-4  hover:scale-105 duration-200"
                >
                  <Link onClick={() => setNav(false)} to={link}>
                    {name}
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
          <Link className="px-5 mt-60" to={"/login"}>
            <button className="  rounded-full w-full text-center  bg-red-500 text-white px-4 py-3 capitalize hover:bg-white hover:text-red-600 hover:border-2 hover:border-red-500 ">
              Admin Only
            </button>
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
