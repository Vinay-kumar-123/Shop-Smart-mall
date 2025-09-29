import User  from "../models/User.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"; 

const createAccessToken = (payload) =>
  jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m" });

const createRefreshToken = (payload) =>
  jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || "7d" });


export const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }
    const isUser = await User.findOne({ email });
    if (isUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists with this email",
      });
    }
    const handlePassword = await bcrypt.hash(password, 10);
    await User.create({
      firstName,
      lastName,
      email,
      password: handlePassword,
    });
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
    });
  } catch (error) {
    console.error("Register Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "failed to register",
    });
  }
};


export const login = async(req, res) => {
  try {
    const {email, password} = req.body;
    if(!email || !password){
        return res.status(400).json({
            success: false,
            message:"All fields are required",
        })
    }
    const isUser = await User.findOne({email});
    if(!isUser){
        return res.status(400).json({
            success:false,
            message:"Incorrect email or password",
        })
    }
    const passwordCheck = await bcrypt.compare(password, isUser.password);
    if(!passwordCheck){
        return res.status(400).json({
        success: false,
        message: "Incorrect email or password",
      });
    }
    const payload = { userId: isUser._id, email: isUser.email };
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    isUser.refreshTokens.push({ token: refreshToken});
    await isUser.save();
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    })
    return res.json({
      message: `Welcome back ${isUser.firstName}`,
      success:true,
      accessToken,
      isUser
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "failed to Login",
    });
  }
}



export const refresh = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    let payload;
    try {
      payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch (err) {
      return res.status(401).json({ message: "Invalid refresh token" });
    }

    const user = await User.findById(payload.userId);
    if (!user) return res.status(401).json({ message: "User not found" });

    // Check if refresh token exists in DB
    const tokenIndex = user.refreshTokens.findIndex((r) => r.token === token);
    if (tokenIndex === -1) {
      // Possible token reuse attack — clear all refresh tokens for user
      user.refreshTokens = [];
      await user.save();
      return res.status(401).json({ message: "Refresh token invalidated" });
    }

    // Rotate refresh token: remove old and add new
    user.refreshTokens.splice(tokenIndex, 1); // remove old
    const newRefreshToken = createRefreshToken({ userId: user._id, email: user.email });
    user.refreshTokens.push({ token: newRefreshToken });
    await user.save();

    const accessToken = createAccessToken({ userId: user._id, email: user.email });

    // set new cookie
    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.json({ accessToken });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};


export const logout = async (req, res) => {
  try {
    const token = req.cookies?.refreshToken;
    if (token) {
      // remove this token from DB to revoke
      const payload = jwt.verify(token, process.env.JWT_REFRESH_SECRET);
      const user = await User.findById(payload.userId);
      if (user) {
        user.refreshTokens = user.refreshTokens.filter((r) => r.token !== token);
        await user.save();
      }
    }

    // clear cookie (client will lose refresh token)
    res.clearCookie("refreshToken", { httpOnly: true, sameSite: "strict", secure: process.env.NODE_ENV === "production" });
    return res.json({ success: true, message: "Logged out" });
  } catch (err) {
    console.error(err);
    res.clearCookie("refreshToken");
    return res.status(200).json({ success: true, message: "Logged out" });
  }
};




