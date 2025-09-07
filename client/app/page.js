import Image from "next/image";
import Homes from "./customer/Homes/page";
import HomeSectionCart from "./customer/HomeSectionCart/page";
import Product from "./customer/Product/page";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main>
      <Homes/>
      <Product/>
      <Footer/>
    </main> 
  );
}
