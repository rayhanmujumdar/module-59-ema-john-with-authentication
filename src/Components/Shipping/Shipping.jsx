import React, { useState } from 'react';
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
const Shipping = () => {
    const [user] = useAuthState(auth)
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleShipping = (e) => {
        e.preventDefault()
        const shipping = {name,email: user?.email,address,phone}
        console.log(shipping)
    }
    const handleYourNameBlur = (e) => {
        setName(e.target.value)
    }
    const handleAddressBlur = (e) => {
        setAddress(e.target.value)
    }
    const handlePhNumberBlur = (e) => {
        setPhone(e.target.value)
    }
    return (
        <div className="w-full">
        {/* {loading && addSpinner} */}
        <div className="flex justify-center items-center flex-col text-left my-20 md:w-[450px] w-[390px] m-auto bg-slate-200 py-10 shadow-orange-200 drop-shadow-xl rounded-md">
          <h1 className="text-3xl drop-shadow-xl">Shipping info</h1>
          <form action="" onSubmit={handleShipping}>
            <div className="my-5">
              <label htmlFor="name" className="block text-xl">
                Email
              </label>
              <input
                readOnly
                value={user?.email}
                className="w-80 border-2 h-14 rounded-md pl-2 text-xl focus:outline-none"
                style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
                type="text"
                name=""
                id=""
                required
              />
            </div>
            <div className="my-5">
              <label htmlFor="name" className="block text-xl">
                Your Name
              </label>
              <input
                onBlur={handleYourNameBlur}
                className="w-80 border-2 h-14 rounded-md pl-2 text-xl focus:outline-none"
                style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="my-5">
              <label htmlFor="Address" className="block text-xl">
                Address
              </label>
              <input
                onBlur={handleAddressBlur}
                className="w-80 border h-14 rounded-md pl-2 text-xl focus:outline-none"
                style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
                type='text'
                name="address"
                id=""
                required
              />
            </div>
            <div className="my-5">
              <label htmlFor="phoneNumber" className="block text-xl">
                Phone Number
              </label>
              <input
                onBlur={handlePhNumberBlur}
                className="w-80 border h-14 rounded-md pl-2 text-xl focus:outline-none"
                style={{ border: "1px solid rgba(149, 160, 167, 1)" }}
                type='text'
                name="phoneNumber"
                id=""
                required
              />
            </div>
            <div className="my-5">
              <input
                className="w-80 h-12 rounded text-xl font-semibold cursor-pointer shadow-lg shadow-slate-300 bg-[#EBD0A8] hover:bg-[#F3B960] duration-300"
                type="submit"
                value="Add to shipping details"
              />
            </div>
          </form>
        </div>
      </div>
    );
};

export default Shipping;