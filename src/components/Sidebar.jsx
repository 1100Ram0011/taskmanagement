// import React from "react";
// import { Link, useLocation } from "react-router-dom"; // ✅ Added useLocation
// import { useDispatch, useSelector } from "react-redux";
//  import { setOpenSidebar } from "../redux/slices/uiSlice"; // ✅ Make sure this action exists

// import {
//   MdDashboard,
//   MdSettings,
//   MdOutlineAddTask,
//   MdTaskAlt,
// } from "react-icons/md";

// import { FaUser, FaTrashAlt } from "react-icons/fa";

// const linkData = [
//   {
//     label: "Dashboard",
//     link: "/dashboard",
//     icon: <MdDashboard />,
//   },
//   {
//     label: "Tasks",
//     link: "/tasks",
//     icon: <MdOutlineAddTask />,
//   },
//   {
//     label: "Settings",
//     link: "/settings",
//     icon: <MdSettings />,
//   },
//   {
//     label: "Complete",
//     link: "/complete/complete",
//     icon: <MdTaskAlt />,
//   },
//   {
//     label: "Users",
//     link: "/users",
//     icon: <FaUser />,
//   },
//   {
//     label: "Trash",
//     link: "/trash",
//     icon: <FaTrashAlt />,
//   },
// ];

// const Sidebar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch(); // ✅ Fix: Corrected dispatch usage
//   const location = useLocation(); // ✅ Fix: Corrected location

//   const path = location.pathname.split("/")[1]; // ✅ Fix: Corrected path extraction

//   const SidebarLink = user?.isAdmin ? linkData : linkData.slice(0, 5); // ✅ Only show all links if user is Admin

//   const closeSidebar = () => {
//     dispatch(setOpenSidebar(false)); // ✅ Fix: Corrected spelling (false)
//   };

//   const Navlink=({el})=>{
// return(
//     <Link to={el.link}
//     onClick={closeSidebar}
//     className={clsx("",path === el.link.split("/")[0]? bg-blue-400)}
//     >
//     {el.icon}
//     <span>{el.label}</span></Link>
// );
//   }
//   return (
//     <div className="w-60 h-screen bg-gray-900 text-white p-4">
//         <h1> <p>
//             <MdOutlineAddTask></MdOutlineAddTask></p></h1>
//       <ul>
//         {SidebarLink.map((item, index) => (
//           <li key={index} className={`flex items-center gap-2 p-2 ${path === item.link.split("/")[1] ? "bg-gray-700" : "hover:bg-gray-700"} cursor-pointer`}>
//             {item.icon}
//             <Link to={item.link} className="text-white" onClick={closeSidebar}>
//               {item.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div>
//         <Navlink el={link } key={link.label}/>

      
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import clsx from "clsx"; // ✅ For Conditional Styling
// import {
//   MdDashboard,
//   MdSettings,
//   MdOutlineAddTask,
//   MdTaskAlt,
//   MdMenu,
//   MdOutlinePendingActions,
// } from "react-icons/md";
// import { FaUser, FaTrashAlt } from "react-icons/fa";

// const linkData = [
//   { label: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
//   { label: "Tasks", link: "/tasks", icon: <MdOutlineAddTask /> },
//   { label: "Settings", link: "/settings", icon: <MdSettings /> },
//   { label: "Complete", link: "/completed", icon: <MdTaskAlt /> },

//   { label: "Teams", link: "/Teams", icon: <FaTeam /> },
//   { label: "In progress", link: "/In progress", icon: <MdOutlinePendingActions /> },
//   { label: "TODO", link: "/To DO", icon: <MdOutlinePendingActions/> },
//   { label: "Trash", link: "/trash", icon: <FaTrashAlt /> },
// ];

// const Sidebar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const location = useLocation();
//   const path = location.pathname.split("/")[1];

//   const SidebarLink = user?.isAdmin ? linkData : linkData.slice(0, 5);

//   // ✅ State for Sidebar Toggle
//   const [isOpen, setIsOpen] = useState(true);

//   return (
//     <>
//       {/* ✅ Sidebar Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="absolute top-4 left-4 z-50 p-2 rounded-md text-white bg-gray-800 lg:hidden"
//       >
        
//       </button>

//       {/* ✅ Sidebar Container */}
//       <div
//         className={clsx(
//           "fixed lg:relative w-60 h-screen bg-gray-900 text-white p-4 transition-all duration-300",
//           isOpen ? "translate-x-0" : "-translate-x-full",
//           "lg:translate-x-0"
//         )}
//       >
//         {/* ✅ Sidebar Title */}
//         <h1 className="text-xl font-bold flex items-center gap-2">
//           <MdOutlineAddTask />
//           <span className="hidden md:inline">Task Manager</span>
//         </h1>

//         {/* ✅ Sidebar Links */}
//         <ul className="mt-4 space-y-2">
//           {SidebarLink.map((item, index) => (
//             <li key={index}>
//               <Link
//                 to={item.link}
//                 className={clsx(
//                   "flex items-center gap-3 p-3 rounded-lg text-white transition-all duration-300",
//                   path === item.link.split("/")[1]
//                     ? "bg-blue-500"
//                     : "hover:bg-gray-700"
//                 )}
//               >
//                 {item.icon}
//                 <span className="hidden md:inline">{item.label}</span>
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Sidebar;
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
  { label: "Teams", link: "/teams", icon: <FaUsers /> }, // ✅ Corrected Teams Icon
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
    <div className={clsx("fixed w-60 h-screen bg-gray-900 text-white p-4")}>
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
              {item.icon}
              <span className="hidden md:inline">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
