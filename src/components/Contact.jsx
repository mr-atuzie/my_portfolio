import React from "react";
// import { IoMdPaperPlane } from "react-icons/io";

const Contact = () => {
  return (
    <div name="contact" className=" py-10 w-full">
      <div className="  w-[85%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4 ">
          <div>
            <div className="  font-semibold text-2xl">CONTACT ME</div>
            <div className="w-[70px] rounded-lg h-[4px] bg-green-600"></div>
          </div>

          <p className=" mt-2  text-gray-500 ">
            Have a project for me ? or just want to say Hi? Just send me an
            email 😊
          </p>

          <div className=" flex items-center gap-4 lg:gap-0 lg:items-start mt-6 justify-center lg:justify-between">
            <div>
              <h2 className=" text-gray-600">Email:</h2>
              <p className=" text-lg text-blue-600">rexatuzie@gmail.com</p>
            </div>

            <div className=" text-lg text-blue-600">Twitter</div>

            <div className=" text-lg text-blue-600">LinkedIn</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
