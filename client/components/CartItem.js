"use client";
import { useState } from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";
export default function CartItem({ item }) {
  const {updateQty, removeFromCart} = useCart();
  const [quantity, setQuantity] = useState(item.quantity);
  const price = item.price;
  const dprice = item.discountedPrice || item.price; ;
  const off = Math.round(((price - dprice)/price)*100);
  const handleRemove = async() =>{
    await removeFromCart(item._id);
    toast.success(response.data.message);
  }
  const handleDecrease = async() => {
    if(quantity <= 1) return ;
    const q = quantity -1
    setQuantity(q);
    await updateQty(item._id, q);
  }
  const handleIncrease = async() => {
    const q = quantity + 1
    setQuantity(q);
    await updateQty(item._id, q);
  }
  return (
    <>
      <div className="flex gap-5 m-2 p-4 bg-white border border-white rounded-lg hover:shadow-lg transition">
        <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
          <img
            className="w-full h-full object-cover object-top rounded-md"
            src={item?.product?.imageUrl}
            alt={item?.product?.title }
          />
        </div>
        <div className="flex flex-col flex-1">
          <h2 className="font-medium text-lg text-gray-800">{item?.product?.title}</h2>
          <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
          <div className="flex items-center gap-3 mt-2">
            <p className="text-lg font-bold text-gray-800">₹{dprice}</p>
            <p className="line-through text-sm text-gray-400">₹{price}</p>
            <p className="text-sm font-semibold text-green-600">
              {off}% off
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
