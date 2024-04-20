import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
const url = "https://api.cloudinary.com/v1_1/domthgc9v/image/upload";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/v1/jerry-portfolio/`;

const Admin = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [image, setImage] = useState("");

  const [options, setOptions] = useState(null);

  const [category, setCategory] = useState("");

  const [video, setVideo] = useState("");
  const [videoCategory, setVideoCategory] = useState("");

  const [photo, setPhoto] = useState("");
  const [photoCategory, setPhotoCategory] = useState("");

  const getCategories = async () => {
    const res = await axios.get(API_URL + "category");
    setOptions(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setPhoto(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const savePhoto = async (e) => {
    e.preventDefault();

    let imageURL;

    console.log({ photo, photoCategory });

    try {
      if (
        image !== null &&
        (image.type === "image/jpeg" || "image/jpg" || "image/png")
      ) {
        const saveImage = new FormData();
        saveImage.append("file", image);
        saveImage.append("cloud_name", cloud_name);
        saveImage.append("upload_preset", upload_preset);

        const res = await fetch(url, { method: "post", body: saveImage });
        const imageData = await res.json();
        imageURL = imageData.secure_url.toString();

        const response = await axios.post(API_URL + "photo", {
          url: imageURL,
          category: photoCategory,
        });

        console.log(response.data);
        toast.success("Photo added");

        setImagePreview(null);
        setPhoto(null);
        setImage("");
        setPhotoCategory("");
      } else {
        toast.info("Please enter all required fields");
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const addCategory = async (e) => {
    e.preventDefault();

    if (!category) {
      return toast.info("Please enter category");
    }

    try {
      const response = await axios.post(API_URL + "category", { category });

      // setOptions(response.data);

      console.log(response.data);

      toast.success("Category added");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  const addVideo = async (e) => {
    e.preventDefault();
    if (!video || !videoCategory) {
      return toast.info("Please enter required fields");
    }

    try {
      const response = axios.post(API_URL + "video", {
        url: video,
        category: videoCategory,
      });

      console.log(response.data);
      toast.success("Video added");
      setVideo("");
      setVideoCategory("");
      return response.data;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      toast.error(message);
    }
  };

  return (
    <div className=" bg-gray-50  w-full">
      <div className=" py-5   w-[90%] lg:w-[40%] mx-auto h-full  ">
        <Link
          className="  text-sm flex items-center gap-2  font-semibold"
          to={"/"}
        >
          <IoIosArrowBack /> <span>Back</span>
        </Link>

        {/* Category */}
        <form className=" mt-10 mb-20">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD CATEGORY</h1>
            <div className="w-[70px] rounded-lg h-[4px] bg-emerald-500"></div>
          </div>
          <div className=" mb-4">
            <label className="capitalize font-medium text-sm " htmlFor="video">
              Category name
            </label>
            <p className="-mt-1 mb-1 text-xs text-gray-500">
              Enter category name for either videos/images
            </p>
            <input
              className=" my-1 bg-gray-50 p-2.5 border rounded-md block w-full "
              value={category}
              type="text"
              name="category"
              id="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <button
            onClick={addCategory}
            className=" bg-black text-white font-medium w-full px-4 py-2 rounded-md"
          >
            Add Category
          </button>
        </form>

        <form className=" my-20">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD VIDEO</h1>
            <div className="w-[70px] rounded-lg h-[4px] bg-purple-500"></div>
          </div>
          <div className=" mb-4">
            <label className="capitalize font-medium text-sm " htmlFor="video">
              video url
            </label>
            <p className=" text-xs -mt-1 mb-1 text-gray-500">
              Enter video URL here
            </p>
            <input
              className=" my-1 bg-gray-50 p-2.5 border rounded-md block w-full ]"
              type="text"
              name="video"
              id="video"
              value={video}
              onChange={(e) => setVideo(e.target.value)}
            />
          </div>

          <div className=" mb-4">
            <label
              className="capitalize font-medium text-sm "
              htmlFor="category"
            >
              Select category
            </label>
            <p className=" -mt-1 mb-1 text-xs text-gray-500">
              Select video category
            </p>
            <select
              onChange={(e) => setVideoCategory(e.target.value)}
              value={videoCategory}
              id="category"
              className="bg-gray-50 my-1 capitalize  p-3 w-full border italic text-sm md:text-base border-gray-300  text-gray-900 rounded-md  "
            >
              <option>Please choose one option</option>
              {options?.map((option, index) => {
                return (
                  <option className=" capitalize" key={index}>
                    {option?.category}
                  </option>
                );
              })}
            </select>
          </div>

          <button
            onClick={addVideo}
            className=" bg-black text-white font-medium w-full px-4 py-2 rounded-md"
          >
            Add Video
          </button>
        </form>

        <section className=" mb-20">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD PHOTO</h1>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>
          <div>
            <div>
              {imagePreview !== null ? (
                <div>
                  <img
                    className=" w-full h-56  object-cover"
                    src={imagePreview}
                    alt="profile"
                  />
                </div>
              ) : (
                <form className="  flex flex-col gap-3">
                  <label
                    className=" w-full flex justify-center items-center gap-1 h-56 border-dotted border-2 text-gray-500 rounded-md  bg-slate-300 object-cover"
                    htmlFor="image"
                  >
                    <span className=" text-sm">Click to upload image</span>
                    <span>
                      <IoCloudUploadOutline />
                    </span>
                  </label>
                  <input
                    className=" hidden p-2.5 rounded-xl  w-full lg:w-[350px]"
                    type="file"
                    accept="image/"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                  />
                </form>
              )}
            </div>

            <div className=" my-4">
              <label
                className="capitalize font-medium text-sm "
                htmlFor="category"
              >
                Select category
              </label>
              <p className=" -mt-1 mb-1 text-xs text-gray-500">
                Select photo category
              </p>
              <select
                onChange={(e) => setPhotoCategory(e.target.value)}
                value={photoCategory}
                id="category"
                className="bg-gray-50 my-1 capitalize  p-3 w-full border italic text-sm md:text-base border-gray-300  text-gray-900 rounded-md  "
              >
                <option>Please choose one option</option>
                {options?.map((option, index) => {
                  return (
                    <option className=" capitalize" key={index}>
                      {option?.category}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              onClick={savePhoto}
              className=" bg-black text-white font-medium w-full px-4 py-2 rounded-md"
            >
              Add Photo
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
