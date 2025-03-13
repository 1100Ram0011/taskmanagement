import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Trash from "./pages/Trash.jsx";
import TaskDetail from "./pages/TaskDetail.jsx";
import User from "./pages/User.jsx";
import Tasks from "./pages/Tasks.jsx";

import Sidebar from "./components/Sidebar.jsx";
import Navbar from "./components/Navbar.jsx";

// ✅ Improved Authentication Check
const isAuthenticated = () => {
  return !!localStorage.getItem("token"); // Check if token exists
};

// ✅ Layout Component (Protected Routes)
function Layout() {
  const [isSidebarOpen, setSidebarOpen] = useState(true); // ✅ useState defined

  return (
    <div className="flex min-h-screen">
      <div className={`fixed h-full bg-gray-900 text-white   transition-all duration-300 
         ${isSidebarOpen ? "w-60" : "w-0 overflow-hidden"}`}>
        {isSidebarOpen && <Sidebar />}
      </div>

      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-60" : "ml-0"}`}>
        <Navbar toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  ); 
}

// ✅ App Component (Routes)
function App() {
  return (
 
      <Routes>
        {/* Redirect "/" to "/dashboard" */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Protected Routes inside Layout */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/completed" element={<Tasks status="completed" />} />

          <Route path="/in-progress/:status" element={<Tasks />} />
          <Route path="/todo/:status" element={<Tasks />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/team" element={<User />} />

          <Route path="/trashed" element={<Trash />} />
          <Route path="/in-progress" element={<Tasks />} />
          <Route path="/todo" element={<Tasks />} />
        </Route>

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
      </Routes>
     
  );
}

export default App;
