import React from "react";

const UserInfo = ({ user }) => {
    if (!user) return null;

    return (
        <div className="flex items-center space-x-2">
            <img
                src={user.profilePic || "/default-avatar.png"}
                alt="User Avatar"
                className="w-8 h-8 rounded-full border border-gray-300"
            />
            <div>
                <p className="text-sm font-semibold">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
            </div>
        </div>
    );
};

export default UserInfo;
