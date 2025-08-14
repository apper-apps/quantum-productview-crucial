import React, { useState } from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const SearchBar = ({ onSearch = () => {}, placeholder = "Search products", className = "" }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className={cn("flex items-center w-full", className)}>
      <div className="flex w-full">
        <select className="px-3 py-2.5 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md text-sm text-amazon-dark focus:outline-none focus:ring-2 focus:ring-amazon-orange">
          <option>All</option>
          <option>Electronics</option>
          <option>Audio</option>
          <option>Accessories</option>
        </select>
        
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-4 py-2.5 border-t border-b border-gray-300 text-amazon-dark focus:outline-none focus:ring-2 focus:ring-amazon-orange"
        />
        
        <button
          type="submit"
          className="px-4 py-2.5 bg-amazon-orange hover:bg-orange-600 border border-amazon-orange rounded-r-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amazon-orange"
        >
          <ApperIcon name="Search" size={20} className="text-amazon-dark" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;