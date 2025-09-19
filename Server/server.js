import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectToMongo from "./config/db.js";
dotenv.config();
const PORT= process.env.PORT || 3000;
const app = express();
app.use(cors({origin: "http://localhost:3000", credentials:true}))
app.use(express.json());
app.use(cookieParser());
app.get("/",(req, res) => {
    return res.status(200).send({message: "Welcome my smart mall", status:true})
})
app.listen(PORT, ()=>{
    connectToMongo();
    console.log(`Server running on port ${PORT}`);
})