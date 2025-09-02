"use client";
import { useState } from "react";
import { Categories } from "@/app/customer/Data/page";
import { RiMenu3Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import Link from "next/link";

export default function SideBar() {
  const [openCategory, setOpenCategory] = useState(null); 
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      
      <button
        onClick={() => setSidebarOpen(true)}
        className="md:hidden p-2 m-2 border rounded bg-blue-600 text-white"
      >
        <RiMenu3Line size={20} />
      </button>

     
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-4 
        transform transition-transform duration-300 z-50
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg flex items-center gap-2">
            <RiMenu3Line className="text-[20px]" />
            Shop By Categories
          </h2>
          <button
            className="text-red-500 text-xl"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
        </div>

        
        <ul>
          {Categories.map((cat, index) => (
            <li key={index} className="mb-2">
              <button
                onClick={() =>
                  setOpenCategory(openCategory === index ? null : index)
                }
                className="flex justify-between items-center w-full p-2 rounded hover:bg-gray-100 transition"
              >
                <span className="flex items-center gap-2">
                  {cat.icon} {cat.name}
                </span>
                <FaAngleDown
                  className={`transition-transform ${
                    openCategory === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openCategory === index && (
                <ul className="pl-6 mt-1">
                  {cat.subcategories.map((sub, i) => (
                    <li key={i} className="py-1">
                      <Link
                        href={sub.href}
                        className="text-gray-700 hover:text-green-600 block"
                        onClick={() => setSidebarOpen(false)} // mobile pe click -> close
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
