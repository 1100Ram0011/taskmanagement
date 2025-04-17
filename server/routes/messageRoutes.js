import express from "express";
import { saveMessage, getMessages } from "../controllers/messageController.js";

const router = express.Router();

router.post("/", saveMessage);
router.get("/:chatId", getMessages);

export default router;
