import React from "react";
import resume from "../assets/ar.pdf";
import { motion } from "framer-motion";

const About = () => {
  // const [more, setMore] = useState(false);

  return (
    <motion.div
      id="About"
      name="about"
      className=" w-full   "
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
    >
      <div className=" w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" my-4">
          <div className=" font-semibold text-2xl">ABOUT ME</div>
          <div className="w-[70px] rounded-lg h-[4px] bg-red-600"></div>
        </div>
        <p className=" text-gray-600 leading-7 text-sm lg:text-base">
          I'm a MERN Stack Developer with a proven track record of building
          full-stack web applications using MongoDB, Express.js, React, and
          Node.js. With 2 years of hands-on experience, I specialize in creating
          scalable and responsive web solutions that provide exceptional user
          experiences. Proficient in both frontend and backend development, I
          excel at designing intuitive user interfaces, implementing robust
          APIs, and optimizing application performance.
        </p>

        <p className=" text-gray-600 my-7 text-sm lg:text-base leading-7">
          My technical skill set includes proficiency in{" "}
          <span className=" text-blue-600">HTML</span> ,{" "}
          <span className=" text-blue-600">CSS</span> and
          <span className=" text-blue-600"> JavaScript.</span> I am particularly
          skilled in working with JavaScript frameworks such as{" "}
          <span className=" text-blue-600"> React Js</span>
          {/* , I'm also
          experienced in using{" "} */}
          {/* <span className=" text-blue-600"> Typscript </span> and other popular
          frontend libaries like{" "} */}
          <span className=" text-blue-600"> Tailwind CSS </span> ,{" "}
          <span className=" text-blue-600"> Redux</span>
          {/* as well as{" "}
          <span className=" text-blue-600"> Git</span> for version control . as
          while
          <span className=" text-blue-600">
            {" "}
            Integration of third party API's{" "}
          </span> */}
          ,
          <span className=" text-blue-600">
            Ensure cross browser and cross-platform compatibility{" "}
          </span>
          and building{" "}
          <span className=" text-blue-600">Responsive web applications</span> to
          fit any screen size. Im also have experience working with{" "}
          {/* <span className=" text-blue-600"> Google Firebase </span>  */}
          {/* for backend cloud computing services It hosts databases,
          authentication e.t.c, */}
        </p>

        <p className=" text-sm text-gray-600 leading-7 lg:text-base">
          Foor backend Development,I am familar with server side tools like{" "}
          <span className=" text-blue-600">Node Js</span>,
          <span className=" text-blue-600">Express Js</span> for Building
          RESTFUL API'S and <span className=" text-blue-600">Mongo DB</span>. My
          passion for staying up-to-date with the latest technologies and best
          practices ensures that I can contribute effectively to any dynamic
          development team. Ready to leverage my expertise to drive innovation
          and deliver high-quality software solutions.
        </p>

        <div className=" mt-8">
          <a
            className=" rounded-full  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
            href={resume}
            download
          >
            Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
