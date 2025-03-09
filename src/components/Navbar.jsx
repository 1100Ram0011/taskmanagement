// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// // import { setOpenSidebar } from "../redux/slice/uiSlice"; // ✅ Ensure you have this Redux action
// import { FaUserCircle } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
// import { MdOutlineSearch, MdNotifications } from "react-icons/md";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);

//   // ✅ Logout Function
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.location.href = "/login";
//   };

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
//       {/* ✅ Sidebar Toggle Button */}
//       <button
//         onClick={() => dispatch(setOpenSidebar(true))}
//         className="text-2xl md:hidden"
//       >
//         ☰
//       </button>

//       {/* ✅ Search Bar */}
//       <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
//         <MdOutlineSearch className="text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="bg-transparent outline-none px-2 text-white"
//         />
//       </div>

//       {/* ✅ Brand Logo */}
     
      

//       {/* ✅ Notifications & Profile */}
//       <div className="flex items-center gap-4">
//         {/* Notification Icon */}
//         <MdNotifications className="text-2xl cursor-pointer hover:text-blue-400" />

//         {/* User Avatar & Logout */}
//         <div className="flex items-center gap-2">
//           <FaUserCircle className="text-2xl" />
//           <span>{user?.name || "User"}</span>
//         </div>

//         {/* ✅ Logout Button */}
//         <button
//           onClick={handleLogout}
//           className="bg-red-500 px-3 py-2 rounded-md hover:bg-red-700 flex items-center gap-1"
//         >
//           <IoMdLogOut />
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { setOpenSidebar } from "../redux/slices/uiSlice"; // ✅ Ensure Redux action is correctly imported
//  import { logout } from "../redux/slice/authSlice"; // ✅ Redux logout action
// import { FaUserCircle } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
// import { MdOutlineSearch, MdNotifications } from "react-icons/md";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const { user } = useSelector((state) => state.auth);
//   const [isProfileOpen, setIsProfileOpen] = useState(false); // ✅ State to toggle profile menu

//   // ✅ Logout Function with Redux State Clear
//   const handleLogout = () => {
//     localStorage.removeItem("token"); // ✅ Remove Token
//     dispatch(logout()); // ✅ Clear Redux Auth State
//     window.location.href = "/login"; // ✅ Redirect to Login Page
//   };

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
//       {/* ✅ Sidebar Toggle Button (For Mobile) */}
//       <button
//         onClick={() => dispatch(setOpenSidebar(true))}
//         className="text-2xl md:hidden focus:outline-none"
//       >
//         ☰
//       </button>

//       {/* ✅ Search Bar */}
//       <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md">
//         <MdOutlineSearch className="text-gray-400" />
//         <input
//           type="text"
//           placeholder="Search..."
//           className="bg-transparent outline-none px-2 text-white placeholder-gray-400"
//         />
//       </div>

//       {/* ✅ Notifications & Profile */}
//       <div className="flex items-center gap-4 relative">
//         {/* Notification Icon */}
//         <MdNotifications className="text-2xl cursor-pointer hover:text-blue-400" />

//         {/* User Avatar & Name - Click to Open Profile Menu */}
//         <div className="relative">
//           <button
//             onClick={() => setIsProfileOpen(!isProfileOpen)} // ✅ Toggle menu
//             className="flex items-center gap-2 focus:outline-none"
//           >
//             {user?.avatar ? (
//               <img
//                 src={user.avatar}
//                 alt="User Avatar"
//                 className="w-8 h-8 rounded-full border border-gray-400"
//               />
//             ) : (
//               <FaUserCircle className="text-2xl" />
//             )}
//             <span>{user?.name || "User"}</span>
//           </button>

//           {/* ✅ Profile Dropdown Menu */}
//           {isProfileOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md text-gray-900">
//               <button
//                 className="block w-full px-4 py-2 text-left hover:bg-gray-200"
//                 onClick={() => alert("Profile Clicked!")}
//               >
//                 View Profile
//               </button>
//               <button
//                 className="block w-full px-4 py-2 text-left hover:bg-gray-200"
//                 onClick={() => alert("Change Password Clicked!")}
//               >
//                 Change Password
//               </button>
//               <button
//                 className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
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
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
      {/* ✅ Sidebar Toggle Button */}
      <button onClick={toggleSidebar} className="text-2xl text-white focus:outline-none lg:hidden">
        <FaBars /> {/* ☰ Menu Icon */}
      </button>

      {/* ✅ Search Bar */}
      <div className="flex items-center bg-gray-800 px-3 py-2 rounded-md w-full max-w-sm ml-4">
        <MdOutlineSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none px-2 text-white placeholder-gray-400 w-full"
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
