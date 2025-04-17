// import io from "socket.io-client";

// const socket = io("http://localhost:8000");

// export const joinRoom = (roomName) => {
//   socket.emit("join-room", roomName);
// };

// export const sendMessage = (roomName, message, senderId) => {
//   socket.emit("send-message", { roomName, message, senderId });
// };

// export const onReceiveMessage = (callback) => {
//   socket.on("receive-message", callback);
// };

// export const disconnectSocket = () => {
//   socket.disconnect();
// };
import { io } from "socket.io-client";

const socket = io("http://localhost:8000", {
  withCredentials: true,
});

export const registerSocket = (userId) => socket.emit("register", userId);
export const joinRoom = (roomName) => socket.emit("join-room", roomName);
export const sendMessage = (data) => socket.emit("send-message", data); // Updated function
export const onReceiveMessage = (cb) => socket.on("receive-message", cb);

export default socket;
