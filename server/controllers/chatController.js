import express from 'express';
import { getMessages } from '../controllers/chatController.js';

const router = express.Router();

// API route for getting messages in a room
router.get('/messages/:roomName', getMessages);

export default router;
