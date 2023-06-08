import React from "react";
import { motion } from "framer-motion";

const Cert = () => {
  const certificate = [
    {
      img: "https://udemy-certificate.s3.amazonaws.com/image/UC-25731b3f-cd56-40f0-b9d9-7c7c838a77f9.jpg",
      link: "https://www.udemy.com/certificate/UC-25731b3f-cd56-40f0-b9d9-7c7c838a77f9/",
      desc: " React from the ground up to make dynamic websites (includes Context, Hooks, Reducers, Routing, Auth, Databases) ,",
    },
    {
      img: "https://udemy-certificate.s3.amazonaws.com/image/UC-2da733da-5a9d-4ba6-a047-463e059af816.jpg",
      link: "https://www.udemy.com/certificate/UC-2da733da-5a9d-4ba6-a047-463e059af816/",
      desc: "Firebase, How to perform CRUD Operations ,How to Handle Authentication using Email and Password, using Google Account,How to store files in Firebase Storage, How to listen to real-time database updates,How to listen to real-time auth changes , How to handle errors and success messages. and How to deploy an application to Firebase",
    },
  ];
  return (
    <div id="Certifications" className=" w-[90%] lg:w-[70%] mx-auto h-full  ">
      {" "}
      <div className=" mt-20">
        <div className="mb-8">
          <div className=" font-semibold  uppercase text-2xl">
            Certifications
          </div>
          <div className="w-[70px] rounded-lg h-[4px] bg-purple-600"></div>
          <p className=" mt-2  text-gray-500 ">
            Here are some of my qualifications in my field
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {certificate.map((cert, index) => {
            return (
              <motion.a
                className="  flex items-center  capitalize"
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                whileHover={{ scale: 1.1 }}
              >
                <div className="">
                  <img
                    className="  border-2 shadow-md object-contain"
                    src={cert.img}
                    alt=""
                  />
                  {/* <p className=" w-[600px] text-sm text-gray-500 mt-2 ">
                <span className="">
                  {" "}
                  {index + 1}. {cert.desc}
                </span>
              </p> */}
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Cert;
