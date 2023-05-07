import React, { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import resume from "../assets/rex cv.pdf";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    { id: 3, link: "About" },
    { id: 4, link: "Certifications" },
    { id: 2, link: "portfolio" },
    { id: 5, link: "Contact Me" },
  ];

  return (
    <nav className=" flex justify-between items-center w-full h-20  px-4   bg-white">
      <div>
        <h1 className=" z-10 text-3xl lg:text-5xl font-semibold  ml-2">
          Rex atuzie
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => {
          return (
            <li
              key={id}
              className=" capitalize px-4 cursor-pointer font-medium  hover:scale-105 duration-200"
            >
              {link}
            </li>
          );
        })}
      </ul>

      <div className="hidden md:flex">
        <a
          className="  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
          href={resume}
          download
        >
          Download CV
        </a>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className=" cursor-pointer z-10 pr-4 md:hidden"
      >
        {nav ? <IoCloseOutline size={30} /> : <HiOutlineBars3 size={30} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center absolute items-center bg-gray-50 top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => {
            return (
              <li
                onClick={() => setNav(false)}
                key={id}
                className=" px-4 cursor-pointer capitalize py-4 text-xl  hover:scale-105 duration-200"
              >
                {link}
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
