 
import React, { useState } from "react";
import { FaBars, FaUserCircle, FaBell } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/authSlice";

const Navbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  // ✅ Logout Function
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    window.location.href = "/login";
  };

  return (
    <nav className=" bg-blue-300 text-white px-6 py-4 flex justify-between items-center">
      {/* ✅ Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="text-2xl text-white focus:outline-none lg:hidden">
        <FaBars /> {/* ☰ Menu Icon */}
      </button>

      {/* ✅ Search Bar */}
      <div className="flex items-center bg-blue-400 px-3 py-2 rounded-md w-full max-w-sm ml-4">
        <MdOutlineSearch className="text-white" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 text-white placeholder-white w-full"
        />
      </div>

      {/* ✅ Notifications & Profile */}
      <div className="flex items-center gap-4 relative">
        {/* 🔔 Notification Icon */}
        <div className="relative">
          <button onClick={() => setIsNotifOpen(!isNotifOpen)} className="focus:outline-none">
            <FaBell className="text-2xl cursor-pointer hover:text-blue-400" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
              3 {/* Example Notification Count */}
            </span>
          </button>
          {/* 📜 Notification Dropdown */}
          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-50">
              <p className="text-gray-700 text-sm">New task assigned!</p>
              <p className="text-gray-700 text-sm">Deadline updated.</p>
              <p className="text-gray-500 text-sm">No more notifications.</p>
            </div>
          )}
        </div>

        {/* 👤 User Avatar & Dropdown */}
        <div className="relative">
          <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="focus:outline-none flex items-center gap-2">
            <FaUserCircle className="text-2xl" />
            <span>{user?.name || "User"}</span>
          </button>

          {/* 📜 Profile Dropdown */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-gray-900 z-50">
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">View Profile</button>
              <button className="block w-full px-4 py-2 text-left hover:bg-gray-200">Change Password</button>
              <button className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200" onClick={handleLogout}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
