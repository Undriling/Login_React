import React, { useState } from 'react'

function CreateAccount() {
    const [selectOption, setSelectOption] = useState(null);


  return (

    <div className="flex items-center justify-center h-full bg-gray-100 md:w-screen font-serif mt-20 mb-10">

      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg mt-[220px]">

        <div className='mt-10'>
            <p className="text-3xl md:text-5xl font-bold text-gray-900">Create your PopX account</p>
            <p className="text-gray-600 mt-2">
                Create acoount & then Sign In to access all the features of PopX
            </p>
        </div>

        <div className="mt-6">

            <div className="mb-6 relative">
                <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Name <span className="text-red-500">*</span></label>
            </div>

            <div className="mb-6 relative">
                <input
                    type="number"
                    required
                    placeholder="Enter phone number"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Phone number <span className="text-red-500">*</span></label>
            </div>

            <div className="mb-6 relative">
                <input
                    type="email"
                    required
                    placeholder="Enter email address"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Email address <span className="text-red-500">*</span></label>
            </div>

            <div className="mb-6 relative">
                <input
                    type="password"
                    required
                    placeholder="Enter password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Password <span className="text-red-500">*</span></label>
            </div>

            <div className="mb-6 relative">
                <input
                    type="password"
                    required
                    placeholder="Confirm your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Confirm your password <span className="text-red-500">*</span></label>
            </div>

            <div className="mb-6 relative">
                <input
                    type="text"
                    placeholder="Enter company name if any"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <label className="absolute left-3 top-0 px-1 -translate-y-1/2 bg-white text-purple-700 font-semibold text-sm">Company name</label>
            </div>

            <div className="mb-6">
                <label className="block text-purple-700 font-semibold">Are you an agency? <span className='text-red-600'>*</span> </label>

                <div className='mb-5 flex items-center space-x-3 mt-2'>
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                        type="radio"
                        name="yesNo"
                        value="Yes"
                        checked={selectOption === "Yes"}
                        onChange={() => setSelectOption("Yes")}
                        className="hidden"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                            selectOption === "Yes" ? "border-purple-600" : "border-gray-500"}`}>
                            {selectOption === "Yes" && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
                        </div>
                        <span className="text-gray-700">Yes</span>
                    </label>

                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                        type="radio"
                        name="yesNo"
                        value="No"
                        checked={selectOption === "No"}
                        onChange={() => setSelectOption("No")}
                        className="hidden"
                        />
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                            selectOption === "No" ? "border-purple-600" : "border-gray-500"}`}>
                        {selectOption === "No" && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
                        </div>
                        <span className="text-gray-700">No</span>
                    </label>
                </div>
            </div>
            </div>

            <button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg text-lg font-semibold transition"
                onClick={() => (window.location.href = "/account-settings", alert("Account successfully created... Redirect to Account settings"))}
            >
                Create Account
            </button>
            
        </div>
      </div>
    // </div>

  )
}

export default CreateAccount;