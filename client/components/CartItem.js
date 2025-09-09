"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function CartItem() {
  const [quantity, setQuantity] = useState(1);
  const handleRemove = () =>{
    alert("Item removed from cart!");
  }
  const handleDecrease = () => {
     if(quantity > 1) setQuantity(quantity - 1);
  }
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }
  return (
    <>
      <div className="flex gap-5 m-2 p-4 bg-white border border-white rounded-lg hover:shadow-lg transition">
        <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
          <img
            className="w-full h-full object-cover object-top rounded-md"
            src="/men1.jpg"
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-lg text-gray-800">Men White Shirt</h2>
          <p className="text-sm text-gray-500 mt-1">Size: L, White</p>
          <div className="flex items-center gap-3 mt-2">
            <p className="text-lg font-bold text-gray-800">₹500</p>
            <p className="line-through text-sm text-gray-400">₹1700</p>
            <p className="text-sm font-semibold text-green-600">
              {Math.round(((1700 - 500) / 1700) * 100)}% off
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            
            <div className="flex items-center border rounded-md overflow-hidden">
              <button
                onClick={handleDecrease}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                <MinusIcon className="h-4 w-4" />
              </button>
              <span className="px-4 font-medium text-gray-800">{quantity}</span>
              <button
                onClick={handleIncrease}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleRemove}
              className="text-sm text-red-500 hover:text-red-600 flex items-center gap-1"
            >
              <TrashIcon className="h-4 w-4" />
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
