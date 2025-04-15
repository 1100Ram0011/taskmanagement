import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const users = [
  { id: 1, name: "Ramcharan", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Altaf", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Prakash", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Arpita", avatar: "https://i.pravatar.cc/150?img=4" },
];

const dummyMessages = {
  1: ["Hi Ram!", "How are you doing today?"],
  2: ["Hey Altaf!", "Got time to review the report?"],
  3: ["Yo Prakash!", "Ready for the meeting?"],
  4: ["Hello Arpita!", "Lunch at 1?"],
};

function OpenChat() {
  const { username } = useParams();
  const navigate = useNavigate();
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Match username param to user object
  useEffect(() => {
    if (username) {
      const user = users.find(
        (u) => u.name.toLowerCase() === username.toLowerCase()
      );
      if (user) {
        setSelectedUserId(user.id);
      }
    } else {
      setSelectedUserId(null);
    }
  }, [username]);

  const selectedUser = users.find((user) => user.id === selectedUserId);

  const handleUserClick = (user) => {
    navigate(`/openChat/${user.name.toLowerCase()}`);
  };

  const closeChat = () => {
    navigate("/openChat");
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4 mt-2">
      {/* Online Users */}
      <div className="flex flex-col gap-3 border-b pb-3 mb-3 max-h-[200px] overflow-y-auto">
        {users.map((user) => (
          <div
            key={user.id}
            onClick={() => handleUserClick(user)}
            className={`flex items-center gap-3 cursor-pointer hover:bg-blue-100 p-2 rounded-md transition ${
              selectedUserId === user.id ? "bg-blue-200" : ""
            }`}
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm font-medium">{user.name}</span>
          </div>
        ))}
      </div>

      {/* Chat Window */}
      {selectedUser && (
        <div className="fixed top-20 right-4 w-[90%] sm:w-[350px] md:w-[400px] h-[90%] bg-white border-l shadow-2xl flex flex-col transition-all duration-300 ease-in-out rounded-lg">
          {/* Chat Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-blue-600 text-white">
            <h3 className="font-semibold text-lg">
              Chat with {selectedUser.name}
            </h3>
            <button onClick={closeChat} className="text-2xl leading-none">
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto">
            {dummyMessages[selectedUserId]?.map((msg, idx) => (
              <div
                key={idx}
                className={`mb-2 p-2 rounded-lg max-w-[70%] ${
                  idx % 2 === 0 ? "bg-blue-100 self-end ml-auto" : "bg-gray-100"
                }`}
              >
                {msg}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border rounded px-3 py-2 text-sm focus:outline-none"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default OpenChat;
