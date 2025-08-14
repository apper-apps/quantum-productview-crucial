import React, { useState } from "react";
import { toast } from "react-toastify";
import { cn } from "@/utils/cn";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import StarRating from "@/components/atoms/StarRating";
import Price from "@/components/atoms/Price";
import ProductFeatures from "@/components/molecules/ProductFeatures";
import QuantitySelector from "@/components/molecules/QuantitySelector";
import { cartService } from "@/services/api/cartService";

const ProductInfo = ({ product, className = "" }) => {
  const [quantity, setQuantity] = useState(1);
  const [addingToCart, setAddingToCart] = useState(false);

  if (!product) return null;

  const handleAddToCart = async () => {
    try {
      setAddingToCart(true);
      await cartService.addItem(product.Id, quantity);
      toast.success(`Added ${quantity} item${quantity > 1 ? 's' : ''} to cart!`, {
        position: "top-right",
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Failed to add item to cart. Please try again.");
      console.error("Add to cart error:", error);
    } finally {
      setAddingToCart(false);
    }
  };

  const handleBuyNow = () => {
    toast.info("Buy Now functionality would redirect to checkout");
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Product title */}
      <div>
        <h1 className="text-2xl md:text-3xl font-medium text-amazon-dark leading-tight mb-2">
          {product.title}
        </h1>
        
        {/* Brand */}
        <div className="text-amazon-light-blue hover:text-amazon-orange cursor-pointer">
          Brand: <span className="font-medium">{product.brand}</span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-4 flex-wrap">
        <StarRating 
          rating={product.rating} 
          reviewCount={product.reviewCount}
          size={20}
        />
        <div className="text-sm text-gray-600">
          {product.rating} out of 5 stars
        </div>
      </div>

      {/* Price */}
      <div className="py-2">
        <Price 
          price={product.price}
          originalPrice={product.originalPrice}
          size="xl"
        />
      </div>

      {/* Stock and shipping info */}
      <div className="space-y-2 text-sm">
        {product.inStock && (
          <div className="flex items-center gap-2 text-green-700">
            <ApperIcon name="CheckCircle" size={16} />
            <span>In Stock</span>
          </div>
        )}
        
        {product.fastDelivery && (
          <div className="flex items-center gap-2 text-amazon-dark">
            <ApperIcon name="Truck" size={16} />
            <span>FREE delivery <strong>tomorrow, {new Date(Date.now() + 86400000).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong></span>
          </div>
        )}
        
        {product.primeEligible && (
          <div className="flex items-center gap-2 text-amazon-light-blue">
            <ApperIcon name="Zap" size={16} />
            <span>Prime eligible</span>
          </div>
        )}
      </div>

      {/* Features */}
      <ProductFeatures features={product.features} />

      {/* Purchase section */}
      <div className="border-t border-gray-200 pt-6 space-y-4">
        {/* Quantity selector */}
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={setQuantity}
          max={10}
        />

        {/* Action buttons */}
        <div className="space-y-3">
          <Button
            variant="cart"
            size="lg"
            onClick={handleAddToCart}
            disabled={addingToCart}
            className={cn(
              "w-full font-semibold",
              addingToCart && "animate-add-to-cart"
            )}
          >
            {addingToCart ? (
              <>
                <ApperIcon name="Loader2" size={20} className="animate-spin" />
                Adding to Cart...
              </>
            ) : (
              <>
                <ApperIcon name="ShoppingCart" size={20} />
                Add to Cart
              </>
            )}
          </Button>

          <Button
            variant="buy"
            size="lg"
            onClick={handleBuyNow}
            className="w-full font-semibold"
          >
            Buy Now
          </Button>
        </div>

        {/* Additional info */}
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <ApperIcon name="Shield" size={16} />
            <span>Ships from and sold by ProductView Pro</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ApperIcon name="RotateCcw" size={16} />
            <span>Return this item for free</span>
          </div>
          
          <div className="flex items-center gap-2">
            <ApperIcon name="Lock" size={16} />
            <span>Secure transaction</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;