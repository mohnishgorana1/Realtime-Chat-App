import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  conversationId: {
    type: String,
  },
  senderId: {
    type: String
  },
  message: {
    type: String
  }
});

export const Message = mongoose.model("Message", messageSchema);
