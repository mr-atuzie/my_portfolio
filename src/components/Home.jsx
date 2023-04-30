import React from "react";
import heroImg from "../assets/me.jpg";

const Home = () => {
  // bg-gradient-to-b from-white via-white to-purple-100
  return (
    <div
      name="home"
      className=" flex items-center justify-center flex-col h-[80vh] w-full"
    >
      <img
        src={heroImg}
        className="w-[300px] h-[300px] rounded-full object-cover"
        alt=""
      />

      <div className=" font-medium text-lg capitalize">Hi I'm rex atuzie</div>
      <h1 className="  text-3xl font-extrabold lg:text-6xl">
        FRONTEND DEVELOPER
      </h1>
      <div className=" text-gray-400  my-2  font-medium text-sm">
        JavaScript | React Js | Tailwind CSS | Redux | Firebase
      </div>

      <p className=" leading-7 text-gray-600 px-4 lg:max-w-2xl ">
        Hello and welcome to my portfolio👋 I am a passionate about creating
        beautiful and user-friendly web applications and also understanding the
        needs and goals of my clients and ensuring that the final product
        exceeds expectations.
      </p>
    </div>
  );
};

export default Home;
