import ChatMessage from "../models/ChatMessage.js";

export const sendMessage = async (req, res) => {
  try {
    const { senderId, message, roomName } = req.body;
    const newMessage = new ChatMessage({ senderId, message, roomName });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ message: "Error sending message" });
  }
};
