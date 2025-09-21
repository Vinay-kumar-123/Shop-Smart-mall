import { User } from "../models/User.js";
import jwt from "jsonwebtoken"

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
    return res.status(201).json({
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
    const token = jwt.sign({userId: isUser._id}, process.env.JWT_SECRET, {
      expiresIn:"48h"
    })
    return res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1 * 24 * 60 * 60 * 1000,
    })
    .json({
      message: `Welcome back ${isUser.firstName}`,
      success:true,
      isUser
    })
  } catch (error) {
    return res.status(201).json({
      success: false,
      message: "failed to Login",
    });
  }
}
