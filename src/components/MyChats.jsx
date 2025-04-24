import React from "react";
import { ChatState } from "../Context/ChatProvider";
import ChatListItem from "./ChatListItem";
// src/components/MyChats.jsx
 

const MyChats = () => {
  const { chats, setSelectedChat, selectedChat } = ChatState();

  return (
    <div className="bg-gray-300 p-4 mr-2 overflow-y-auto h-[calc(100vh-170px)]">
      <h2 className="text-lg font-semibold mb-4">Chats</h2>
      {chats.length === 0 ? (
        <p className="text-gray-500">No chats available</p>
      ) : (
        chats.map((chat) => (
          <div key={chat._id}>
            <ChatListItem
              chat={chat}
              onSelect={setSelectedChat}
              selected={selectedChat?._id === chat._id}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default MyChats;
