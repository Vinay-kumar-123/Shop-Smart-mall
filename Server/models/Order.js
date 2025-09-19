
import { required } from "joi";
import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"users",
    },
    orderItems:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"orderItems",
    },
    orderData:{
       type: Date,
        required: true,
        default: Date.now(),
    },
    deliveryData:{
        type: Date,
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"addresses",
    },
    paymentDetails:{
        paymentMethod:{type:String},
        transactionId:{type:String},
        paymentId:{type:String},
        paymentStatus:{type:String, default:"Pending"},
    },
    totalPrice: {
        type:Number,
        required:true,
    },
    totalDiscountedPrice:{type:Number, required:true},
    discounte:{type:Number, required:true},
    orderStatus: {type:String, required:true, default:"Pending"},
    totalItem:{type:Number, required:true},
    createdAt:{type:Date , default:Date.now()},
});

const Orders = mongoose.model('orders', OrderSchema);
module.exports = Orders;