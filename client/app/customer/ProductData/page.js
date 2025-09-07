"use client";


export const Men = [
  { id: 1, name: "Shirt", imageSrc: "/men1.jpg" ,price: 500, oldPrice: 1000 },
  { id: 2, name: "Pants", imageSrc: "/men2.jpg",price: 400, oldPrice: 1000 },
  { id: 3, name: "Kurta", imageSrc: "/men3.jpg",price: 500, oldPrice: 1000 },
  { id: 4, name: "T-shirt", imageSrc: "/men4.jpg",price: 500, oldPrice: 1000 },
  { id: 5, name: "Jeans", imageSrc: "/men5.jpg",price: 500, oldPrice: 1000 },
  { id: 6, name: "Trouser's", imageSrc: "/men6.jpg",price: 500, oldPrice: 1000 },
  { id: 7, name: "Dhoti", imageSrc: "/men7.jpg", price: 500, oldPrice: 1000 },
];
export const Women = [
  { id: 1, name: "Sarees", imageSrc: "/women1.jpg",price: 500, oldPrice: 1000 },
  { id: 2, name: "Kurtis", imageSrc: "/women2.jpg",price: 500, oldPrice: 1000 },
  { id: 3, name: "Jeans", imageSrc: "/women3.jpg",price: 500, oldPrice: 1000 },
  { id: 4, name: "T-shirt", imageSrc: "/women4.jpg",price: 500, oldPrice: 1000 },
  { id: 5, name: "Lahenga Cholis", imageSrc: "/women5.jpg",price: 500, oldPrice: 1000 },
  { id: 6, name: "Blouse", imageSrc: "/women6.jpg",price: 500, oldPrice: 1000 },
  { id: 7, name: "Plazzos", imageSrc: "/women7.jpg",price: 500, oldPrice: 1000 },
];
export const Electronics = [
  { id: 1, name: "Mobile", imageSrc: "/e1.jpg",price: 500, oldPrice: 1000 },
  { id: 2, name: "Laptop", imageSrc: "/e2.jpg",price: 500, oldPrice: 1000 },
  { id: 3, name: "HeadPhones", imageSrc: "/e3.jpg",price: 500, oldPrice: 1000 },
  { id: 4, name: "Camera", imageSrc: "/e4.jpg",price: 500, oldPrice: 1000 },
  { id: 5, name: "Watch", imageSrc: "/e5.jpg",price: 500, oldPrice: 1000 },
];

export const Others = [
  { id: 1, name: "Beauty", imageSrc: "/o1.jpg",price: 500, oldPrice: 1000 },
  { id: 2, name: "Furniture", imageSrc: "/o2.jpg",price: 500, oldPrice: 1000 },
  { id: 3, name: "Footwear", imageSrc: "/o3.jpg",price: 500, oldPrice: 1000 },
  { id: 4, name: "Groceries", imageSrc: "/o4.jpg",price: 500, oldPrice: 1000 },
  { id: 5, name: "others", imageSrc: "/o5.jpg",price: 500, oldPrice: 1000 },
];
export const ProductData = [...Men, ...Women, ...Electronics, ...Others];
