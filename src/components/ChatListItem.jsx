import React from "react";

const ChatListItem = ({ chat, onSelect }) => {
  const name = chat.isGroupChat
    ? chat.chatName
    : chat.users.find((u) => u._id !== "me")?.name;

  return (
    <div
      onClick={() => onSelect(chat)}
      className="p-3 border rounded mb-2 cursor-pointer hover:bg-gray-100"
    >
      <strong>{name}</strong>
      <div className="text-sm text-gray-500">{chat.latestMessage?.content}</div>
    </div>
  );
};

export default ChatListItem;