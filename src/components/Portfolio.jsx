import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const Portfolio = ({ photos, videos }) => {
  return (
    <div name="portfolio" className=" bg-gray-50 py-10 w-full">
      <div className=" mb-5  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div className=" mb-4  lg:mb-7">
          <div>
            <div className=" font-semibold text-xl lg:text-2xl">PORTFOLIO</div>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>

          <p className="text-sm lg:text-base mt-2 lg:mt-4  text-gray-500">
            These are some of the projects I've been working on lately
          </p>
        </div>

        <section>
          <div>
            <div className=" flex justify-between items-center mb-2">
              <div className=" uppercase font-semibold   lg:text-2xl">
                Videography
              </div>

              <Link to={"/videography"}>
                <div className=" cursor-pointer text-xs uppercase font-medium  text-gray-600">
                  see more
                </div>
              </Link>
            </div>
          </div>

          <Swiper
            spaceBetween={10}
            slidesPerView={1.2}
            modules={[Pagination, Autoplay, A11y, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {videos?.map(({ _id, url }) => {
              return (
                <SwiperSlide key={_id}>
                  <PortfolioCard img={url} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>

        <section className="mt-8">
          <div className=" flex justify-between items-center mb-2">
            <div className=" uppercase font-semibold   lg:text-2xl">PHOTOS</div>

            <Link to={"/photography"}>
              <div className=" cursor-pointer text-xs uppercase font-medium  text-gray-600">
                see more
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
            {photos.map(({ _id, url }) => {
              return <PhotoCard key={_id} img={url} />;
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
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

const PhotoCard = ({ img }) => {
  return (
    <div id="projects" className=" border-2  bg-gray-200 rounded-sm ">
      <img src={img} className="w-full h-[205px] object-cover" alt="" />
    </div>
  );
};

export default Portfolio;
