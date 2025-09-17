import CartItem from "@/components/CartItem";
import Link from "next/link";

export default function Cart() {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 bg-gray-100 min-h-screen">
      
      
      <div className="flex-1  p-4 rounded-lg shadow-md">
        <h1 className="text-lg font-semibold border-b pb-3 mb-4">
          My Cart (3 Items)
        </h1>
        <div className="space-y-4">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </div>

     
      <div className="w-full lg:w-[30%] bg-white rounded-lg shadow-md p-5 h-fit sticky top-4">
        <h2 className="text-gray-500 font-semibold mb-3 border-b border-gray-200 pb-2">
          PRICE DETAILS
        </h2>

        
        <div className="space-y-3 text-sm text-gray-700 border-b border-gray-200 pb-3">
          <div className="flex justify-between">
            <span>Price (3 items)</span>
            <span>₹1700</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Discount</span>
            <span>-₹1200</span>
          </div>
          <div className="flex justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-600">Free</span>
          </div>
        </div>

        
        <div className="flex justify-between text-base font-semibold mt-3">
          <span>Total Amount</span>
          <span>₹500</span>
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
