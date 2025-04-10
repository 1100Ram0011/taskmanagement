import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Textbox from "../componentss/Textbox";
import Button from "../componentss/Button";

const Login = () => {
  
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitHandler = async (data) => {
    console.log("Submitting login form", data);
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dashboard");
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-700 p-6 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 transform transition duration-500 hover:shadow-2xl">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center text-white bg-gradient-to-r from-primary-600 to-primary-800 p-10">
          <h2 className="text-3xl font-bold font-body">Welcome Back!</h2>
          <p className="mt-2 text-lg">Manage all your tasks effortlessly.</p>
        </div>
        
        {/* Right Side - Login Form */}
        <div className="p-10 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6 font-body">Login to Your Account</h3>
          <form onSubmit={handleSubmit(submitHandler)} className="space-y-6">
            <Textbox
              type="email"
              name="email"
              placeholder="Enter your email"
              label="Email Address"
              register={register("email", { required: "Email is required" })}
              error={errors.email?.message}
              className="focus:ring-2 focus:ring-primary-400 transition duration-300 font-body"
            />
            <Textbox
              type="password"
              name="password"
              placeholder="Enter your password"
              label="Password"
              register={register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters" },
              })}
              error={errors.password?.message}
              className="focus:ring-2 focus:ring-primary-400 transition duration-300 font-body"
            />
            <div className="text-right">
              <a href="/forgot-password" className="text-primary-600 hover:underline hover:text-primary-800 transition duration-300">Forgot Password?</a>
            </div>
            <Button type="submit" label="Login" className="w-full bg-primary-600 hover:bg-primary-700 transition duration-300 shadow-md font-body" />
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">Keep your credentials safe</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
