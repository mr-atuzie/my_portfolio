import React from "react";
import resume from "../assets/cv.pdf";
import { motion } from "framer-motion";

const About = () => {
  // const [more, setMore] = useState(false);

  return (
    <motion.div
      id="About"
      name="about"
      className=" w-full  bg-gray-50 py-2 rounded-t-3xl  "
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", delay: 0.5 }}
    >
      <div className=" w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" my-4">
          <div className=" font-semibold text-xl lg:text-2xl">ABOUT ME</div>
          <div className="w-[70px] rounded-lg h-[4px] bg-red-600"></div>
        </div>
        <p className=" text-gray-600 leading-7 text-sm lg:text-base">
          An artist's eye and a technician's precision, they weave together a
          tapestry of sights and sounds that transcend mere footage. Each edit
          is a brushstroke, meticulously crafted to paint a vivid picture that
          resonates with audiences long after the screen fades to black.
        </p>

        <p className=" text-gray-600 mt-5 text-sm lg:text-base leading-7">
          With a BSc. Degree in Economics from the prestigious University of
          Port Harcourt and over 9 years of mastering the art of visual
          storytelling with the various softwares provided, I have been
          privileged in handling various projects for various organizations and
          also being able to carry out the role as Team Lead in diverse
          capacity.
        </p>

        <p className=" text-sm mt-5 text-gray-600 leading-7 lg:text-base">
          it's not just about technical prowess; it's about storytelling
          prowess. Behind every seamless cut lies a deep understanding of
          narrative structure and emotional resonance. They are the architects
          of emotion, sculpting arcs of tension and release that keep viewers on
          the edge of their seats.
        </p>

        <p className=" text-sm mt-5 text-gray-600 leading-7 lg:text-base">
          In the fast-paced world of visual media, they are the unsung heroes,
          tirelessly perfecting their craft to bring dreams to life on the
          silver screen. Their passion fuels their relentless pursuit of
          excellence, pushing boundaries and redefining what's possible with
          every project they undertake.
        </p>

        <p className=" text-sm text-gray-600 mt-5 leading-7 lg:text-base">
          So, if you find yourself transported to distant galaxies, swept away
          by epic adventures, or moved to tears by a poignant moment – remember,
          it's the magic of the video editor and cinematographer at work,
          shaping reality into something truly extraordinary.
        </p>

        <a
          className=" block rounded-full my-8 text-center mx-auto lg:max-w-lg  bg-black text-white px-4 py-3 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
          href={resume}
          download
        >
          Download Resume
        </a>
      </div>
    </motion.div>
  );
};

export default About;
