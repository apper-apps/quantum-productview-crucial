import React, { useState, useRef } from "react";
import { cn } from "@/utils/cn";

const ImageGallery = ({ images = [], className = "" }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZooming, setIsZooming] = useState(false);
  const imageRef = useRef(null);

  if (!images.length) return null;

  const selectedImage = images[selectedImageIndex];

  const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index);
    setIsZooming(false);
  };

  const handleMouseMove = (e) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  return (
    <div className={cn("flex gap-4", className)}>
      {/* Thumbnail strip */}
      <div className="flex flex-col gap-2 w-16 md:w-20">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "aspect-square border-2 rounded-lg overflow-hidden bg-white hover:shadow-md transition-all duration-200 thumbnail-hover",
              selectedImageIndex === index 
                ? "border-amazon-orange shadow-md" 
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            <img
              src={image}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Main image area */}
      <div className="flex-1 flex gap-4">
        {/* Main image */}
        <div className="flex-1 relative">
          <div 
            className="aspect-square bg-white border border-gray-200 rounded-lg overflow-hidden relative cursor-crosshair"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              src={selectedImage}
              alt="Product main view"
              className="w-full h-full object-cover image-transition"
            />
            
            {/* Zoom overlay indicator */}
            {isZooming && (
              <div 
                className="zoom-overlay"
                style={{
                  left: `${Math.max(0, Math.min(zoomPosition.x - 10, 80))}%`,
                  top: `${Math.max(0, Math.min(zoomPosition.y - 10, 80))}%`,
                  width: "20%",
                  height: "20%",
                }}
              />
            )}
          </div>
        </div>

        {/* Zoom detail view */}
        {isZooming && (
          <div className="hidden lg:block w-96 h-96 border border-gray-300 rounded-lg zoom-detail bg-white">
            <div
              className="w-full h-full zoom-detail"
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: "200%",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;