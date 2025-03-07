// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import Sidebar from "./components/Sidebar";
// import MobileSidebar from "./components/MobileSidebar";
// import Navbar from "./components/Navbar";

// function Layout() {
//   const { user } = useSelector((state) => state.auth);
//   const location = useLocation();

//   return user ? (
//     <div className="w-full">
//       <Sidebar />
//       <MobileSidebar />
//       <div>
//         <Navbar />
//         <Outlet /> {/* Render child routes */}
//       </div>
//     </div>
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// }

// export default Layout;
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>Navbar</h1>
      <Outlet />
    </div>
  );
}

export default Layout;
