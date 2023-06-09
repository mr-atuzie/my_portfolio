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
        <p className=" text-gray-600 leading-7 text-sm">
          I'm a frontend developer with almost a year of experience in the
          industry. with a Udemy certification in web development. I have a
          passion for creating engaging and functional web experiences and enjoy
          bringing ideas to life in the browser.
        </p>

        <p className=" text-gray-600 my-7 text-sm leading-7">
          My technical skill set includes proficiency in{" "}
          <span className=" text-blue-600">HTML</span> ,{" "}
          <span className=" text-blue-600">CSS</span> and
          <span className=" text-blue-600"> JavaScript.</span> I am particularly
          skilled in working with JavaScript frameworks such as{" "}
          <span className=" text-blue-600"> React Js</span> , I'm also
          experienced in using{" "}
          <span className=" text-blue-600"> Typscript </span> and other popular
          frontend libaries like{" "}
          <span className=" text-blue-600"> Tailwind CSS </span> ,{" "}
          <span className=" text-blue-600"> Redux</span> as well as{" "}
          <span className=" text-blue-600"> Git</span> for version control . as
          while
          <span className=" text-blue-600">
            {" "}
            Integration of third party API's{" "}
          </span>
          ,
          <span className=" text-blue-600">
            Ensure cross browser and cross-platform compatibility{" "}
          </span>
          and building{" "}
          <span className=" text-blue-600">Responsive web applications</span> to
          fit any screen size. Im also have experience working with{" "}
          <span className=" text-blue-600"> Google Firebase </span> for backend
          cloud computing services It hosts databases, authentication e.t.c,
        </p>

        <p className=" text-sm text-gray-600 leading-7">
          In addition to my technical expertise,I'm committed to staying
          up-to-date with the latest industry trends and technologies, and I'm
          always looking for new ways to improve my skills. I have experience
          collaborating with designers, project managers, and other stakeholders
          to ensure that projects are delivered on time and meet the needs of
          clients and end-users. I'm a strong communicator and problem-solver,
          and I'm always looking for opportunities to learn and grow as a
          developer.
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
