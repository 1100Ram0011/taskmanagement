import React, { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { IoMdSend } from "react-icons/io";
// src/components/Chatbox.jsx
 

const Chatbox = () => {
  const { selectedChat, user } = ChatState();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const msg = {
      sender: user.name,
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, msg]);
    setNewMessage("");
  };

  if (!selectedChat) return (
    <div className="w-2/3 p-4 flex items-center justify-center text-gray-500">
      Select a chat to view messages
    </div>
  );

  const chatName = selectedChat.isGroupChat
    ? selectedChat.chatName
    : selectedChat.users.find((u) => u._id !== user._id)?.name;

  return (
    <div className="w-2/3 p-4 flex flex-col border-l">
      <h2 className="text-lg font-semibold mb-2 border-b pb-2">{chatName}</h2>

      <div className="flex-1 overflow-y-auto p-2 space-y-2 bg-gray-50 border-gray-400 rounded mb-2">
        {messages.map((msg, i) => {
          const isMine = msg.sender === user.name;
          return (
            <div
              key={i}
              className={`flex ${isMine ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[60%] p-2 rounded-lg shadow ${
                  isMine
                    ? "bg-green-300/60 text-black text-right"
                    : "bg-blue-300/60 text-black text-left"
                }`}
              >
                <div className="flex text-sm font-medium">{msg.sender}</div>
                <div>{msg.content}</div>
                <div className="text-xs text-gray-500/70 mt-1">
                  {msg.timestamp}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex">
        <input
          type="text"
          className="border rounded w-full p-2 mr-2"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          <IoMdSend />
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
