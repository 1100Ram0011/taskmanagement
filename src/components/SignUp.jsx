import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/auth/signup", formData);

      // Redirect to login page after successful signup
      navigate("/login");
    } catch (error) {
      alert("Signup failed. Try again.")
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-[700px] bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96 h-[550px] flex flex-col justify-between">
          <h2 className="text-xl font-semibold text-center text-gray-700 mb-[20px]">
            Create Your Zidio Account
          </h2>
          <form
            onSubmit={handleSignUp}
            className="flex flex-col flex-grow justify-between"
          >
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="w-full p-2 border rounded-lg text-sm bg-gray-100 text-black placeholder-gray-500 border-gray-300"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="w-full p-2 border rounded-lg text-sm bg-gray-100 text-black placeholder-gray-500 border-gray-300"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email *"
              className="w-full p-2 border rounded-lg text-sm mt-2 bg-gray-100 text-black placeholder-gray-500 border-gray-300"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username *"
              className="w-full p-2 border rounded-lg text-sm mt-2 bg-gray-100 text-black placeholder-gray-500 border-gray-300"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password *"
              className="w-full p-2 border rounded-lg text-sm mt-2 bg-gray-100 text-black placeholder-gray-500 border-gray-300"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password *"
              className="w-full p-2 border rounded-lg text-sm mt-2 bg-gray-100 text-black placeholder-gray-500 border-gray-300"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition mt-2"
            >
              Sign Up
            </button>
          </form>
          <p className="text-xs text-center text-gray-600 mt-[20px]">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
