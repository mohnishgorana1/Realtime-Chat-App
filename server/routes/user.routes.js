import express from "express";
import { loginUser, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser);   // /api/user/register
router.get("/login", loginUser);         // /api/user/login


export default router