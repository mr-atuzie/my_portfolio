import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
// import { NavLink } from "react-router-dom";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/v1/jerry-portfolio/`;

const Vid = () => {
  const [options, setOptions] = useState(null);

  const [videos, setVideos] = useState([]);
  const [active, setActive] = useState("");
  const [empty, setEmpty] = useState(false);

  const getCategories = async () => {
    const res = await axios.get(API_URL + "category");
    setOptions(res.data);
  };

  const getVideos = async () => {
    const res = await axios.get(API_URL + "video");
    setVideos(res.data);
    setActive("");
  };

  useEffect(() => {
    getCategories();
    getVideos();
  }, []);

  const handleFilter = async (cat) => {
    setEmpty(false);
    if (cat === "") {
      getVideos();
    } else {
      const res = await axios.post(API_URL + "filter-vid", { category: cat });
      setVideos(res.data);
      if (res.data.length <= 0) {
        setEmpty(true);
      }
    }

    setActive(cat);

    // let filteredVid = videos?.filter((option) => option.category === cat);
    // setVideos(filteredVid);

    // if (cat === "") {
    //   getVideos();
    //   setActive("");
    //   console.log({ cat });
    // } else {
    //   setActive(cat);
    //   setVideos(filteredVid);
    // console.log(cat);
    // }

    // console.log(filteredVid);
  };

  return (
    <div className="  w-full">
      <Navbar />
      <div className="  py-5  w-[90%] lg:w-[70%] mx-auto h-full  ">
        <div>
          <div className=" mb-4">
            <div className=" font-semibold text-xl lg:text-2xl">
              VIDEOGRAPHY
            </div>
            <div className="w-[70px] rounded-lg h-[4px] bg-red-500"></div>
            <p className="text-xs lg:text-base mt-2 lg:mt-4  text-gray-500">
              These are some of the projects I've been working on lately
            </p>
          </div>

          <div className=" overflow-x-scroll mb-4 no-scrollbar flex gap-3 my-2 ">
            <button
              className={`${
                active === "" ? " bg-black text-white" : "bg-gray-100"
              }  border  capitalize   p-2 rounded-md text text-sm whitespace-nowrap`}
              onClick={() => handleFilter("")}
            >
              All
            </button>
            {options?.map((option, index) => {
              return (
                <button
                  className={`${
                    option.category === active
                      ? " bg-black text-white"
                      : "bg-gray-100"
                  }  border  capitalize   p-2 rounded-md text text-sm whitespace-nowrap`}
                  key={index}
                  onClick={() => handleFilter(option.category)}
                >
                  {option.category}
                </button>
              );
            })}
          </div>
          {videos?.length > 0 && (
            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6 my-3">
              {videos?.map(({ _id, url }) => {
                return <PortfolioCard key={_id} img={url} />;
              })}
            </div>
          )}
          {empty && videos.length <= 0 && (
            <p className=" text-sm text-gray-500">Nothing found</p>
          )}
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
