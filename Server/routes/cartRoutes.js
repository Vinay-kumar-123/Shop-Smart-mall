import express from "express";
import {requireAuth} from "../middlewares/authMiddleware.js"
import { addToCart, removeFromCart, getCart, updateCartItem } from "../controllers/cartController.js";

const router = express.Router();
router.post("/add", requireAuth, addToCart);
router.delete("/remove/:cartItemId", requireAuth, removeFromCart);
router.get("/carts", requireAuth, getCart);
router.patch("/update/:cartItemId", requireAuth, updateCartItem);
export default router;