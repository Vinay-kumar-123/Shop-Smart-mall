import Image from "next/image";
import Homes from "./customer/Homes/page";
import HomeSectionCart from "./customer/HomeSectionCart/page";

import Footer from "@/components/Footer";
import Product from "./customer/Product/page";
import ProductDetails from "./customer/ProductDetails/page";
import Cart from "./customer/cart/page";

export default function Home() {
  return (
    <main>
      
      {/* <Homes/> */}
      {/* <Product/>  */}
      {/* <ProductDetails/> */}
      <Cart/>
      <Footer/>
    </main> 
  );
}
