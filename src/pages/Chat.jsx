import React, { useState } from "react";

const users = [
  { id: 1, name: "Ramcharan", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Altaf", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Prakash", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Arpita", avatar: "https://i.pravatar.cc/150?img=4" },
];

const initialMessages = {
  1: [
    {
      sender: "them",
      text: "Hi User!",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      sender: "them",
      text: "How are you doing today?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  2: [
    {
      sender: "them",
      text: "Hey User!",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      sender: "them",
      text: "Got time to review the report?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  3: [
    {
      sender: "them",
      text: "Yo User!",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      sender: "them",
      text: "Ready for the meeting?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
  4: [
    {
      sender: "them",
      text: "Hello User!",
      timestamp: new Date().toLocaleTimeString(),
    },
    {
      sender: "them",
      text: "Lunch at 1?",
      timestamp: new Date().toLocaleTimeString(),
    },
  ],
};

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setInputValue("");
  };

  const newMessage = {
    sender: "you",
    text: inputValue,
    timestamp: new Date().toLocaleTimeString(),
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || !selectedUser) return;

    const newMessage = { sender: "you", text: inputValue };
    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...(prev[selectedUser.id] || []), newMessage],
    }));
    setInputValue("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      {/* Sidebar: User List */}
      <div className="w-full md:w-1/3 lg:w-1/4 border-r p-4 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <div className="flex flex-col gap-3">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => handleUserClick(user)}
              className={`flex items-center gap-3 p-2 rounded cursor-pointer hover:bg-gray-100 transition ${
                selectedUser?.id === user.id ? "bg-blue-100" : ""
              }`}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-medium">{user.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col justify-between p-4 bg-white rounded shadow h-[80vh]">
        {selectedUser ? (
          <>
            <div className="mb-4 border-b pb-2 flex items-center gap-3">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.name}
                className="w-10 h-10 rounded-full"
              />
              <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
            </div>

            <div className="flex-1 overflow-y-auto flex flex-col gap-2 mb-4 pr-2">
              {messages[selectedUser.id]?.map((msg, idx) => (
                <div
                  key={idx}
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.sender === "you"
                      ? "bg-blue-600 text-white self-end"
                      : "bg-gray-100 text-gray-800 self-start"
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-xs text-gray-300 block mt-1 text-right">
                    {msg.timestamp}
                  </span>
                </div>
              ))}
            </div>

            {/* Input Box */}
            <div className="flex gap-2 items-center border-t pt-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleEnter}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500">Select a user to start chatting</p>
        )}
      </div>
    </div>
  );
};

export default Chat;
