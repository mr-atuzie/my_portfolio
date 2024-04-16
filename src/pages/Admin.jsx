import React, { useState } from "react";

const Admin = () => {
  const [imagePreview, setImagePreview] = useState(null);
  const [profileImage, setProfileImage] = useState("");

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  console.log(profileImage);

  return (
    <div className="  w-full">
      <div className=" mb-5  w-[90%] lg:w-[40%] mx-auto h-full  ">
        <form>
          <h1 className=" font-semibold text-lg mb-3 tracking-wide">
            ADD VIDEO
          </h1>
          <div className=" mb-4">
            <label className="uppercase text-sm " htmlFor="video">
              video url
            </label>
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

          <button className=" bg-black text-white font-medium w-36 px-4 py-2 rounded-md">
            {" "}
            Enter
          </button>
        </form>

        <section className=" my-5">
          <h1 className=" font-semibold text-lg mb-3 tracking-wide">
            ADD PHOTO
          </h1>
          <div>
            <div>
              {imagePreview !== null && (
                <img
                  className=" w-56 h-56  object-cover"
                  src={imagePreview}
                  alt="profile"
                />
              )}

              {imagePreview !== null && (
                <button
                  // onClick={savePhoto}
                  className=" rounded-md bg-black text-white w-fit p-2 flex gap-1 items-center"
                >
                  Upload photo
                </button>
              )}
            </div>
          </div>
          <form className="  flex flex-col gap-3">
            <div>
              <label htmlFor="image">Change Pic</label>
              <input
                className=" hidden p-2.5 rounded-xl  w-full lg:w-[350px]"
                type="file"
                accept="image/"
                name="image"
                id="image"
                onChange={handleImageChange}
              />
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Admin;
