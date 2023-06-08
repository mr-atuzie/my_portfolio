import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/me.jpg";

const Home = () => {
  //   // bg-gradient-to-b from-white via-white to-purple-100
  //   mplementing authentication and authorization systems for verifying claims securely.
  // ✅Designing and implementing database schemas. ✅Top notch experience in developing RESTful APIs. ✅Ability to quickly Integrating third-party APIs ✅Experience in Debugging and testing of codes. ✅Writing reusable code that can be easily modified and updated as the application evolves.
  // ✅ Proficient in using tools like Git & Github and also version control. and also.
  return (
    <div
      id="home"
      name="home"
      className=" flex items-center justify-center flex-col lg:h-[80vh] w-full"
    >
      <motion.img
        src={heroImg}
        className="w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] rounded-full object-cover"
        alt="porfolioImg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      />
      <div className=" font-medium text-lg capitalize">Hi I'm rex atuzie</div>
      <h1 className="  text-3xl font-extrabold lg:text-6xl">
        FRONTEND DEVELOPER
      </h1>
      <div className="  text-center text-gray-400  my-2  font-medium text-xs lg:text-sm">
        JavaScript | React Js | Tailwind CSS | Typescrpit
      </div>
      <p className=" w-[90%] mx-auto text-sm leading-7 text-gray-500 lg:px-4 lg:max-w-2xl lg:text-center ">
        Hello 👋 and welcome to my portfolio I am a Highly motivated and skilled
        JavaScript Frontend Developer seeking an internship opportunity to apply
        my knowledge and expertise in building modern and responsive web
        applications. Committed to creating exceptional user experiences and
        collaborating with cross-functional teams to deliver high-quality
        software solutions.
      </p>
      {/* passionate about coding and i love focusing on the functionalities of web
      applications and i'm also keen on understanding the needs and goals of my
      clients and ensuring that the final product exceeds expectations. */}
    </div>
  );
};

export default Home;
