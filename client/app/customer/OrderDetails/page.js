

"use client";
import { useSearchParams } from "next/navigation";
import OrderTracker from "../OrderTracker/page";
import AddressCart from "../AddressCart/page";
import { Divider, Typography } from "@mui/material";

// Dummy orders (same data jaisa Orders/page.js me)
const orders = [
  {
    id: 1,
    name: "Men White Shirt",
    price: 500,
    size: "L",
    color: "White",
    status: "Delivered",
    date: "March 03",
    img: "/men1.jpg",
  },
  {
    id: 2,
    name: "Women Kurti",
    price: 899,
    size: "M",
    color: "Red",
    status: "On the way",
    date: "March 05",
    img: "/women1.jpg",
  },
];

export default function OrderDetails() {
  const searchParams = useSearchParams();
  const id = parseInt(searchParams.get("id")); 
  const order = orders.find((o) => o.id === id); 

  if (!order) {
    return <div className="p-10 text-center">Order not found!</div>;
  }

  return (
    <div className="px-5 lg:px-15 py-6 bg-gray-50 min-h-screen">
      
      <OrderTracker activeStep={order.status === "Delivered" ? 4 : 2} />

     
      <div className="py-4">
        <div className="p-5 bg-white shadow rounded-lg flex gap-6">
          <img src={order.img} alt={order.name} className=" object-cover object-top w-28 h-28 rounded-md" />
          <div>
            <h2 className="font-semibold text-lg">{order.name}</h2>
            <p className="text-sm text-gray-500 mt-1">
              Size: {order.size} | Color: {order.color}
            </p>
            <p className="font-bold mt-2">₹{order.price}</p>
          </div>
        </div>
      </div>

     
      <div className="p-4 mb-3 rounded-lg shadow bg-white">
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Delivery Address
        </Typography>
        <Divider />
        <AddressCart />
      </div>
    </div>
  );
}
