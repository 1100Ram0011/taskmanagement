import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  participants: [{ type: String }], // userId strings
  isGroup: { type: Boolean, default: false },
});

export default mongoose.model("Chat", chatSchema);
