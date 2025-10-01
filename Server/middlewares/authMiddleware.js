// middleware/auth.js
import jwt from "jsonwebtoken";
import User from "../models/User.js"
export const requireAuth = async(req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "Missing auth header" });

    const token = header.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    const user = await User.findById(payload.userId);
    if (!user) return res.status(401).json({ message: "User not found" });
    req.user = user; 
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
