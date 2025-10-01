import { model } from "mongoose";
import Cart from "../models/Cart.js";
import CartItems from "../models/CartItems.js";
import Product from "../models/Product.js";

const updateCartTotals = async(cart) => {
    const cartItems = await CartItems.find({ cart: cart._id });
    let totalPrice = 0;
    let totalDiscounted = 0;
    let totalItem = cartItems.length;

    cartItems.forEach(items => {
        totalPrice += items.price * items.quantity;
        totalDiscounted += items.discountedPrice * items.quantity;
    });

    cart.totalPrice = totalPrice;
    cart.totalDiscounted = totalDiscounted;
    cart.discounte = totalPrice - totalDiscounted;
    cart.totalItem =  totalItem;

    await cart.save();
    return cart;
}

export const addToCart = async(req, res)=> {
    const{productId, size, quantity } = req.body;
    const userId = req.user._id;
    try {
       let cart = await Cart.findOne({user: userId});
       if(!cart){
           cart = await Cart.create({ user: userId, cartItems: [] });
        } 
        let existingItem = await CartItems.findOne({
            cart : cart._id,
            product : productId,
            size,
        });
        if(existingItem){
            existingItem.quantity += quantity;
            await existingItem.save();
        }else{
            const product = await Product.findById(productId);
            const newItems = await CartItems.create({
                cart : cart._id,
                product: productId,
                size,
                quantity,
                price: product.price,
                discountedPrice: product.discoudiscountedPrice || product.price,
                userId,
            })
            cart.cartItems.push(newItems._id);
            await cart.save();
        }
        const updateCart = await updateCartTotals(cart);
        return res.status(200).json({
            success: true,
            cart: updateCart
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
    
}


export const removeFromCart = async(req, res) => {
    const {cartItemId} = req.params;
    const userId = req.user._id;
    try {
        const item = await CartItems.findOne({_id: cartItemId, userId});
        if(!item) return res.status(404).json({ message: "Item not found" });
        const cart = await Cart.findById(item.cart);
        cart.cartItems.pull(cartItemId);
        await cart.save();
        await CartItems.deleteOne({ _id: cartItemId });
        const updatedCart = await updateCartTotals(cart);
        return res.status(200).json({
             success: true, 
             message: "Item removed from cart!",
             cart: updatedCart 
            });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const getCart = async(req, res) => {
    const userId = req.user._id;
    try {
        const cart = await Cart.findOne({user: userId}).populate({
            path: "cartItems",
            populate:{path: "product", model: "products"},
        });
        if(!cart) return res.status(404).json({ message: "Cart not found" });
        return res.status(200).json({
            success: true,
            cart
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}


export const updateCartItem = async(req, res)=> {
    const{cartItemId} = req.params;
    const{ quantity } = req.body;
    const userId = req.user._id;
    try {
        const item = await CartItems.findOne({ _id: cartItemId, userId});
        if(!item) return res.status(400).json({
            success: false,
            message: "Item not found"
        })
        item.quantity = quantity;
        await item.save();
        const cart = await Cart.findById(item.cart);
        const updatedCart = await updateCartTotals(cart);
        return res.status(200).json({
            success: true,
            cart: updatedCart
        })
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}