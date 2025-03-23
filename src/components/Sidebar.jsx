 
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";
import {
  MdDashboard,
  MdSettings,
  MdOutlineAddTask,
  MdTaskAlt,
  MdOutlinePendingActions,
} from "react-icons/md";
import { FaUser, FaTrashAlt, FaUsers } from "react-icons/fa"; // ✅ FaUsers for Teams

const linkData = [
  { label: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
  { label: "Tasks", link: "/tasks", icon: <MdOutlineAddTask /> },
  { label: "Settings", link: "/settings", icon: <MdSettings /> },
  { label: "Completed", link: "/completed", icon: <MdTaskAlt /> },
  { label: "Teams", link: "/team", icon: <FaUsers /> },  // ✅ Correct Path
  // ✅ Corrected Teams Icon
  { label: "In Progress", link: "/in-progress", icon: <MdOutlinePendingActions /> }, // ✅ Fixed URL
  { label: "To Do", link: "/todo", icon: <MdOutlinePendingActions /> }, // ✅ Fixed URL
  { label: "Trash", link: "/trash", icon: <FaTrashAlt /> },
];

const Sidebar = () => {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  const SidebarLink = linkData; // ✅ Show all links for everyone

  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={clsx("fixed w-60 h-screen bg-blue-300  text-white p-4")}>
      <h1 className="text-xl font-bold flex items-center gap-2">
        <MdOutlineAddTask />
        <span className="hidden md:inline">Task Manager</span>
      </h1>

      <ul className="mt-4 space-y-2">
        {SidebarLink.map((item, index) => (
          <li key={index}>
            <Link
              to={item.link}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-lg text-white transition-all duration-300",
                path === item.link.split("/")[1] ? "bg-blue-500" : "hover:bg-gray-700"
              )}
            >
              {item.icon}{item.label}
              <span className="hidden  text-white md:inline"></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;





















 