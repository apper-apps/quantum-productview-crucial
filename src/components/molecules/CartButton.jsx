import React, { useState, useEffect } from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";
import { cartService } from "@/services/api/cartService";

const CartButton = ({ className = "" }) => {
  const [itemCount, setItemCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const loadCartCount = async () => {
    try {
      setLoading(true);
      const count = await cartService.getItemCount();
      setItemCount(count);
    } catch (error) {
      console.error("Failed to load cart count:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCartCount();
    
    // Listen for cart updates (in production, this would be a proper event system)
    const interval = setInterval(loadCartCount, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <button 
      className={cn(
        "relative p-2 hover:bg-amazon-dark hover:bg-opacity-10 rounded-md transition-colors duration-200",
        className
      )}
    >
      <div className="flex flex-col items-center">
        <div className="relative">
          <ApperIcon name="ShoppingCart" size={28} className="text-white" />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-amazon-orange text-amazon-dark text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount > 99 ? "99+" : itemCount}
            </span>
          )}
        </div>
        <span className="text-xs text-white mt-0.5">Cart</span>
      </div>
    </button>
  );
};

export default CartButton;