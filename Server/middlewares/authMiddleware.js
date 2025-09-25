// middleware/auth.js
import jwt from "jsonwebtoken";

export const requireAuth = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) return res.status(401).json({ message: "Missing auth header" });

    const token = header.split(" ")[1];
    const payload = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = payload; // { userId, email }
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
