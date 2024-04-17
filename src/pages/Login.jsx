import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-gray-300 w-full h-screen flex justify-center items-center">
      <form className=" bg-white shadow-md rounded-md p-3 ">
        <h2 className=" font-semibold text-xl">Welcome Jerry</h2>

        <input
          type="password"
          className=" w-full border placeholder:font-normal bg-gray-50 p-2.5 "
          placeholder=" Enter password"
        />

        <Link to={"/admin"}>
          <button className=" text-white font-medium w-full mt-4 p-2.5 bg-black text-sm">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
