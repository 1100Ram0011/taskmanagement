const mongoose = require("mongoose");

const chatMessageSchema = new mongoose.Schema({
  senderId: String,
  message: String,
  roomName: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ChatMessage", chatMessageSchema);
