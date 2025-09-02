import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex justify-center w-full">
      <div className="relative w-full max-w-xl">
       
        <input
          type="text"
          placeholder="Search for products, brands and more..."
          className="w-full rounded-full border border-gray-300 bg-white px-5 py-3 text-sm shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />

    
        <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition cursor-pointer">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}
