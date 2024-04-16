import React, { useState } from "react";
import { vid } from "../data";

const Vid = () => {
  const category = [
    "All",
    "Documentaries",
    "Youtube content",
    "Weddings",
    "After-effects",
    "short films",
    "Reels",
    "Product/Brade ad",
  ];

  const [videos, setVideos] = useState(vid);
  const [active, setActive] = useState("All");

  const handleFilter = (cat) => {
    let filteredVid = vid.filter((v) => v.cat === cat);

    if (cat === "All") {
      setVideos(vid);
      setActive("All");
    } else {
      setVideos(filteredVid);
      setActive(cat);
    }
  };

  return (
    <div className="  w-full">
      <div className=" mb-5  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div>
          <div className=" mb-4">
            <div className=" font-semibold text-xl lg:text-2xl">
              VIDEOGRAPHY
            </div>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>

          <div className=" overflow-x-scroll no-scrollbar flex gap-3 my-2 ">
            {category.map((c, index) => {
              return (
                <button
                  className={`${
                    c === active ? " bg-black text-white" : "bg-gray-100"
                  }  border  capitalize   p-2 rounded-md text text-sm whitespace-nowrap`}
                  key={index}
                  onClick={() => handleFilter(c)}
                >
                  {c}
                </button>
              );
            })}
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6 my-3">
            {videos.map(({ id, img }) => {
              return <PortfolioCard key={id} img={img} />;
            })}
          </div>
        </div>
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

export default Vid;
