import React, { useState } from "react";
import { BsLink45Deg } from "react-icons/bs";
// import { IoLogoGithub } from "react-icons/io5";
// import { TbExternalLink } from "react-icons/tb";
// import chat from "../assets/chat.jpg";
// import biz from "../assets/biz.jpg";
// import p1 from "../assets/p1.jpg";
import { webPortfolio } from "../data";

const Portfolio = () => {
  const [page, setPage] = useState("web");
  // ZiltChat is  chatting website, where you can connect with people from all over the world! Our site provides a safe and friendly environment for you to chat with others, whether you're looking for new friends, a casual conversation, or a meaningful connection.You can create your own profile, upload photos, and start chatting instantly with our private messaging system.

  return (
    <div name="portfolio" className=" py-10 w-full">
      <div className=" mb-5  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4  lg:mb-7">
          <div>
            <div className=" font-semibold text-2xl">PORTFOLIO</div>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>

          <p className=" mt-2 lg:mt-4  text-gray-500">
            These are some of the projects I've been working on lately
          </p>

          <div className="flex justify-center items-center my-4">
            <div
              onClick={() => setPage("web")}
              className=" flex cursor-pointer flex-col justify-center mr-6 items-center"
            >
              <p className=" mt-2 font-medium ">Web Apps</p>
              {page === "web" && (
                <div className="w-[50px] rounded-lg h-[4px] bg-blue-500"></div>
              )}
            </div>
            <div
              onClick={() => setPage("mobile")}
              className=" flex cursor-pointer flex-col justify-center items-center"
            >
              <p className=" mt-2 font-medium ">Mobile Apps</p>
              {page === "mobile" && (
                <div className="w-[50px] rounded-lg h-[4px] bg-blue-500"></div>
              )}
            </div>
          </div>
        </div>

        {page === "web" ? (
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
            {webPortfolio.map(({ id, img, name, desc, github, link }) => {
              return (
                <PortfolioCard
                  key={id}
                  img={img}
                  name={name}
                  github={github}
                  desc={desc}
                  link={link}
                />
              );
            })}
          </div>
        ) : (
          <div className=" w-full text-center justify-center items-center italic text-gray-400">
            Work in Progress, Please Go Back 🛠️
          </div>
        )}
      </div>
    </div>
  );
};

const PortfolioCard = ({ img, name, desc, github, link }) => {
  return (
    <div
      id="projects"
      className="border-4 rounded-lg border-gray-200  shadow-md  group  duration-200"
    >
      <div className=" w-full relative">
        {/* <a className=" " href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={
              img === ""
                ? "https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"
                : img
            }
            className=" w-full h-[300px] object-cover object-top"
            alt=""
          />
        </a> */}
        {/* <div className="hidden group-hover:flex w-full h-full bg-black opacity-20   z-10  absolute top-0 bottom-0 duration-200"></div>

        <div className="hidden group-hover:flex  w-full h-full   z-20 absolute top-0 bottom-0  justify-center items-center duration-200">
          <div className=" w-10 h-10 rounded-full flex items-center text-gray-900 justify-center   bg-white mr-3">
            <IoLogoGithub size={30} />
          </div>
          <div className=" w-10 h-10 rounded-full flex items-center text-gray-900 justify-center    bg-white">
            <TbExternalLink size={30} />
          </div>
        </div> */}
      </div>

      <div className={" p-2 lg:p-4 "}>
        <div className=" my-3">
          <h3 className=" text-lg font-medium text-gray-700 capitalize">
            {name}
          </h3>

          {/* <div className=" flex gap-2 items-center my-1">
            <h3 className=" font-medium capitalize">stack:</h3>

            {stack.map((s) => {
              return <p className=" text-sm text-gray-700 mr-1">{s}</p>;
            })}
          </div> */}

          <p className="text-gray-500 text-sm lg:text-base mt-2 ">{desc}</p>

          <div className=" flex gap-5 mt-4">
            <a
              className=" text-sm lg:text-base flex gap-2 items-center  rounded-full  bg-black text-white px-4 py-2 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLink45Deg />
              Use Demo
            </a>
            <a
              className=" text-sm lg:text-base flex gap-2 items-center  rounded-full  bg-black text-white px-4 py-2 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLink45Deg />
              See Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
