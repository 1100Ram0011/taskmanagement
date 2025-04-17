import express from "express";
import userRoutes from "./userRoutes.js";
import taskRoutes from "./taskRoutes.js";
import messageRoutes from "./messageRoutes.js";  // Import message routes

const router = express.Router();

router.use("/user", userRoutes);  // /api/user/login
router.use("/task", taskRoutes);  // /api/task routes
router.use("/messages", messageRoutes);  // /api/messages/{roomName}

export default router;
