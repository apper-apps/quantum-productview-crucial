import React from "react";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";

const Error = ({ 
  message = "Something went wrong", 
  onRetry = null, 
  className = "" 
}) => {
  return (
    <div className={cn("bg-amazon-gray min-h-screen flex items-center justify-center p-4", className)}>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ApperIcon 
              name="AlertTriangle" 
              size={32} 
              className="text-red-600" 
            />
          </div>
          
          <h2 className="text-xl font-semibold text-amazon-dark mb-2">
            Oops! Something went wrong
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            {message}
          </p>
        </div>

        <div className="space-y-3">
          {onRetry && (
            <Button
              onClick={onRetry}
              variant="primary"
              size="lg"
              className="w-full"
            >
              <ApperIcon name="RotateCcw" size={20} />
              Try Again
            </Button>
          )}
          
          <Button
            onClick={() => window.location.reload()}
            variant="secondary"
            size="lg"
            className="w-full"
          >
            <ApperIcon name="RefreshCw" size={20} />
            Refresh Page
          </Button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            If the problem persists, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Error;