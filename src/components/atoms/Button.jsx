import React from "react";
import { cn } from "@/utils/cn";

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "md", 
  children, 
  disabled = false,
  ...props 
}, ref) => {
  const variants = {
    primary: "bg-gradient-to-b from-amazon-yellow via-amazon-orange to-amazon-orange hover:from-yellow-400 hover:via-orange-400 hover:to-orange-500 text-amazon-dark border border-orange-300 shadow-sm amazon-button",
    secondary: "bg-gradient-to-b from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-amazon-dark border border-gray-300 amazon-button",
    cart: "bg-gradient-to-b from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white border border-orange-400 amazon-button",
    buy: "bg-gradient-to-b from-yellow-400 to-amazon-yellow hover:from-yellow-300 hover:to-yellow-400 text-amazon-dark border border-yellow-400 amazon-button"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base"
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-amazon-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        disabled && "pointer-events-none opacity-50",
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;