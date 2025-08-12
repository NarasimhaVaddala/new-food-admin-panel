// Layout.js
import Header from "./Header";
import Sidebar from "./Sidebar";

import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

// Layout Component
export default function Layout() {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="h-screen bg-gray-50 overflow-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <Header onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {isSidebarOpen && (
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      )}

      {/* Main Content with proper margins to account for fixed header and sidebar */}
      <div
        className={`pt-[60px] ${
          isSidebarOpen && "md:ml-64"
        } h-full overflow-y-auto`}
      >
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
