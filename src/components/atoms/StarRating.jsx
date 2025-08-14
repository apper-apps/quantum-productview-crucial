import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const StarRating = ({ rating = 0, reviewCount = 0, size = 16, showCount = true, className = "" }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex items-center gap-0.5">
        {/* Full stars */}
        {[...Array(fullStars)].map((_, i) => (
          <ApperIcon 
            key={`full-${i}`} 
            name="Star" 
            size={size} 
            className="text-yellow-400 fill-yellow-400"
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <ApperIcon 
              name="Star" 
              size={size} 
              className="text-gray-300 fill-gray-300"
            />
            <div className="absolute top-0 left-0 overflow-hidden w-1/2">
              <ApperIcon 
                name="Star" 
                size={size} 
                className="text-yellow-400 fill-yellow-400"
              />
            </div>
          </div>
        )}
        
        {/* Empty stars */}
        {[...Array(emptyStars)].map((_, i) => (
          <ApperIcon 
            key={`empty-${i}`} 
            name="Star" 
            size={size} 
            className="text-gray-300 fill-gray-300"
          />
        ))}
      </div>
      
      {showCount && reviewCount > 0 && (
        <span className="text-amazon-light-blue hover:text-amazon-orange cursor-pointer text-sm">
          ({reviewCount.toLocaleString()})
        </span>
      )}
    </div>
  );
};

export default StarRating;