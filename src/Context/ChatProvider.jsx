// src/context/ChatProvider.jsx
import React, { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [user, setUser] = useState({ _id: "me", name: "You" });
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState([
    {
      _id: "chat1",
      isGroupChat: false,
      users: [{ _id: "1", name: "Alice" }, { _id: "me", name: "You" }],
      latestMessage: { content: "Hey there!" },
    },
    {
      _id: "chat2",
      isGroupChat: true,
      chatName: "Team Alpha",
      users: [
        { _id: "1", name: "Alice" },
        { _id: "2", name: "Bob" },
        { _id: "me", name: "You" },
      ],
      latestMessage: { content: "Meeting at 5 PM" },
    },
  ]);

  return (
    <ChatContext.Provider value={{ user, selectedChat, setSelectedChat, chats, setChats }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => useContext(ChatContext);

