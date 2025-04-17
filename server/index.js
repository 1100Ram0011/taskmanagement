// import http from "http";
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import { Server } from "socket.io";

// import routes from "./routes/index.js";
// import { dbConnection } from "./utils/index.js";
// import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
// // import ChatMessage from "./models/ChatMessage.js";

// dotenv.config();
// dbConnection();

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));

// app.use("/api", routes);
// app.use(routeNotFound);
// app.use(errorHandler);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   },
// });

// // ✅ Enable socket communication
// io.on("connection", (socket) => {
//   console.log("✅ Client connected");

//   socket.on("join-room", (roomName) => {
//     socket.join(roomName);
//     console.log(`User joined room: ${roomName}`);
//   });

//   socket.on("send-message", async ({ roomName, message, senderId }) => {
//     const chat = { senderId, message, roomName }; // Mock object for now
//     // const chat = new ChatMessage({ senderId, message, roomName });
//     // await chat.save();
//     io.to(roomName).emit("receive-message", chat);
//     console.log(`📨 Message to room ${roomName}:`, chat);
//   });

//   socket.on("disconnect", () => {
//     console.log("❌ Client disconnected");
//   });
// });

// server.listen(PORT, () => console.log(`🚀 Server listening on http://localhost:${PORT}`));
// import http from "http";
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import { Server } from "socket.io";
// import Message from "./models/Message.js";
// import routes from "./routes/index.js";
// import { dbConnection } from "./utils/index.js";
// import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";

// dotenv.config();
// dbConnection();

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));

// app.use("/api", routes);
// app.use(routeNotFound);
// app.use(errorHandler);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   },
// });

// let userSocketMap = {}; // Map to store userId -> socketId mapping

// // ✅ Enable socket communication
// io.on("connection", (socket) => {
//   console.log("✅ Client connected");

//   // Register a user with a socketId when they connect
//   socket.on("register", (userId) => {
//     userSocketMap[userId] = socket.id; // Associate userId with socketId
//     console.log(`User ${userId} connected with socketId ${socket.id}`);
//   });

//   // User joins a room (can be used for group chats)
//   socket.on("join-room", (roomName) => {
//     socket.join(roomName);
//     console.log(`User joined room: ${roomName}`);
//   });

//   // Send message to a specific user (private message)
//   socket.on("send-message", ({ roomName, message, senderId, receiverId }) => {
//     const chat = { senderId, message, roomName };
    
//     // Save the chat message to the database
//     const newMessage = new Message(chat);
//     newMessage.save();
//     // Check if receiver's socketId exists
//     const receiverSocketId = userSocketMap[receiverId];

//     if (receiverSocketId) {
//       // Emit the message to the specific receiver
//       io.to(receiverSocketId).emit("receive-message", chat);
//       console.log(`📨 Private message sent to ${receiverId}:`, chat);
//     } else {
//       console.log(`Receiver ${receiverId} not found!`);
//     }
//   });

//   // Handle disconnect event
//   socket.on("disconnect", () => {
//     // Remove user from the socket map when they disconnect
//     Object.keys(userSocketMap).forEach((userId) => {
//       if (userSocketMap[userId] === socket.id) {
//         delete userSocketMap[userId];
//         console.log(`User ${userId} disconnected`);
//       }
//     });
//   });
// });

// server.listen(PORT, () => {
//   console.log(`🚀 Server listening on http://localhost:${PORT}`);
// }); 
// import http from "http";
// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import { Server } from "socket.io";
// import Message from "./models/Message.js";
// import routes from "./routes/index.js";
// import { dbConnection } from "./utils/index.js";
// import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";

// dotenv.config();
// dbConnection();

// const app = express();
// const PORT = process.env.PORT || 8000;

// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(morgan("dev"));

// app.use("/api", routes);
// app.use(routeNotFound);
// app.use(errorHandler);

// const server = http.createServer(app);

