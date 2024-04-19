import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const Login = () => {
  return (
    <div className=" bg-gray-50 w-full h-screen ">
      <form className=" bg-white w-[90%] mx-auto shadow-md rounded-md p-3  ">
        <Link
          className=" mt-4 text-sm flex items-center gap-2 mb-40  font-semibold"
          to={"/"}
        >
          <IoIosArrowBack /> <span>Back</span>
        </Link>
        <h1 className=" text-center font-semibold ">Login</h1>
        <p className=" text-gray-500 text-xs text-center mb-5">
          Enter password to log into admin dashboard
        </p>

        <input
          type="password"
          className=" w-full border placeholder:font-normal  bg-gray-50 p-2.5 "
          placeholder=" Enter password"
        />

        <Link to={"/admin"}>
          <button className=" rounded-md text-white font-medium w-full mt-8 p-2.5 bg-black text-sm">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
