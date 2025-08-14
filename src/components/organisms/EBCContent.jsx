import React from "react";
import { cn } from "@/utils/cn";

const EBCContent = ({ ebcImage, className = "" }) => {
  if (!ebcImage) return null;

  return (
    <section className={cn("w-full bg-white", className)}>
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {/* Section header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-amazon-dark mb-2">
            Product Details & Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover more about this product with our enhanced brand content featuring 
            detailed specifications, lifestyle imagery, and comprehensive feature highlights.
          </p>
        </div>

        {/* EBC Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-5xl">
            <img
              src={ebcImage}
              alt="Enhanced Brand Content - Product Features and Details"
              className="w-full h-auto object-contain rounded-lg shadow-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Additional content sections */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amazon-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h3 className="font-semibold text-amazon-dark mb-2">Premium Quality</h3>
            <p className="text-gray-600 text-sm">
              Crafted with the highest quality materials and rigorous testing standards 
              to ensure long-lasting performance and reliability.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amazon-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h3 className="font-semibold text-amazon-dark mb-2">Easy Setup</h3>
            <p className="text-gray-600 text-sm">
              Quick and intuitive setup process with comprehensive instructions 
              and 24/7 customer support to get you started immediately.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amazon-orange to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h3 className="font-semibold text-amazon-dark mb-2">Satisfaction Guaranteed</h3>
            <p className="text-gray-600 text-sm">
              We stand behind our products with comprehensive warranty coverage 
              and hassle-free returns for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EBCContent;