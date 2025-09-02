
"use client";
import Link from "next/link";
import { Categories } from "@/app/customer/Data/page";

export default function CategoriesDropdown() {
  return (
    <ul className="flex gap-8">
      {Categories.map((cat, index) => (
        <li
          key={index}
          className="relative group"
        >
          
          <span className="flex items-center gap-2 font-semibold text-gray-800 cursor-pointer transition hover:text-blue-600">
            <span className="text-lg">{cat.icon}</span> {cat.name}
          </span>

          
          <ul
            className="absolute top-full left-0 bg-white shadow-lg border mt-2 w-56 rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
          >
            {cat.subcategories.map((sub, i) => (
              <li key={i} className="px-4 py-2 hover:bg-gray-100 transition">
                <Link
                  href={sub.href}
                  className="block text-gray-700 hover:text-blue-600"
                >
                  {sub.name}
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
