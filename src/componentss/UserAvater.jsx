// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { FaUserCircle } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";
// import { useLogoutMutation } from "../redux/api/authApi"; // ✅ Check if this API exists
// import { logout } from "../redux/slices/authSlice"; // ✅ Redux Logout Action

// const UserAvatar = () => {
//   const { user } = useSelector((state) => state.auth);
//   const [open, setOpen] = useState(false);
//   const [openPassword, setOpenPassword] = useState(false);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [logoutUser] = useLogoutMutation(); // ✅ Logout API Call

//   const handleLogout = async () => {
//     try {
//       await logoutUser(); // ✅ Call API
//       dispatch(logout()); // ✅ Clear Redux State
//       localStorage.removeItem("token"); // ✅ Remove Token
//       navigate("/login"); // ✅ Redirect to Login
//     } catch (error) {
//       console.error("Logout Failed:", error);
//     }
//   };

//   return (
//     <div className="relative">
//       <div
//         className="flex items-center gap-2 cursor-pointer"
//         onClick={() => setOpen(!open)}
//       >
//         {user?.avatar ? (
//           <img
//             src={user.avatar}
//             alt="User Avatar"
//             className="w-10 h-10 rounded-full border-2 border-gray-400"
//           />
//         ) : (
//           <FaUserCircle className="text-3xl text-gray-400" />
//         )}
//         <span className="text-white">{user?.name || "User"}</span>
//       </div><Transition 
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
          
//         </Transition>
//         <Menu.Item className="">
//           <div className="p-4">
//             <Menu.Item>
//               {({active})=>{
//                 <button
//                 onClick={()=>setOpen(true)}>

//                 </button>
//               }}
//             </Menu.Item>

//           </div>
//         </Menu.Item>

//       {/* Dropdown Menu */}
//       {open && (
//         <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md">
//           <button
//             className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
//             onClick={() => setOpenPassword(true)}
//           >
//             Change Password
//           </button> 
//           <button
//             className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-200"
//             onClick={handleLogout}
//           >
//             Logout
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UserAvatar;
import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { useLogoutMutation } from "../redux/api/authApi";
import { logout } from "../redux/slices/authSlice";

const UserAvatar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutUser] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(logout());
      localStorage.removeItem("token");
      navigate("/login");
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="relative z-50">
      {/* Profile Menu */}
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button className="flex items-center gap-2 cursor-pointer focus:outline-none">
          {user?.avatar ? (
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-gray-400"
            />
          ) : (
            <FaUserCircle className="text-3xl text-gray-400" />
          )}
          <span className="text-white">{user?.name || "User"}</span>
        </Menu.Button>

        {/* Dropdown Menu */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-200" : ""
                  } block w-full px-4 py-2 text-left text-gray-700`}
                  onClick={() => alert("Change Password Clicked")}
                >
                  Change Password
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-gray-200" : ""
                  } block w-full px-4 py-2 text-left text-red-600`}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default UserAvatar;
