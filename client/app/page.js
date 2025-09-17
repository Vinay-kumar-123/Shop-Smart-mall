import Image from "next/image";
import Homes from "./customer/Homes/page";
import HomeSectionCart from "./customer/HomeSectionCart/page";

import Footer from "@/components/Footer";
import Product from "./customer/Product/page";
import ProductDetails from "./customer/ProductDetails/page";
import Cart from "./customer/cart/page";
import CheckOut from "./customer/checkout/page";
import Orders from "./customer/Orders/page";
import OrderDetails from "./customer/OrderDetails/page";

export default function Home() {
  return (
    <>
      
      
     <main>
      <div>
         <Homes />
         
       
        {/* <Product />
        <ProductDetails />
        <CheckOut/>
        
        <Orders />
        <OrderDetails /> */}
      </div>
      
    </main> 
    </>
  );
}
