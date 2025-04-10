// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useLocation,
//   Outlet,
// } from "react-router-dom";
// import Login from "./pages/Login.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import Trash from "./pages/Trash.jsx";
// import TaskDetail from "./pages/TaskDetail.jsx";
// import User from "./pages/User.jsx";
// import Tasks from "./pages/Tasks.jsx";

// import Sidebar from "./components/Sidebar.jsx";
// import Navbar from "./components/Navbar.jsx";

// // ✅ Improved Authentication Check
// const isAuthenticated = () => {
//   return !!localStorage.getItem("token"); // Check if token exists
// };

// // ✅ Layout Component (Protected Routes)
// function Layout() {
//   const [isSidebarOpen, setSidebarOpen] = useState(true); // ✅ useState defined

//   return (
//     <div className="flex min-h-screen">
//       <div className={`fixed h-full bg-gray-900 text-white   transition-all duration-300 
//          ${isSidebarOpen ? "w-60" : "w-0 overflow-hidden"}`}>
//         {isSidebarOpen && <Sidebar />}
//       </div>

//       <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-0"}`}>
//         <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
//         <div className="p-4">
//           <Outlet />
//         </div>
//       </div>
//     </div>
//   ); 
// }

// // ✅ App Component (Routes)
// function App() {
//   return (
 
//       <Routes>
//         {/* Redirect "/" to "/dashboard" */}
//         <Route path="/" element={<Navigate to="/dashboard" />} />

//         {/* Protected Routes inside Layout */}
//         <Route element={<Layout />}>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/tasks" element={<Tasks />} />
//           <Route path="/completed" element={<Tasks status="completed" />} />

//           <Route path="/in-progress/:status" element={<Tasks />} />
//           <Route path="/todo/:status" element={<Tasks />} />
//           <Route path="/task/:id" element={<TaskDetail />} />
//           <Route path="/team" element={<User />} />

//           <Route path="/trashed" element={<Trash />} />
//           <Route path="/in-progress" element={<Tasks />} />
//           <Route path="/todo" element={<Tasks />} />
//         </Route>

//         {/* Public Routes */}
//         <Route path="/login" element={<Login />} />
//       </Routes>
     
//   );
// }

// export default App;




import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { Fragment, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Toaster } from "sonner";
import Navbar from "./componentss/Navbar";
import Sidebar from "./componentss/Sidebar";
import Login from "./pagess/Login";
import TaskDetails from "./pagess/TaskDetails";
import Tasks from "./pagess/Tasks";
import Trash from "./pagess/Trash";
import Users from "./pagess/Users";
import Dashboard from "./pagess/dashboard";
import { setOpenSidebar } from "./redux/slices/authSlice";

function Layout() {
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/log-in' state={{ from: location }} replace />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter='transition-opacity duration-700'
        enterFrom='opacity-x-10'
        enterTo='opacity-x-100'
        leave='transition-opacity duration-700'
        leaveFrom='opacity-x-100'
        leaveTo='opacity-x-0'
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className='bg-white w-3/4 h-full'>
              <div className='w-full flex justify-end px-5 mt-5'>
                <button
                  onClick={() => closeSidebar()}
                  className='flex justify-end items-end'
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className='-mt-10'>
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6] '>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Trash />} />
          <Route path='/task/:id' element={<TaskDetails />} />
        </Route>

        <Route path='/log-in' element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;
