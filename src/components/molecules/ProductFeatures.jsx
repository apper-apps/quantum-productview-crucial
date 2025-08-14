import React from "react";
import ApperIcon from "@/components/ApperIcon";
import { cn } from "@/utils/cn";

const ProductFeatures = ({ features = [], className = "" }) => {
  if (!features.length) return null;

  return (
    <div className={cn("space-y-2", className)}>
      <h3 className="text-lg font-semibold text-amazon-dark mb-3">Product Features</h3>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1 flex-shrink-0">
              <ApperIcon 
                name="Check" 
                size={16} 
                className="text-green-600" 
              />
            </div>
            <span className="text-sm text-gray-700 leading-relaxed">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductFeatures;