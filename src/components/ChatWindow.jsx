import React, { useEffect, useState } from "react";
import MessageBubble from './MessageBubble';
import socketService from '../services/socketService';

const ChatWindow = ({ messages }) => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      socketService.sendMessage(message);
      setMessage("");
    }
  };

  useEffect(() => {
    socketService.receiveMessage((msg) => {
      // Add new message to the messages list
    });
  }, []);

  return (
    <div className="chat-window">
      <div className="messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatWindow;
