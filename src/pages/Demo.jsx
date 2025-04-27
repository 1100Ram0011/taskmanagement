import React from 'react';
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";

const Demo = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-sm relative">
        <h2 className="text-2xl font-semibold mb-2">We are <span className="font-bold">Login</span></h2>
        <p className="text-gray-500 mb-8">Welcome back! Log in to your account.</p>

        <div className="mb-4">
          <div className="flex items-center border-b border-gray-300 py-2">
            <span className="text-gray-400 mr-3">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v6a2 2 0 002 2h2a2 2 0 002-2v-6a9 9 0 10-18 0v6a2 2 0 002 2h2a2 2 0 002-2v-6" />
              </svg> */}
              <MdEmail className="text-2xl" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center border-b border-gray-300 py-2">
            <span className="text-gray-400 mr-3">
              {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0-6h.01M21 12c0-4.418-3.582-8-8-8S5 7.582 5 12a8.001 8.001 0 006 7.75M21 12h-2m2 0h-2m-2 0h-2m-2 0H7m0 0H5m0 0H3" />
              </svg> */}
              <MdLock className="text-2xl" />
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full outline-none text-gray-700 placeholder-gray-400 bg-transparent"
            />
          </div>
        </div>

        <div className="flex justify-end mb-2">
          <button className="bg-purple-400 hover:bg-purple-500 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
            Log in
          </button>
        </div>

        <p className="text-gray-600 text-sm text-right mt-4">Button After</p>
      </div>
    </div>
  );
};

export default Demo;
