// // import React, { useState, useEffect } from "react";
// // import { registerSocket, joinRoom, sendMessage, onReceiveMessage } from "../services/socketService";

// // const Chat = () => {
// //   const currentUser = {
// //     id: "user1",
// //     name: "Ramcharan",
// //     avatar: "https://i.pravatar.cc/150?img=1",
// //   };

// //   const users = [
// //     { id: "user2", name: "Altaf", avatar: "https://i.pravatar.cc/150?img=2" },
// //     { id: "user3", name: "Prakash", avatar: "https://i.pravatar.cc/150?img=3" },
// //     { id: "user4", name: "Arpita", avatar: "https://i.pravatar.cc/150?img=4" },
// //   ];

// //   const [selectedUser, setSelectedUser] = useState(null);
// //   const [room, setRoom] = useState("");
// //   const [messages, setMessages] = useState([]);
// //   const [inputValue, setInputValue] = useState("");

// //   useEffect(() => {
// //     // Register the current user
// //     registerSocket(currentUser.id);

// //     // Listen for incoming messages
// //     onReceiveMessage((message) => {
// //       setMessages((prev) => [...prev, message]);
// //     });
// //   }, []);

// //   useEffect(() => {
// //     if (selectedUser) {
// //       const roomName = [currentUser.id, selectedUser.id].sort().join("-");
// //       setRoom(roomName);
// //       joinRoom(roomName);
// //       setMessages([]); // Reset messages when switching users
// //     }
// //   }, [selectedUser]);

// //   const handleSendMessage = () => {
// //     if (inputValue.trim() && selectedUser) {
// //       const newMsg = {
// //         message: inputValue,
// //         senderId: currentUser.id,
// //         receiverId: selectedUser.id,
// //         roomName: room,
// //       };

// //       sendMessage(newMsg); // Emit message to socket
// //       setMessages((prev) => [...prev, newMsg]); // Add message locally
// //       setInputValue(""); // Clear input field
// //     }
// //   };

// //   return (
// //     <div className="flex">
// //       {/* Sidebar */}
// //       <div className="w-1/4 p-4 bg-white border-r">
// //         <h2 className="text-xl font-semibold mb-4">Users</h2>
// //         {users.map((user) => (
// //           <div
// //             key={user.id}
// //             onClick={() => setSelectedUser(user)}
// //             className={`flex items-center gap-2 p-2 rounded cursor-pointer ${selectedUser?.id === user.id ? "bg-blue-100" : ""}`}
// //           >
// //             <img
// //               src={user.avatar}
// //               alt={user.name}
// //               className="w-10 h-10 rounded-full"
// //             />
// //             <span>{user.name}</span>
// //           </div>
// //         ))}
// //       </div>

// //       {/* Chat window */}
// //       <div className="w-3/4 p-4 bg-white">
// //         {selectedUser ? (
// //           <>
// //             <div className="flex items-center gap-2 mb-4">
// //               <img
// //                 src={selectedUser.avatar}
// //                 alt={selectedUser.name}
// //                 className="w-10 h-10 rounded-full"
// //               />
// //               <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
// //             </div>

// //             <div className="overflow-y-auto max-h-[400px]">
// //               {messages.map((msg, idx) => (
// //                 <div
// //                   key={idx}
// //                   className={`mb-2 ${msg.senderId === currentUser.id ? "text-right" : ""}`}
// //                 >
// //                   <div
// //                     className={`inline-block p-2 rounded ${
// //                       msg.senderId === currentUser.id ? "bg-blue-500 text-white" : "bg-gray-200"
// //                     }`}
// //                   >
// //                     <span>{msg.message}</span>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             <div className="mt-4 flex gap-2">
// //               <input
// //                 type="text"
// //                 value={inputValue}
// //                 onChange={(e) => setInputValue(e.target.value)}
// //                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
// //                 placeholder="Type a message..."
// //                 className="border p-2 rounded w-full"
// //               />
// //               <button
// //                 onClick={handleSendMessage}
// //                 className="bg-blue-500 text-white p-2 rounded"
// //               >
// //                 Send
// //               </button>
// //             </div>
// //           </>
// //         ) : (
// //           <p>Select a user to start chatting.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chat;
// import React, { useState, useEffect, useRef } from "react";
// import { registerSocket, joinRoom, sendMessage, onReceiveMessage } from "../services/socketService";

