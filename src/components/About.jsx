import React from "react";
import resume from "../assets/rex cv.pdf";
const About = () => {
  // const [more, setMore] = useState(false);

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
    <div name="about" className=" w-full   ">
      <div className=" w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" my-4">
          <div className=" font-semibold text-2xl">ABOUT ME</div>
          <div className="w-[70px] rounded-lg h-[4px] bg-red-600"></div>
        </div>
        <p className=" text-gray-600 leading-7">
          I'm a frontend developer with 2 years of experience in the industry. I
          have a passion for creating engaging and functional web experiences
          and enjoy bringing ideas to life in the browser.
        </p>

        <p className=" text-gray-600 my-7 leading-7">
          My technical skill set includes proficiency in{" "}
          <span className=" text-blue-600">HTML</span> ,{" "}
          <span className=" text-blue-600">CSS</span> and
          <span className=" text-blue-600"> JavaScript.</span> I am particularly
          skilled in working with JavaScript frameworks such as{" "}
          <span className=" text-blue-600"> React Js</span> and other popular
          frontend frameworks like{" "}
          <span className=" text-blue-600"> Tailwind CSS </span> ,{" "}
          <span className=" text-blue-600"> Redux</span> as well as{" "}
          <span className=" text-blue-600"> Git - Version control </span>,
          <span className=" text-blue-600">
            {" "}
            Integration of third party API's{" "}
          </span>
          ,
          <span className=" text-blue-600">
            {" "}
            Ensure cross browser and cross-platform compatibility
          </span>
          , <span className=" text-blue-600"> CI/CD </span>. I also have
          experience working with{" "}
          <span className=" text-blue-600"> Google Firebase </span> for backend
          cloud computing services It hosts databases, authentication e.t.c,
        </p>

        <p className=" text-gray-600 leading-7">
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
            className="  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
            href={resume}
            download
          >
            Download CV
          </a>
        </div>

        <div className=" mt-20">
          <div className="mb-6">
            <div className=" font-semibold  uppercase text-2xl">
              Certifications
            </div>
            <div className="w-[100px] rounded-lg h-[4px] bg-purple-600"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certificate.map((cert, index) => {
              return (
                <a
                  className="  flex items-center  capitalize"
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div className="">
                    <img
                      className=" w-[600px] border-2 shadow-md object-contain"
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
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
