import Chat from "../models/Chat.js";
import Message from "../models/Message.js";

const socketSetup = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    socket.on("joinRoom", (roomName) => {
      socket.join(roomName);
      console.log(`User joined room: ${roomName}`);
    });

    socket.on("sendMessage", async ({ room, message, senderId, receiverId }) => {
      const chat = await Chat.findOne({ participants: { $all: [senderId, receiverId] } });
      if (!chat) return;

      const newMessage = await Message.create({
        chatId: chat._id,
        senderId,
        text: message,
      });

      io.to(room).emit("receiveMessage", {
        senderId,
        message,
      });
    });
  });
};

export default socketSetup;
