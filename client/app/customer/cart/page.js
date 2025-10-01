"use client";
import CartItem from "@/components/CartItem";

import Link from "next/link";
import { useCart } from "@/hooks/useCart";
export default function Cart() {
  const {cart, cartLoading} = useCart();
  if(cartLoading) return <div className="p-6">Loading…</div>;
  if(!cart || cart.totalItem === 0) return <div className="p-6">Your cart is empty.</div>;
  const total = cart.totalPrice - cart.totalDiscounted;
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 bg-gray-100 min-h-screen">
      
      
      <div className="flex-1  p-4 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold border-b pb-3 mb-4">
          My Cart ({cart.totalItem} Items)
        </h1>
        <div className="space-y-4">
          {cart.cartItems.map((ci) => (
            <CartItem key={ci._id} item={ci} />
          ))}
        </div>
      </div>

     
      <div className="w-full lg:w-[30%] bg-white rounded-lg shadow-md p-5 h-fit sticky top-4">
        <h2 className="text-gray-500 font-semibold mb-3 border-b border-gray-200 pb-2">
          PRICE DETAILS
        </h2>

        
        <div className="space-y-3 text-sm text-gray-700 border-b border-gray-200 pb-3">
          <div className="flex justify-between">
            <span>Price ({cart.totalItem} items)</span>
            <span>₹{cart.totalPrice}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹{cart.totalDiscounted}</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
        </div>

        
        <div className="flex justify-between text-base font-semibold mt-3">
          <span>Total Amount</span>
          <span>₹{total}</span>
        </div>

       <Link href="/customer/checkout">
        <button className="w-full mt-5 bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
          CHECKOUT
        </button>
        </Link>
      </div>
    </div>
  );
}
