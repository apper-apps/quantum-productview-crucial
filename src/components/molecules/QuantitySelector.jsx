import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";

const QuantitySelector = ({ 
  quantity = 1, 
  onQuantityChange = () => {}, 
  min = 1, 
  max = 10,
  className = "" 
}) => {
  const handleDecrease = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value) || min;
    const clampedValue = Math.min(Math.max(value, min), max);
    onQuantityChange(clampedValue);
  };

  return (
    <div className={cn("flex items-center", className)}>
      <label className="block text-sm font-medium text-amazon-dark mb-2 mr-4">
        Qty:
      </label>
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
        <button
          type="button"
          onClick={handleDecrease}
          disabled={quantity <= min}
          className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
        >
          <ApperIcon name="Minus" size={14} className="text-amazon-dark" />
        </button>
        
        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          min={min}
          max={max}
          className="w-16 px-2 py-2 text-center border-0 focus:outline-none focus:ring-0 text-amazon-dark"
        />
        
        <button
          type="button"
          onClick={handleIncrease}
          disabled={quantity >= max}
          className="p-2 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
        >
          <ApperIcon name="Plus" size={14} className="text-amazon-dark" />
        </button>
      </div>
    </div>
  );
};

export default QuantitySelector;