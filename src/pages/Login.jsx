import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { toast } from "react-toastify";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API_URL = `${BACKEND_URL}/api/v1/users/`;

const Login = () => {
  const [password, setPasword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!password) {
      setLoading(false);
      return toast.info("Please enter password");
    }

    try {
      await axios.post(API_URL + "login-jerry", { password });

      toast.success("Welcome onboard, Mr Jerry");
      setPasword("");
      setLoading(false);
      navigate("/admin");
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      setLoading(false);

      toast.error(message);
    }
  };
  return (
    <div className=" bg-gray-50 w-full h-screen ">
      <div className="w-[90%] mx-auto py-5">
        <Link
          className=" text-sm flex items-center gap-2 mb-40  font-semibold"
          to={"/"}
        >
          <IoIosArrowBack /> <span>Back</span>
        </Link>
        <form className=" bg-white  shadow-md rounded-md p-3  ">
          <h1 className=" text-center font-semibold ">Login</h1>
          <p className=" text-gray-500 text-xs text-center mb-5">
            Enter password to log into admin dashboard
          </p>

          <input
            type="password"
            className=" w-full border rounded-md placeholder:font-normal  bg-gray-50 p-2.5 "
            placeholder=" Enter password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />

          <button
            disabled={loading}
            onClick={login}
            className=" rounded-md text-white font-medium w-full mt-8 p-2.5 bg-black text-sm"
          >
            {loading ? "Loading" : "Log in"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
