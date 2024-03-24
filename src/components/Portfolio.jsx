import React from "react";
// import { BsLink45Deg } from "react-icons/bs";
import { webPortfolio } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
  return (
    <div name="portfolio" className=" py-10 w-full">
      <div className=" mb-5  w-[95%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4  lg:mb-7">
          <div>
            <div className=" font-semibold text-xl lg:text-2xl">PORTFOLIO</div>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>

          <p className=" mt-2 lg:mt-4  text-gray-500">
            These are some of the projects I've been working on lately
          </p>
        </div>

        <section></section>

        <section>
          <div>
            <div className=" font-semibold  text-xl lg:text-2xl">
              Videography
            </div>

            <p className=" mb-2  capitalize text-gray-500">
              Documentaries ● Youtube content ● Movies ● Weddings ● After
              effects ● short films ● Reels ● Product/Brade ad.
            </p>
          </div>
        </section>
        <Swiper
          spaceBetween={10}
          slidesPerView={1.2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {webPortfolio.map(({ id, img }) => {
            return (
              <SwiperSlide>
                <PortfolioCard key={id} img={img} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

const PortfolioCard = ({ img }) => {
  return (
    <div id="projects" className="  shadow-md ">
      <iframe
        className="w-full h-[315px] rounded"
        src={img}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      {/* <div className=" p-2 lg:p-4 ">
        <div className=" my-3">
          <h3 className=" text-lg font-medium text-gray-700 capitalize">
            {name}
          </h3>

          <p className="text-gray-500 text-sm lg:text-base mt-2 ">{desc}</p>

          <div className=" flex gap-5 mt-4">
            <a
              className=" text-sm lg:text-base flex gap-2 items-center  rounded-full  bg-black text-white px-4 py-2 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLink45Deg />
              Use Demo
            </a>
            <a
              className=" text-sm lg:text-base flex gap-2 items-center  rounded-full  bg-black text-white px-4 py-2 capitalize hover:bg-white hover:text-black hover:border-2 hover:border-black "
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLink45Deg />
              See Code
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Portfolio;
