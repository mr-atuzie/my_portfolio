import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-gray-50 w-full h-screen flex justify-center items-center">
      <form className=" bg-white w-[85%] shadow-md rounded-md p-3 ">
        <h1 className=" text-center ">Login</h1>
        <p className=" text-gray-500 text-xs text-center mb-5">
          Enter password to log into admin dashboard
        </p>
        <h2 className=" font-semibold text-2xl mb-6">Welcome Jerry</h2>

        <input
          type="password"
          className=" w-full border placeholder:font-normal  bg-gray-50 p-2.5 "
          placeholder=" Enter password"
        />

        <Link to={"/admin"}>
          <button className=" text-white font-medium w-full mt-8 p-2.5 bg-black text-sm">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
