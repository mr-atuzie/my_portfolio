import React from "react";
// import { BsLink45Deg } from "react-icons/bs";
import { photo, vid } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Portfolio = () => {
  return (
    <div name="portfolio" className=" py-10 w-full">
      <div className=" mb-5  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4  lg:mb-7">
          <div>
            <div className=" font-semibold text-xl lg:text-2xl">PORTFOLIO</div>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>

          <p className=" mt-2 lg:mt-4  text-gray-500">
            These are some of the projects I've been working on lately
          </p>
        </div>

        <section>
          <div>
            <div className=" font-semibold  text-xl lg:text-2xl">
              Videography
            </div>

            <h3 className=" mb-2 text-xs capitalize text-gray-600">
              ● Documentaries ● Youtube content ● Movies ● Weddings ●
              After-effects ● short films ● Reels ● Product/Brade ad.
            </h3>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={1.2}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {vid.map(({ id, img }) => {
              return (
                <SwiperSlide>
                  <PortfolioCard key={id} img={img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section className="mt-6">
          <div>
            <div className=" font-semibold  text-xl lg:text-2xl">
              Photography
            </div>

            <h3 className=" mb-2 text-xs capitalize text-gray-600">
              ● Product shot ● Model stot ● Wedding shot ● Drone shot
            </h3>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {photo.map(({ id, img }) => {
              return <PhotoCard key={id} img={img} />;
            })}
          </div>
        </section>
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
    </div>
  );
};

const PhotoCard = ({ img }) => {
  return (
    <div id="projects" className=" border  shadow-md ">
      <div className="  ">
        <img src={img} className="w-full h-[275px] object-cover" alt="" />
      </div>
    </div>
  );
};

export default Portfolio;
