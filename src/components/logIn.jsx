import React from 'react'

function Login() {
  return (

    <div className="flex justify-center font-serif h-screen bg-gray-100 md:w-screen">

      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">

        <div className='mt-10'>
            <p className="text-2xl md:text-4xl font-bold text-gray-900">Sign In to your PopX account</p>
            <p className="text-gray-600 mt-2">
                Sign In to access all the features of PopX
            </p>
        </div>

        <div className="mt-6">

            <div className="mb-4 relative">
                <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Email <span className="text-red-500">*</span></label>
            </div>

            <div className="mb-4 relative">
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Password <span className="text-red-500">*</span></label>
            </div>

            <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                onClick={() => (window.location.href = "/account-settings")}
            >
                Login
            </button>
            
        </div>
      </div>
    </div>

  )
}

export default Login;