"use client";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "../app/customer/search/page";
import NavbarActions from "../app/customer/wishlist/page";
import SideBar from "../app/customer/SideBar/page";
import CategoriesDropdown from "./Navbar/CategoriesDropdown";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="top-strip py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full text-center md:text-left mb-1 md:mb-0">
              <p className="text-sm md:text-base">
                Get up to{" "}
                <span className="font-bold text-yellow-400">50% off</span> new
                season styles, limited time only
              </p>
            </div>
            <div className="w-full flex items-center justify-center md:justify-end">
              <ul className="flex space-x-6 text-sm md:text-base">
                <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-200">
                  <Link href="/help-center">Help Center</Link>
                </li>
                <li className="hover:text-yellow-400 cursor-pointer transition-colors duration-200">
                  <Link href="/order-tracking">Order Tracking</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header border-b border-gray-300">
        <div className="container mx-auto flex items-center justify-between py-3 px-4">
          <div className="col1 w-[25%] flex items-center">
            <div className="md:hidden">
              <SideBar />
            </div>
            <Link href="/">
              <img src="/logo.png" alt="Logo" className="w-[200px]" />
            </Link>
          </div>

          <div className="col2 hidden md:flex w-[45%] justify-center">
            <SearchBar />
          </div>

          <div className="col3 w-[30%] flex justify-end">
            <NavbarActions />
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-between py-2 px-4 ">
        <div className="hidden md:flex justify-center flex-1 ">
          <CategoriesDropdown />
        </div>
      </div>
    </header>
  );
}
