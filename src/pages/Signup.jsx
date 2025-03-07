import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

// Access environment variable using Vite's syntax
const API_URL = import.meta.env.VITE_API_URL;
console.log("API_URL:", API_URL); // Debug: check value in console

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const signupUser = async (userData) => {
    try {
      const res = await axios.post(`${API_URL}/auth/register`, userData);

      toast.success("Signup Successful! Please login.");
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup Failed");
      console.error(error.response?.data?.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser(form);
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Name" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        <input 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>.
      </p>
    </div>
  );
}
