import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";

const usersList = [
  { _id: "1", name: "Alice" },
  { _id: "2", name: "Bob" },
  { _id: "3", name: "Charlie" },
  { _id: "4", name: "David" },
];

const GroupChatModal = ({ onClose }) => {
  const { chats, setChats } = ChatState();
  const [groupName, setGroupName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [error, setError] = useState("");

  const handleSelectUser = (user) => {
    if (selectedUsers.find((u) => u._id === user._id)) return;
    setSelectedUsers([...selectedUsers, user]);
  };

  const handleRemoveUser = (userId) => {
    setSelectedUsers(selectedUsers.filter((u) => u._id !== userId));
  };

  const handleCreateGroup = () => {
    if (!groupName.trim() || selectedUsers.length < 2) {
      setError("Group name and at least 2 users required");
      return;
    }

    const newGroup = {
      _id: `group-${Date.now()}`,
      isGroupChat: true,
      chatName: groupName,
      users: [...selectedUsers, { _id: "me", name: "You" }],
      latestMessage: { content: "Group created." },
    };

    setChats([...chats, newGroup]);
    setGroupName("");
    setSelectedUsers([]);
    setError("");
    onClose(); // Close the modal
  };

  const filteredUsers = usersList.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      !selectedUsers.find((u) => u._id === user._id)
  );

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative">
        <button
          className="absolute top-2 right-3 text-gray-500 text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        <h3 className="font-bold text-xl mb-4">Create Group Chat</h3>

        <input
          type="text"
          placeholder="Group name"
          className="border p-2 w-full mb-3 rounded"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Search users"
          className="border p-2 w-full mb-3 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {selectedUsers.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedUsers.map((user) => (
              <div
                key={user._id}
                className="bg-blue-200 text-sm px-3 py-1 rounded-full flex items-center gap-2"
              >
                {user.name}
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveUser(user._id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="max-h-32 overflow-y-auto border rounded p-2 mb-3">
          {filteredUsers.map((user) => (
            <div
              key={user._id}
              onClick={() => handleSelectUser(user)}
              className="cursor-pointer p-2 hover:bg-gray-100 rounded"
            >
              {user.name}
            </div>
          ))}
        </div>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <button
          onClick={handleCreateGroup}
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Create Group
        </button>
      </div>
    </div>
  );
};

export default GroupChatModal;
