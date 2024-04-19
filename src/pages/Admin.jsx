import React, { useState } from "react";
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
  const [profileImage, setProfileImage] = useState("");

  const [category, setCategory] = useState("");

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const savePhoto = async (e) => {
    e.preventDefault();

    let imageURL;

    try {
      if (
        profileImage !== null &&
        (profileImage.type === "image/jpeg" || "image/jpg" || "image/png")
      ) {
        const saveImage = new FormData();
        saveImage.append("file", profileImage);
        saveImage.append("cloud_name", cloud_name);
        saveImage.append("upload_preset", upload_preset);

        const res = await fetch(url, { method: "post", body: saveImage });

        const imageData = await res.json();

        imageURL = imageData.secure_url.toString();

        // const userData = {
        //   photo: profileImage ? imageURL : profile.photo,
        // };

        setImagePreview(null);
        console.log(imageURL);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const addCategory = async (e) => {
    e.preventDefault();
    if (!category) {
      return toast.info("Please enter category");
    }

    try {
      const response = axios.post(API_URL + "category", { category });

      console.log(response.data);
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
      <div className="   w-[90%] lg:w-[40%] mx-auto h-full  ">
        <Link
          className=" text-sm flex items-center gap-2  font-semibold"
          to={"/"}
        >
          <IoIosArrowBack /> <span>Back</span>
        </Link>

        <form className=" my-20">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD CATEGORY</h1>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
          </div>
          <div className=" mb-4">
            <label className="capitalize font-medium text-sm " htmlFor="video">
              Category name
            </label>
            <p className="-mt-1 mb-1 text-xs text-gray-500">
              Enter category name for either videos/images
            </p>
            <input
              className=" my-1 bg-gray-50 p-2.5 border rounded-md block w-full ]"
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
                    // accept="image/"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                  />
                </form>
              )}
            </div>

            <div className=" mb-4">
              <label
                className="capitalize font-medium text-sm "
                htmlFor="category"
              >
                Select category
              </label>
              <p className=" text-xs text-gray-500">Select photo category</p>
              <select
                // onChange={(e) => filterSizeCloth(e.target.value)}
                id="category"
                className="bg-gray-50 my-1  p-3 w-full border italic text-sm md:text-base border-gray-300  text-gray-900 rounded-md  "
              >
                <option disabled>Category</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">XXL</option>
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

        <form className=" my-20">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD VIDEO</h1>
            <div className="w-[70px] rounded-lg h-[4px] bg-orange-500"></div>
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
              // onChange={handleInputChange}
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
              // onChange={(e) => filterSizeCloth(e.target.value)}
              id="category"
              className="bg-gray-50 my-1  p-3 w-full border italic text-sm md:text-base border-gray-300  text-gray-900 rounded-md  "
            >
              <option value={"S"} disabled>
                Category
              </option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">XXL</option>
            </select>
          </div>

          <button className=" bg-black text-white font-medium w-full px-4 py-2 rounded-md">
            Add Video
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
