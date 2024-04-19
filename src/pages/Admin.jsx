import React, { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const cloud_name = process.env.REACT_APP_CLOUD_NAME;
const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
const url = "https://api.cloudinary.com/v1_1/domthgc9v/image/upload";

const Admin = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState("");

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

  console.log(profileImage);

  return (
    <div className=" bg-gray-50  w-full">
      <div className="   w-[90%] lg:w-[40%] mx-auto h-full  mb-40 ">
        <form className=" mb-20">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD VIDEO</h1>
          </div>
          <div className=" mb-4">
            <label className="uppercase text-sm " htmlFor="video">
              video url
            </label>
            <p className=" text-xs text-gray-500">Enter video URL here</p>
            <input
              className=" my-1 bg-gray-50 p-2.5 border rounded-md block w-full ]"
              type="text"
              name="video"
              id="video"
              // onChange={handleInputChange}
            />
          </div>

          <div className=" mb-4">
            <label className=" uppercase  text-sm " htmlFor="video">
              Select category
            </label>
            <p className=" text-xs text-gray-500">Enter video category</p>
            <select
              // onChange={(e) => filterSizeCloth(e.target.value)}
              id="countries"
              className="bg-gray-50 my-1  p-3 w-full border italic text-sm md:text-base border-gray-300  text-gray-900 rounded-md  "
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="2XL">XXL</option>
            </select>
          </div>

          <button className=" bg-black text-white font-medium w-full px-4 py-2 rounded-md">
            Enter
          </button>
        </form>

        <section className="">
          <div className=" mb-4  lg:mb-7">
            <h1 className=" font-semibold text-xl lg:text-2xl">ADD PHOTO</h1>
          </div>
          <div>
            <div>
              {imagePreview !== null ? (
                <div>
                  <img
                    className=" w-56 h-56  object-cover"
                    src={imagePreview}
                    alt="profile"
                  />

                  <button
                    onClick={savePhoto}
                    className=" rounded-md  bg-emerald-500 text-white w-full p-2 flex gap-1 items-center"
                  >
                    Upload photo
                  </button>
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
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
