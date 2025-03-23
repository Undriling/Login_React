import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

function SocialBtns() {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md text-center rounded-full">
        <div className="flex justify-center space-x-6">
          <button className="p-3 rounded-full">
            <FcGoogle className="text-red-500 text-xl rounded-full" />
          </button>
          <button className="p-3">
            <FaFacebookF className="text-blue-500 text-xl rounded-full" />
          </button>
          <button className="p-3">
            <BsTwitterX className="text-blue-400 text-xl rounded-full" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SocialBtns;