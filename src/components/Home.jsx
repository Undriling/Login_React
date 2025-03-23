import React from 'react'

function Home() {
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-gray-100 px-2 md:w-screen font-serif">

      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">

        <img src='/vite.svg' alt='Heading Image' className='h-[150px] px-24 md:px-32'/>

        <div className='mt-10'>
            <p className="text-3xl font-bold text-gray-900">Welcome to PopX</p>
            <p className="text-gray-600 mt-2">
            Sign up to access all the features of PopX clas
            </p>
        </div>

        <div className="mt-6">

          <button
            className="w-full bg-purple-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
            onClick={() => (window.location.href = "/create-account")}
          >
            Create Account
          </button>
          <button
            className="w-full mt-3 bg-purple-200 text-purple-700 py-3 rounded-lg text-lg font-semibold hover:bg-purple-300 transition"
            onClick={() => (window.location.href = "/sign-in")}
          >
            Already Registered? Login
          </button>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home;