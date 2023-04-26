import React from "react";
import { IoConstructOutline } from "react-icons/io5";
import { MdVerified } from "react-icons/md";

const Services = () => {
  // const skills = [
  //   "HTML",
  //   "CSS",
  //   "Javascript",
  //   "React Js",
  //   "Tailwind Css",
  //   "Redux",
  //   "Google Firebase",
  // ];

  const services = [
    "Implementing authentication and authorization systems for verifying claims securely.",
    "Designing and implementing database schemas",
    "Developing RESTful APIs and Integrating third-party APIs",
    "Experience in Debugging and testing of codes",
    "Writing reusable code that can be easily modified and updated as the application evolves.",
    "Proficient in using tools like Git & Github and also version control",
  ];

  const services2 = [
    "Implementing authentication and authorization systems for verifying claims securely.",
    "Designing and implementing database schemas",
    "Developing RESTful APIs and Integrating third-party APIs",
  ];

  return (
    <div name="services" className=" w-full">
      <div className="w-[90%] h-[1px] bg-gray-200 mx-auto my-5"></div>
      <div className="px-4 md:px-8 lg:px-12  ">
        <div className=" mb-4 flex justify-center items-center flex-col">
          <div className=" w-20 h-20 rounded-full bg-black text-gray-200 flex justify-center items-center">
            <IoConstructOutline size={40} />
          </div>

          <div className=" uppercase text-2xl text-center  font-bold">
            services
          </div>

          <p className=" text-gray-500 mt-2 text-center">
            These includes languages, framework , libaries and tools i use in
            building web apps and websites.
          </p>
        </div>

        <div className=" ">
          <div>
            <div className=" capitalize text-gray-700  font-medium">
              Skills & Tools
            </div>

            <div className=" flex flex-wrap mt-2">
              <p className="text-gray-500 capitalize">
                HTML, CSS, Javascript , React Js , Tailwind CSS , Redux ,
                Firebase
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between lg:flex-row">
            <div>
              <div className=" capitalize text-gray-700  my-4 font-medium">
                Here's what i can bring to your project
              </div>

              <div>
                {services.map((service, index) => {
                  return <SeviceCard key={index} service={service} />;
                })}
              </div>
            </div>
            <div>
              <div className=" capitalize text-gray-700  my-4 font-medium">
                Here's what i can bring to your project
              </div>

              <div>
                {services2.map((service, index) => {
                  return <SeviceCard key={index} service={service} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeviceCard = ({ service }) => {
  return (
    <div className="flex p-3 rounded-md  bg-gray-200 mb-2">
      <div className="mr-2  ">
        <MdVerified size={20} />
      </div>

      <p className="text-justify text-gray-500  mb-2 ">{service}</p>
    </div>
  );
};

export default Services;
