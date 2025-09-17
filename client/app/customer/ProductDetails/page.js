"use client";
import { StarIcon } from "@heroicons/react/20/solid";
import ReviewSection from "../ReviewSection/page";
import Link from "next/link";

const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  discountPrice: "$149",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    {
      id: "white",
      name: "White",
      classes: "bg-white checked:outline-gray-400",
    },
    {
      id: "gray",
      name: "Gray",
      classes: "bg-gray-200 checked:outline-gray-400",
    },
    {
      id: "black",
      name: "Black",
      classes: "bg-gray-900 checked:outline-gray-900",
    },
  ],
  sizes: [
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "XXL", inStock: true },
  ],
  description:
    "The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options.",
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    "The 6-Pack includes two black, two white, and two heather gray Basic Tees.",
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
        
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id} className="flex items-center">
                <a href={breadcrumb.href} className="hover:text-indigo-600">
                  {breadcrumb.name}
                </a>
                <svg
                  className="h-4 w-4 mx-2 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
            ))}
            <li className="text-gray-900 font-semibold">{product.name}</li>
          </ol>
        </nav>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white shadow-md rounded-xl p-6">
          {/* Left - Images */}
          <div className="space-y-4">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="rounded-lg w-full h-[400px] object-contain border"
            />
            <div className="flex gap-3">
              {product.images.slice(1).map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="w-24 h-24 rounded-lg object-cover border cursor-pointer hover:ring-2 hover:ring-indigo-500"
                />
              ))}
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={classNames(
                      reviews.average > i ? "text-yellow-400" : "text-gray-300",
                      "h-5 w-5"
                    )}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {reviews.totalCount} Reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-4">
                <span className="text-3xl font-bold text-indigo-600">
                  {product.discountPrice}
                </span>
                <span className="ml-3 text-lg line-through text-gray-400">
                  {product.price}
                </span>
                <span className="ml-2 text-green-600 text-sm font-medium">
                  22% OFF
                </span>
              </div>

              {/* Colors */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <div className="flex gap-3 mt-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.id}
                      className={classNames(
                        color.classes,
                        "h-8 w-8 rounded-full border hover:scale-110 transition"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Size</h3>
                <div className="flex gap-3 mt-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      disabled={!size.inStock}
                      className={classNames(
                        "px-4 py-2 text-sm border rounded-md",
                        size.inStock
                          ? "hover:border-indigo-600"
                          : "bg-gray-200 text-gray-500 cursor-not-allowed"
                      )}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>

            
              <p className="mt-6 text-gray-600">{product.description}</p>
            </div>

            
            <div className="mt-4 flex gap-4 w-full">
             <Link href="/customer/checkout">
              <button className=" w-[200px] flex-1 bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition cursor-pointer">
                Buy Now
              </button>
              </Link>
              <Link href="/customer/cart">
              <button className="w-[200px]  flex-1 bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition cursor-pointer">
                Add to Cart
              </button>
              </Link>
            </div>
          </div>

          <div className="mt-12 bg-white shadow-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Highlights</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              {product.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-2">Details</h2>
            <p className="text-gray-700">{product.details}</p>
          </div>
        </div>
        <ReviewSection/>
      </div>
    </div>
  );
}
