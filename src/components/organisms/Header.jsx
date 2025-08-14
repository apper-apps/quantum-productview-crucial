import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import SearchBar from "@/components/molecules/SearchBar";
import CartButton from "@/components/molecules/CartButton";

const Header = ({ className = "" }) => {
  return (
    <header className={cn("bg-amazon-dark text-white shadow-lg sticky top-0 z-50", className)}>
      {/* Main header */}
      <div className="px-4 py-2">
        <div className="max-w-screen-2xl mx-auto flex items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 hover:bg-amazon-dark hover:bg-opacity-20 p-2 rounded cursor-pointer transition-colors duration-200">
              <div className="text-2xl font-bold">
                ProductView
              </div>
              <span className="text-xs text-amazon-yellow">.com</span>
            </div>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center gap-1 hover:bg-amazon-dark hover:bg-opacity-20 p-2 rounded cursor-pointer transition-colors duration-200">
            <ApperIcon name="MapPin" size={16} className="text-white" />
            <div className="flex flex-col text-xs">
              <span className="text-gray-300">Deliver to</span>
              <span className="font-medium">New York 10001</span>
            </div>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-3xl">
            <SearchBar placeholder="Search ProductView Pro" />
          </div>

          {/* Account & Language */}
          <div className="hidden md:flex items-center gap-1 hover:bg-amazon-dark hover:bg-opacity-20 p-2 rounded cursor-pointer transition-colors duration-200">
            <ApperIcon name="Globe" size={16} className="text-white" />
            <div className="flex flex-col text-xs">
              <span className="text-gray-300">EN</span>
            </div>
          </div>

          {/* Account */}
          <div className="hidden md:flex items-center gap-1 hover:bg-amazon-dark hover:bg-opacity-20 p-2 rounded cursor-pointer transition-colors duration-200">
            <div className="flex flex-col text-xs">
              <span className="text-gray-300">Hello, Guest</span>
              <span className="font-medium">Account & Lists</span>
            </div>
          </div>

          {/* Returns & Orders */}
          <div className="hidden lg:flex items-center gap-1 hover:bg-amazon-dark hover:bg-opacity-20 p-2 rounded cursor-pointer transition-colors duration-200">
            <div className="flex flex-col text-xs">
              <span className="text-gray-300">Returns</span>
              <span className="font-medium">& Orders</span>
            </div>
          </div>

          {/* Cart */}
          <CartButton />
        </div>
      </div>

      {/* Sub navigation */}
      <div className="bg-amazon-dark bg-opacity-80 border-t border-gray-600">
        <div className="max-w-screen-2xl mx-auto px-4 py-2">
          <div className="flex items-center gap-6 text-sm">
            <button className="flex items-center gap-1 hover:bg-amazon-dark hover:bg-opacity-20 p-1 rounded transition-colors duration-200">
              <ApperIcon name="Menu" size={16} className="text-white" />
              <span>All</span>
            </button>
            
            <div className="flex items-center gap-6 overflow-x-auto">
              <a href="#" className="whitespace-nowrap hover:text-amazon-yellow transition-colors duration-200">Today's Deals</a>
              <a href="#" className="whitespace-nowrap hover:text-amazon-yellow transition-colors duration-200">Customer Service</a>
              <a href="#" className="whitespace-nowrap hover:text-amazon-yellow transition-colors duration-200">Registry</a>
              <a href="#" className="whitespace-nowrap hover:text-amazon-yellow transition-colors duration-200">Gift Cards</a>
              <a href="#" className="whitespace-nowrap hover:text-amazon-yellow transition-colors duration-200">Sell</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;