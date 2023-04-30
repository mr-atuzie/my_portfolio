import React from "react";

const About = () => {
  // const [more, setMore] = useState(false);

  return (
    <div name="about" className=" w-full   ">
      <div className=" w-[85%] lg:w-[70%] mx-auto h-full  ">
        <div className=" font-semibold text-2xl mb-4">ABOUT ME</div>
        <p className=" text-gray-600 leading-7">
          Hello, I'm Rex, a frontend developer with 1 years of experience in the
          industry. I have a passion for creating engaging and functional web
          experiences and enjoy bringing ideas to life in the browser.
        </p>

        <p className=" text-gray-600 my-2 leading-7">
          My technical skill set includes proficiency in HTML, CSS, JavaScript.
          I am particularly skilled in working with JavaScript frameworks such
          as React Js and other popular frontend frameworks like Tailwind CSS ,
          Redux as well as Integration of third party API's , CI/CD . I also
          have experience working with Google Firebase for backend cloud
          computing services It hosts databases, authentication e.t.c, I'm
          committed to staying up-to-date with the latest industry trends and
          technologies, and I'm always looking for new ways to improve my
          skills.
        </p>

        <p className=" text-gray-600 leading-7">
          In addition to my technical expertise, I have experience collaborating
          with designers, project managers, and other stakeholders to ensure
          that projects are delivered on time and meet the needs of clients and
          end-users. I'm a strong communicator and problem-solver, and I'm
          always looking for opportunities to learn and grow as a developer.
        </p>

        <div className=" mt-6">
          <div className=" font-bold  uppercase text-xl mb-4">
            Certifications
          </div>
          <div className=" flex flex-wrap gap-5">
            <img
              className=" w-[600px] border-2 shadow-md object-contain"
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-25731b3f-cd56-40f0-b9d9-7c7c838a77f9.jpg"
              alt=""
            />

            <img
              className=" border-2 shadow-md w-[600px] object-contain"
              src="https://udemy-certificate.s3.amazonaws.com/image/UC-2da733da-5a9d-4ba6-a047-463e059af816.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
