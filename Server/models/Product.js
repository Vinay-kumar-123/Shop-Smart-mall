
import { required } from "joi";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    title:{
        type:String, 
        required: true,
    },
    description:{
        type:String, 
        required:true,
    },
    price:{
        type: Number,
        required: true,
    },
    discountedPrice:{
        type: Number,
        
    },
    discountedPersent:{
        type: Number,
        
    },
    quantity:{
        type: Number,
        required: true,
    },
    userId: {
        type:mongoose.Schema.Types.ObjectId, 
        ref:"users",
        required: true,
    },
    
});

const OrdersItems = mongoose.model('orderItems', OrderItemsSchema);
module.exports = OrdersItems;