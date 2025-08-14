import React from "react";
import { cn } from "@/utils/cn";

const Price = ({ 
  price, 
  originalPrice = null, 
  size = "lg", 
  className = "",
  showCurrency = true 
}) => {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl", 
    lg: "text-2xl",
    xl: "text-3xl"
  };

  const formatPrice = (amount) => {
    return amount.toFixed(2);
  };

  const discountPercentage = originalPrice && originalPrice > price 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  return (
    <div className={cn("flex items-baseline gap-2 flex-wrap", className)}>
      <div className="flex items-baseline">
        {showCurrency && (
          <span className={cn("font-normal text-amazon-dark price-symbol", sizeClasses[size])}>
            $
          </span>
        )}
        <span className={cn("font-bold text-amazon-dark", sizeClasses[size])}>
          {formatPrice(price)}
        </span>
      </div>
      
      {originalPrice && originalPrice > price && (
        <>
          <span className="text-gray-500 line-through text-sm">
            ${formatPrice(originalPrice)}
          </span>
          {discountPercentage && (
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">
              -{discountPercentage}%
            </span>
          )}
        </>
      )}
    </div>
  );
};

export default Price;