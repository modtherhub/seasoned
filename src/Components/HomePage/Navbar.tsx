import { useState } from "react";
import { Search, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="flex space-x-7">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#1E3A8A] italic">Seasoned</div>
        {/* Menu Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1">
            Stories
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Ingredients</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-700">Join</a>
        </div>
      </div>
      {/* Search + Icons + Button */}
      <div className="flex items-center gap-4">
        {/* Search input */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search stories..."
            className="bg-transparent outline-none ml-2 text-sm"
          />
        </div>
        {/* User Icon */}
        <User className="w-6 h-6 text-gray-700 cursor-pointer" />
        {/* Subscribe Button */}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
          Subscribe
        </button>
      </div>
    </nav>
  );
}