// const Chat = () => {
//   const currentUser = {
//     id: "user1",
//     name: "Ramcharan",
//     avatar: "https://i.pravatar.cc/150?img=1",
//   };

//   const users = [
//     { id: "user2", name: "Altaf", avatar: "https://i.pravatar.cc/150?img=2" },
//     { id: "user3", name: "Prakash", avatar: "https://i.pravatar.cc/150?img=3" },
//     { id: "user4", name: "Arpita", avatar: "https://i.pravatar.cc/150?img=4" },
//   ];

//   const [selectedUser, setSelectedUser] = useState(null);
//   const [room, setRoom] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [loading, setLoading] = useState(false);  // For message status

//   const messageEndRef = useRef(null);  // To scroll to the latest message

//   useEffect(() => {
//     // Register the current user
//     registerSocket(currentUser.id);

//     // Listen for incoming messages
//     onReceiveMessage((message) => {
//       setMessages((prev) => [...prev, message]);
//     });
//   }, []);

//   useEffect(() => {
//     if (selectedUser) {
//       const roomName = [currentUser.id, selectedUser.id].sort().join("-");
//       setRoom(roomName);
//       joinRoom(roomName);
//       setMessages([]); // Reset messages when switching users
//     }
//   }, [selectedUser]);

//   // Auto-scroll when a new message is added
//   useEffect(() => {
//     if (messageEndRef.current) {
//       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (inputValue.trim() && selectedUser) {
//       setLoading(true); // Start loading indicator
//       const newMsg = {
//         message: inputValue,
//         senderId: currentUser.id,
//         receiverId: selectedUser.id,
//         roomName: room,
//       };

//       sendMessage(newMsg); // Emit message to socket
//       setMessages((prev) => [...prev, newMsg]); // Add message locally
//       setInputValue(""); // Clear input field
//     }
//   };

//   return (
//     <div className="flex">
//       {/* Sidebar */}
//       <div className="w-1/4 p-4 bg-white border-r">
//         <h2 className="text-xl font-semibold mb-4">Users</h2>
//         {users.map((user) => (
//           <div
//             key={user.id}
//             onClick={() => setSelectedUser(user)}
//             className={`flex items-center gap-2 p-2 rounded cursor-pointer ${selectedUser?.id === user.id ? "bg-blue-100" : ""}`}
//           >
//             <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
//             <span>{user.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Chat window */}
//       <div className="w-3/4 p-4 bg-white">
//         {selectedUser ? (
//           <>
//             <div className="flex items-center gap-2 mb-4">
//               <img
//                 src={selectedUser.avatar}
//                 alt={selectedUser.name}
//                 className="w-10 h-10 rounded-full"
//               />
//               <h3 className="text-lg font-semibold">{selectedUser.name}</h3>
//             </div>

//             <div className="overflow-y-auto max-h-[400px]">
//               {messages.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={`mb-2 ${msg.senderId === currentUser.id ? "text-right" : ""}`}
//                 >
//                   <div
//                     className={`inline-block p-2 rounded ${
//                       msg.senderId === currentUser.id ? "bg-blue-500 text-white" : "bg-gray-200"
//                     }`}
//                   >
//                     <span>{msg.message}</span>
//                     {/* Add message status */}
//                     {msg.senderId === currentUser.id && (
//                       <span className="ml-2 text-xs text-gray-500">
//                         {loading ? "Sending..." : "Sent"}
//                       </span>
//                     )}
//                   </div>
//                 </div>
//               ))}
//               {/* Scroll to bottom */}
//               <div ref={messageEndRef} />
//             </div>

//             <div className="mt-4 flex gap-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder="Type a message..."
//                 className="border p-2 rounded w-full"
//               />
//               <button
//                 onClick={handleSendMessage}
//                 className="bg-blue-500 text-white p-2 rounded"
//               >
//                 Send
//               </button>
//             </div>
//           </>
//         ) : (
//           <p>Select a user to start chatting.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Chat;
// src/pages/Chat.jsx
import React, { useState } from "react";
import Chatbox from "../components/Chatbox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
// import GroupChatModal from "../components/GroupChatModal";
import { ChatProvider } from "../Context/ChatProvider";

const Chat = () => {
  return (
    <ChatProvider>
      <div className="w-full">
        <SideDrawer />
        {/* <GroupChatModal onClose={() => setOnClose(false)} /> */}
        <div className="flex h-[80vh]">
          <MyChats />
          <Chatbox />
        </div>
      </div>
    </ChatProvider>
  );
};

export default Chat;