import { register, login, refresh, logout } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/refresh", refresh);
router.post("/logout", logout);
export default router;