import Razorpay from "razorpay";
import crypto from "crypto";
import asyncHandler from "express-async-handler";

import Cart from "../models/Cart.js";
import CartItems from "../models/CartItems";
import Orders from "../models/Order.js";
import OrdersItems from "../models/OrderItems.js";
import Product from "../models/Product.js";
import Address from "../models/Address.js"
import { model } from "mongoose";
import products from "razorpay/dist/types/products.js";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
})

const buildOrderFromCart = async(userId) => {
    const cart = await Cart.findOne({user: userId}).populate({
        path: "cartItems",
        populate: { path : "product", model: products},
    });
    if(!cart || !cart.cartItems.length){
        throw new Error("Cart is empty");
    }

    let orderItemsData = [];
    let totalPrice = 0;
    let totalDiscounted = 0;
    let totalItemS = 0;

    for(const ci of cart.cartItems){
        const prod = ci.product
    }
}