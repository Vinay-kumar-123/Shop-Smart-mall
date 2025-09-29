import express from "express";
import {requireAuth} from "../middlewares/authMiddleware.js"
import { addToCart, removeFromCart, getCart } from "../controllers/cartController.js";

const router = express.Router();
router.post("/add", requireAuth, addToCart);
router.delete("/remove/:cartItemId", requireAuth, removeFromCart);
router.get("/cart", requireAuth, getCart);
export default router;