import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../Assets/Image/google.svg";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import toast from "react-hot-toast";


const SignUp = () => {
  const [signInwithEmailPassword,user,loading,fromError] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true})
  const [show, setShow] = useState(false);
  const [confirmShow, setConfirmShow] = useState(false);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')
  const [error,setError] = useState('')
  const navigate = useNavigate()
  const [signInwithGoogle,googleUser,googleLoading,googleError] = useSignInWithGoogle(auth)
  const handleGoogleSignIn = () => {
    signInwithGoogle()
  }
  //hide and show
  const handleShowPassword = (toggle) => {
    setShow(toggle);
  };
  const handleShowConfirmPassword = (toggle) => {
    setConfirmShow(toggle);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value)
  }
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value)
  }
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value)
  }
  const handleSubmitForm = async (e) => {
    e.preventDefault()
    if(password !== confirmPassword){
      setError('password MissMatch')
      return toast.error('password MissMatch',{id: 'error'})
    }
    else if(password.length < 6){
      setError('password must be 6 characters or longer')
      return toast.error('password must be 6 characters or longer',{id: 'error'})
    }
    setError('')
    signInwithEmailPassword(email,password)
  }
  
  useEffect(() => {
    if(fromError?.message.includes('already')){
      toast.error('already in used',{id: 'error'})
    }
  },[fromError])
  if(user || googleUser){
    toast.success('successfuly login' ,{id: 'success'})
    navigate('/')
  }
  return (
    <div>
      <div className="w-full">
        <div className="flex justify-center items-center flex-col text-left my-20 md:w-[450px] w-[390px] m-auto bg-slate-200 py-10 shadow-orange-200 drop-shadow-xl rounded-md">
          <h1 className="text-3xl drop-shadow-2xl">Sign Up</h1>
          <form action="" onSubmit={(event) => handleSubmitForm(event)}>
            <div className="my-5">
              <label htmlFor="email" name='' className="block text-xl">
                Email
              </label>
              <input
                onBlur={handleEmailBlur}
                className="w-80 border-2 h-14 rounded-md pl-2 text-xl focus:outline-none"
                style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
                type="email"
                name="email"
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
                name="password"
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
            <div className="my-5 relative">
              <label htmlFor="confirmPassword" name='' className="block text-xl">
                Confirm password
              </label>
              <input
                onBlur={handleConfirmPasswordBlur}
                className="w-80 border h-14 rounded-md pl-2 text-xl focus:outline-none"
                style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
                type={`${confirmShow ? "text" : "password"}`}
                name="confirmPassword"
                id=""
                required
              />
              <p className="text-red-500">{error}</p>
              {confirmShow ? (
                <EyeIcon
                  onClick={() => handleShowConfirmPassword(!confirmShow)}
                  className="w-6 text-gray-600 absolute right-3 top-2/4 translate-y-[2px]"
                ></EyeIcon>
              ) : (
                <EyeOffIcon
                  onClick={() => handleShowConfirmPassword(!confirmShow)}
                  className="w-6 text-gray-600 absolute right-3 top-2/4 translate-y-[2px]"
                ></EyeOffIcon>
              )}
            </div>
            <div className="my-5">
              <input
                className="w-80 h-12 rounded text-xl font-semibold cursor-pointer shadow-lg shadow-slate-300 bg-[#EBD0A8] hover:bg-[#F3B960] "
                type="submit"
                value="Login"
              />
            </div>
            <div>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="underline text-blue-500">
                  Login
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
              onClick={handleGoogleSignIn}
              className="flex items-center justify-center bg w-80 h-12 rounded-md"
              style={{ border: "1px solid rgba(149, 160, 167, 0.8)" }}
            >
              <img src={googleLogo} alt="" className="" />
              <p className="mx-2">Continue with Google</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
