import React from "react";
import { BsLink45Deg } from "react-icons/bs";
// import { IoLogoGithub } from "react-icons/io5";
// import { TbExternalLink } from "react-icons/tb";
import realtor from "../assets/re.jpg";
import chat from "../assets/chat.jpg";
import biz from "../assets/biz.jpg";
import p1 from "../assets/p1.jpg";

const Portfolio = () => {
  // ZiltChat is  chatting website, where you can connect with people from all over the world! Our site provides a safe and friendly environment for you to chat with others, whether you're looking for new friends, a casual conversation, or a meaningful connection.You can create your own profile, upload photos, and start chatting instantly with our private messaging system.
  const portfolio = [
    {
      id: 1,
      name: "Chat App",
      img: chat,
      desc: "ZiltChat is  chatting app,  friendly environment for you to chat with others, whether you're looking for new friends, a casual conversation, or a meaningful connection.You can create your own profile, upload photos, and start chatting instantly with our private messaging system. ",
      stack: ["Javascript", "React Js ", "Tailwind CSS", "Google Firebase"],
      github: "https://github.com/mr-atuzie/chatting_app",
      link: "https://main--golden-boba-1b00ba.netlify.app/",
    },
    {
      id: 2,
      name: "E-commerce App",
      img: "",
      desc: "E-commerce app,an online platform where businesses can sell their products and services to customers through the internet. The website include a shopping cart feature ,a secure payment gateway that allows customers to make payments",
      stack: ["Javascript", "React Js ", "Tailwind CSS", "Redux"],
      github: "https://github.com/mr-atuzie/e-commerce",
      link: "https://scintillating-gumdrop-389a23.netlify.app/",
    },
    {
      id: 4,
      name: "Listing/ Rent App",
      img: realtor,
      desc: "Realtor a real estate listings website that allows homeowners, real estate agents, and developers to list and advertise properties for sale or rent. These sites provide a central location where potential buyers or renters can browse through available properties, view photos, and contact the seller or agent for more information.",
      stack: ["Javascript", "React Js ", "Tailwind CSS"],
      github: "https://github.com/mr-atuzie/realtor",
      link: "https://whimsical-paletas-07010e.netlify.app/",
    },
    {
      id: 5,
      name: "Business Portfolio",
      img: biz,
      desc: "A business site /online platform that allows businesses to showcase their products or services, interact with customers, and conduct transactions. These sites provide a central location where potential customers can learn more about the business, view products or services, and make purchases or inquiries.",
      stack: ["Javascript", "React Js ", "Tailwind CSS"],
      github: "https://github.com/mr-atuzie/edge",
      link: "https://splendorous-smakager-d3f3b4.netlify.app/",
    },
    {
      id: 3,
      name: "Exams App",
      img: "",
      desc: "A computer base test application for writing multiple exams , getting instanst results , grading user performance and also sending certification to user email",
      stack: ["Javascript", "React Js ", "Tailwind CSS", "Redux"],
      github: "https://github.com/mr-atuzie/cbt",
      link: "https://endearing-otter-5dbb9f.netlify.app/",
    },

    {
      id: 6,
      name: "Business Portfolio (landing page)",
      img: p1,
      desc: " Super is a subscription service that provides care and repaire for your home.",
      stack: ["Javascript", "React Js ", "Tailwind CSS"],
      github: "https://github.com/mr-atuzie/super_landing-page",
      link: "https://genuine-flan-11fc86.netlify.app/",
    },
  ];
  return (
    <div name="portfolio" className=" py-10 w-full">
      <div className="  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4 ">
          <div>
            <div className=" font-semibold text-2xl">PORTFOLIO</div>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>

          <p className=" mt-2  text-gray-500">
            These are some of the projects I've been working on lately
          </p>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolio.map(({ id, img, name, desc, github, link }) => {
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
      </div>
    </div>
  );
};

const PortfolioCard = ({ img, name, desc, github, link }) => {
  return (
    <div className="border rounded-lg border-gray-300   group  duration-200">
      <div className=" w-full relative">
        <a className=" " href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={
              img === ""
                ? "https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"
                : img
            }
            className=" w-full h-[300px] object-cover object-top"
            alt=""
          />
        </a>
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
