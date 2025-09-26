import React from "react";
import Link from 'next/link';
import { FaRegUser, FaHeart, FaShoppingCart, FaAffiliatetheme  } from 'react-icons/fa'; // You'll need to install it: npm install react-icons

const Header: React.FC = () => {
  return (
    <header>
      {/* top info bar */}
      <div className="bg-black text-white text-xs text-center py-2 px-4">
           Subscribe to our newsletter and enjoy our exclusive offers
      </div>

      {/* main navigation bar */}
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">

      {/* Logo */}
       <Link href="/"  className="text-3xl font-bold text-black flex space-x-6 ">
                <FaAffiliatetheme /> MARINI
      </Link>
       
       {/* Search Bar */}
       <div className="flex-grow max-w-lg mx-8 relative">
        <input 
        type="text" 
        placeholder="Search..." 
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-500" 
          />
        <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              fillRule="evenodd" 
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" 
              clipRule="evenodd" 
            />
          </svg>
          </div>
       {/* User and Cart Icons */}
        <div className="flex space-x-6 text-xl">
          <FaRegUser className="cursor-pointer text-gray-800 hover:text-gray-600" />
          <div className="relative cursor-pointer">
            <FaHeart className="text-gray-800 hover:text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </div>
          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-gray-800 hover:text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
          </div>
        </div>
      </div>

      {/* Sub-navigation Bar */}
      <nav className="bg-white border-y border-gray-300">
        <div className="container mx-auto px-2 flex justify-center space-x-18 text-sm font-bold">
          <a href="#" className="py-4 text-gray-700 hover:text-gray-900 font-medium">Home</a>
          <a href="#" className="py-4 text-gray-700 hover:text-gray-900 font-medium">Shop</a>
          <a href="#" className="py-4 text-gray-700 hover:text-gray-900 font-medium">Brands</a>
          <a href="#" className="py-4 text-gray-700 hover:text-gray-900 font-medium">Mens</a>
          <a href="#" className="py-4 text-gray-700 hover:text-gray-900 font-medium">Trending</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;