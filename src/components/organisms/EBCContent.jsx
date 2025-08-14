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
            A+ / EBC Section
          </h2>
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

        
      </div>
    </section>
  );
};

export default EBCContent;