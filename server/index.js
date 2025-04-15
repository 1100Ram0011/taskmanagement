
import http from "http";
import { Server } from "socket.io";
import ChatMessage from "./models/ChatMessage.js"; 

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("Client connected");

  socket.on("join-room", (roomName) => {
    socket.join(roomName);
  });

  socket.on("send-message", async ({ roomName, message, senderId }) => {
    const chat = new ChatMessage({ senderId, message, roomName });
    await chat.save();
    io.to(roomName).emit("receive-message", chat);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));












































// import cookieParser from "cookie-parser";
// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import morgan from "morgan";
// import { errorHandler, routeNotFound } from "./middlewares/errorMiddlewaves.js";
// import routes from "./routes/index.js";
// import { dbConnection } from "./utils/index.js";

// dotenv.config();

// dbConnection();

// const PORT = process.env.PORT || 5000;

// const app = express();

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

// app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

