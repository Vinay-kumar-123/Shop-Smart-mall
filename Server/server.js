import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongo from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import { requireAuth } from "./middlewares/authMiddleware.js";
dotenv.config();
const PORT= process.env.PORT || 3000;
const app = express();
app.use(cors({origin: "http://localhost:3000", credentials:true}))
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth/user", authRoutes);
app.use("/api/auth/cart", cartRoutes);



app.get("/api/me", requireAuth, async(req, res) => {
    res.json({ message: "Protected data", user: req.user });
})
app.listen(PORT, ()=>{
    connectToMongo();
    console.log(`Server running on port ${PORT}`);
})