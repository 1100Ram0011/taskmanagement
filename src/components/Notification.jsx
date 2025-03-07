import React, { useState } from "react";
import { FaBell } from "react-icons/fa";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false); // 🔹 State for dropdown
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New task assigned!", read: false },
    { id: 2, message: "Project deadline updated.", read: true },
  ]);

  return (
    <div className="relative">
      {/* 🔔 Notification Icon (Click to Toggle) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer relative focus:outline-none"
      >
        <FaBell className="text-2xl text-white" />
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
            {notifications.length}
          </span>
        )}
      </button>

      {/* 📜 Dropdown Notifications (Show only if isOpen is true) */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md p-2 z-50">
          {notifications.length === 0 ? (
            <p className="text-gray-500 text-sm">No new notifications</p>
          ) : (
            notifications.map((notif) => (
              <div
                key={notif.id}
                className={`p-2 text-sm border-b ${
                  notif.read ? "text-gray-500" : "text-black font-bold"
                }`}
              >
                {notif.message}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Notification;
