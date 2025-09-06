import Image from "next/image";
import Homes from "./customer/Homes/page";
import HomeSectionCart from "./customer/HomeSectionCart/page";

export default function Home() {
  return (
    <main>
      <Homes/>
      <HomeSectionCart/>
    </main> 
  );
}
