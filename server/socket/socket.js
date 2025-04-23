// import { Server } from 'socket.io';

// let io;

// const initSocket = (server) => {
//   io = new Server(server, {
//     cors: {
//       origin: '*',
//     },
//   });

//   io.on('connection', (socket) => {
//     console.log('New client connected');

//     // Join a specific room
//     socket.on('join room', (roomName) => {
//       socket.join(roomName);
//       console.log(`User joined room: ${roomName}`);
//     });

//     // Handle message send
//     socket.on('send message', (messageData) => {
//       // Emit message to the room
//       io.to(messageData.roomName).emit('receive message', messageData);
//     });

//     socket.on('disconnect', () => {
//       console.log('User disconnected');
//     });
//   });
// };

// export { io, initSocket };
import socketIo from 'socket.io';
import ChatMessage from '../models/ChatMessage.js';

const socketSetup = (server) => {
  const io = socketIo(server);

  io.on('connection', (socket) => {
    console.log('New user connected');

    // Join a room
    socket.on('joinRoom', (roomName) => {
      socket.join(roomName);
      console.log(`User joined room: ${roomName}`);
    });

    // Handle incoming message
    socket.on('sendMessage', async (data) => {
      const { senderId, message, roomName } = data;

      // Save message to the database
      const newMessage = new ChatMessage({ senderId, message, roomName });
      await newMessage.save();

      // Emit the message to the room
      io.to(roomName).emit('receiveMessage', newMessage);
    });

    // Disconnecting user
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });

  return io;
};

export default socketSetup;
