import Message from "../models/Message.js";

export const saveMessage = async (req, res) => {
  const { senderId, receiverId, message, chatId } = req.body;

  try {
    const newMessage = await Message.create({ senderId, receiverId, message, chatId });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to save message" });
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await Message.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};
