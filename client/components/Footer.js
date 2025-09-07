"use client"
import Link from "next/link";
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-8">
        
       
        <div>
          <h2 className="text-white font-semibold mb-4">About</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-green-600">Contact Us</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-blue-600">About Us</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-blue-600">Careers</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-red-600">Press</Link></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-white font-semibold mb-4">Help</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-blue-600">Payments</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-green-600">Shipping</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-red-600">Cancellation</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-blue-600">FAQ</Link></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-white font-semibold mb-4">Policy</h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-blue-600">Return Policy</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-red-600">Terms of Use</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-blue-600">Security</Link></li>
            <li><Link href="#" className="inline-block  transform transition duration-300 hover:scale-105  hover:text-green-600">Privacy</Link></li>
          </ul>
        </div>

        
        <div>
          <h2 className="text-white font-semibold mb-4">Social</h2>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-blue-500"><Facebook size={20} /></Link>
            <Link href="#" className="hover:text-blue-400"><Twitter size={20} /></Link>
            <Link href="#" className="hover:text-red-500"><Youtube size={20} /></Link>
            <Link href="#" className="hover:text-pink-500"><Instagram size={20} /></Link>
          </div>
        </div>

        
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <Mail size={16} /> <span>vinay.k.dev4@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} /> <span>+91 8830603531</span>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
