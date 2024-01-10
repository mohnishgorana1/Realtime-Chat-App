import express from "express";
import {
  createConversation,
  getConversations,
} from "../controllers/conversation.controllers.js";

const router = express.Router();

router.post("/", createConversation); // /api/conversation/
router.get("/:userId", getConversations); // /api/conversation/:userId

export default router;
