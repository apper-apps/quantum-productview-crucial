import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Empty = ({ 
  title = "No items found",
  description = "There are no items to display at the moment.",
  actionText = "Refresh",
  onAction = null,
  icon = "Package",
  className = ""
}) => {
  return (
    <div className={cn("bg-white rounded-lg shadow-sm p-8 text-center", className)}>
      <div className="mb-6">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <ApperIcon 
            name={icon} 
            size={40} 
            className="text-gray-400" 
          />
        </div>
        
        <h3 className="text-lg font-semibold text-amazon-dark mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 max-w-sm mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      {onAction && (
        <Button
          onClick={onAction}
          variant="primary"
          size="lg"
          className="mx-auto"
        >
          <ApperIcon name="RefreshCw" size={20} />
          {actionText}
        </Button>
      )}
      
      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Try refreshing the page or check back later.
        </p>
      </div>
    </div>
  );
};

export default Empty;