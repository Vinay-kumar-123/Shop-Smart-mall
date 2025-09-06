"use client";
import HomeSectionCart from "../HomeSectionCart/page";
export default function Product(){
    const Men = [
    { id: 1, name: "Shirt",  imageSrc: "/men1.jpg" },
    { id: 2, name: "Pants", imageSrc: "/men2.jpg" },
    { id: 3, name: "Kurta",  imageSrc: "/men3.jpg" },
    { id: 4, name: "T-shirt",  imageSrc: "/men4.jpg" },
    { id: 5, name: "Jeans",  imageSrc: "/men5.jpg" },
    { id: 6, name: "Trouser's", imageSrc: "/men6.jpg" },
    { id: 7, name: "Dhoti",  imageSrc: "/men7.jpg" },
  ];
  const Women = [
    { id: 1, name: "Sarees", imageSrc: "/women1.jpg" },
    { id: 2, name: "Kurtis",  imageSrc: "/women2.jpg" },
    { id: 3, name: "Jeans", imageSrc: "/women3.jpg" },
    { id: 4, name: "T-shirt",  imageSrc: "/women4.jpg" },
    { id: 5, name: "Lahenga Cholis", imageSrc: "/women5.jpg" },
    { id: 6, name: "Blouse",  imageSrc: "/women6.jpg" },
    { id: 7, name: "Plazzos",  imageSrc: "/women7.jpg" },
  ];
  const Electronics = [
    { id: 1, name: "Mobile",  imageSrc: "/e1.jpg" },
    { id: 2, name: "Laptop",  imageSrc: "/e2.jpg" },
    { id: 3, name: "HeadPhones",  imageSrc: "/e3.jpg" },
    { id: 4, name: "Camera", imageSrc: "/e4.jpg" },
    { id: 5, name: "Watch",  imageSrc: "/e5.jpg" },
  ];


  const Others = [
    { id: 1, name: "Beauty",  imageSrc: "/o1.jpg" },
    { id: 2, name: "Furniture", imageSrc: "/o2.jpg" },
    { id: 3, name: "Footwear", imageSrc: "/o3.jpg" },
    { id: 4, name: "Groceries", imageSrc: "/o4.jpg" },
    { id: 5, name: "others",  imageSrc: "/o5.jpg" },
  ];
  return (
    <main>
      <HomeSectionCart title="👔 Men Collection" products={Men} />
      <HomeSectionCart title="👗 Women Collection" products={Women} />
      <HomeSectionCart title="💻 Electronics" products={Electronics} />
      <HomeSectionCart title="🛒 Others" products={Others} />
    </main>
  );
  
}