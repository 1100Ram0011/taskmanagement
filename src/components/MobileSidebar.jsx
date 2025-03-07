import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { MdDashboard, MdOutlineAddTask, MdSettings } from "react-icons/md";

const MobileSidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { label: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
    { label: "Tasks", link: "/tasks", icon: <MdOutlineAddTask /> },
    { label: "Settings", link: "/settings", icon: <MdSettings /> },
  ];

  return (
    <div>
      {/* 🔹 Dark Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* 📱 Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        {/* ❌ Close Button */}
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">Menu</h2>
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        {/* 🔗 Navigation Links */}
        <ul className="mt-4">
          {menuItems.map((item, index) => (
            <li key={index} className="p-3 hover:bg-gray-700">
              <Link to={item.link} className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileSidebar;
