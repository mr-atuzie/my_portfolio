import React from "react";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFillEnvelopeFill,
} from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact Me" name="contact" className=" py-10 w-full">
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

          <div className=" flex flex-col lg:flex-row items-start gap-6 lg:gap-0 lg:items-center mt-6 justify-start lg:justify-between">
            <div>
              <a
                className=" flex items-center gap-1 "
                href=" https://twitter.com/IkwerreG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFillEnvelopeFill size={20} />
                <div className=" text-lg text-blue-600">Email</div>
              </a>
            </div>

            <div>
              <a
                className=" flex items-center gap-1 "
                href=" https://twitter.com/IkwerreG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter size={20} />
                <div className=" text-lg text-blue-600">Twitter</div>
              </a>
            </div>

            <div>
              <a
                className=" flex items-center gap-1 "
                href="https://www.linkedin.com/in/rex-atuzie-0ab678205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin size={20} />
                <div className=" text-lg text-blue-600">LinkedIn</div>
              </a>
            </div>
            <div>
              <a
                className=" flex items-center gap-1 "
                href="https://www.linkedin.com/in/rex-atuzie-0ab678205/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub size={20} />
                <div className=" text-lg text-blue-600">Github</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