// const io = new Server(server, {
//   cors: {
//     origin: ["http://localhost:3000", "http://localhost:3001"],
//     methods: ["GET", "POST", "DELETE", "PUT"],
//     credentials: true,
//   },
// });

// let userSocketMap = {}; // Map to store userId -> socketId mapping

// // ✅ Enable socket communication
// io.on("connection", (socket) => {
//   console.log("✅ Client connected");

//   // Register a user with a socketId when they connect
//   socket.on("register", (userId) => {
//     userSocketMap[userId] = socket.id; // Associate userId with socketId
//     console.log(`User ${userId} connected with socketId ${socket.id}`);
//   });

//   // User joins a room (can be used for group chats)
//   socket.on("join-room", (roomName) => {
//     socket.join(roomName);
//     console.log(`User joined room: ${roomName}`);
//   });

//   // Send message to a specific user (private message)
//   socket.on("send-message", async ({ roomName, message, senderId, receiverId }) => {
//     const chat = { senderId, message, roomName };

//     try {
//       // Save the chat message to the database
//       const newMessage = new Message(chat);
//       await newMessage.save();
//       console.log(`Message saved to database:`, newMessage);
      
//       // Check if receiver's socketId exists
//       const receiverSocketId = userSocketMap[receiverId];

//       if (receiverSocketId) {
//         // Emit the message to the specific receiver
//         io.to(receiverSocketId).emit("receive-message", chat);
//         console.log(`📨 Private message sent to ${receiverId}:`, chat);
//       } else {
//         console.log(`Receiver ${receiverId} not found!`);
//       }
//     } catch (error) {
//       console.error("Error saving message to database:", error);
//     }
//   });

//   // Handle disconnect event
//   socket.on("disconnect", () => {
//     // Remove user from the socket map when they disconnect
//     Object.keys(userSocketMap).forEach((userId) => {
//       if (userSocketMap[userId] === socket.id) {
//         delete userSocketMap[userId];
//         console.log(`User ${userId} disconnected`);
//       }
//     });
//   });
// });

// server.listen(PORT, () => {
//   console.log(`🚀 Server listening on http://localhost:${PORT}`);
// });

import http from "http";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { Server } from "socket.io";
import mongoose from "mongoose"; // ✅ Import mongoose for ObjectId conversion

import Message from "./models/Message.js";
import routes from "./routes/index.js";
import { dbConnection } from "./utils/index.js";
import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";

dotenv.config();
dbConnection();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api", routes);
app.use(routeNotFound);
app.use(errorHandler);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});

let userSocketMap = {}; // userId => socketId mapping

// ✅ Enable socket communication
io.on("connection", (socket) => {
  console.log("✅ Client connected");

  socket.on("register", (userId) => {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} connected with socketId ${socket.id}`);
  });

  socket.on("join-room", (roomName) => {
    socket.join(roomName);
    console.log(`User joined room: ${roomName}`);
  });

  socket.on("send-message", async ({ roomName, message, senderId, receiverId }) => {
    try {
      const chat = {
        senderId: mongoose.Types.ObjectId(senderId),     // ✅ Fix here
        receiverId: mongoose.Types.ObjectId(receiverId), // ✅ Fix here
        message,
        roomName,
      };

      const newMessage = new Message(chat);
      await newMessage.save();
      console.log(`💾 Message saved to DB:`, newMessage);

      const receiverSocketId = userSocketMap[receiverId];
      if (receiverSocketId) {
        io.to(receiverSocketId).emit("receive-message", chat);
        console.log(`📨 Message sent to ${receiverId}:`, chat);
      } else {
        console.log(`⚠️ Receiver ${receiverId} not found online.`);
      }
    } catch (error) {
      console.error("❌ Error saving message to database:", error);
    }
  });

  socket.on("disconnect", () => {
    for (const userId in userSocketMap) {
      if (userSocketMap[userId] === socket.id) {
        delete userSocketMap[userId];
        console.log(`❌ User ${userId} disconnected`);
      }
    }
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
