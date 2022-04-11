import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../Assets/Image/google.svg";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import toast from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleShowPassword = (toggle) => {
    setShow(toggle);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (error) {
    toast.error(error?.message, { id: "error" });
  }
  if (user) {
    toast.success("successfuly login", { id: "success" });
    navigate("/");
  }
  const addSpinner = (
    <div class="flex items-center justify-center absolute bg-neutral-500 bg-opacity-50 z-10 h-screen top-0 w-full">
      <button
        type="button"
        class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
        disabled=""
      >
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-yellow-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        waiting...
      </button>
    </div>
  );
  return (
    <div className="w-full">
      {loading && addSpinner}
      <div className="flex justify-center items-center flex-col text-left my-20 md:w-[450px] w-[390px] m-auto bg-slate-200 py-10 shadow-orange-200 drop-shadow-xl rounded-md">
        <h1 className="text-3xl drop-shadow-xl">Login</h1>
        <form action="" onSubmit={handleUserSignIn}>
          <div className="my-5">
            <label htmlFor="email" className="block text-xl">
              Email
            </label>
            <input
              onBlur={handleEmailBlur}
              className="w-80 border-2 h-14 rounded-md pl-2 text-xl focus:outline-none"
              style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
              type="email"
              name=""
              id=""
              required
            />
          </div>
          <div className="my-5 relative">
            <label htmlFor="password" className="block text-xl">
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              className="w-80 border h-14 rounded-md pl-2 text-xl focus:outline-none"
              style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
              type={`${show ? "text" : "password"}`}
              name=""
              id=""
              required
            />
            {show ? (
              <EyeIcon
                onClick={() => handleShowPassword(!show)}
                className="w-6 text-gray-600 absolute right-3 top-2/4 translate-y-[2px]"
              ></EyeIcon>
            ) : (
              <EyeOffIcon
                onClick={() => handleShowPassword(!show)}
                className="w-6 text-gray-600 absolute right-3 top-2/4 translate-y-[2px]"
              ></EyeOffIcon>
            )}
          </div>
          <div className="my-5">
            <input
              className="w-80 h-12 rounded text-xl font-semibold cursor-pointer shadow-lg shadow-slate-300 bg-[#EBD0A8] hover:bg-[#F3B960] duration-300"
              type="submit"
              value="Login"
            />
          </div>
          <div>
            <p className="text-center">
              New to Ema-john?
              <Link to="/signup" className="underline text-blue-500 mx-1">
                Create New Account
              </Link>
            </p>
          </div>
        </form>
        <div className="flex items-center my-8">
          <div className="w-32 bg-gray-400 h-[2px]"></div>
          <p className="text-gray-400 mx-3">or</p>
          <div className="w-32 bg-gray-400 h-[2px]"></div>
        </div>
        <div>
          <button
            className="flex items-center justify-center bg w-80 h-12 rounded-md"
            style={{ border: "1px solid rgba(149, 160, 167, 0.8)" }}
          >
            <img src={googleLogo} alt="" className="" />
            <p className="mx-2">Continue with Google</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
