import React, { useRef, useState } from "react";
import Loading from "@/components/ui/Loading";
import { cn } from "@/utils/cn";

const ImageGallery = ({ images = [], className = "" }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isZooming, setIsZooming] = useState(false)
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 })
  const [imageLoadingStates, setImageLoadingStates] = useState({})
  const [imageErrors, setImageErrors] = useState({})
  const imageRef = useRef(null)

  const selectedImage = images[selectedImageIndex] || ''

  // Fallback placeholder image
  const placeholderImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' dy='.3em' fill='%23374151' font-family='Arial, sans-serif' font-size='16'%3EImage Unavailable%3C/text%3E%3C/svg%3E"

const handleThumbnailClick = (index) => {
    setSelectedImageIndex(index)
  }

  const handleMouseMove = (e) => {
    if (!isZooming || !imageRef.current) return
    
    const rect = imageRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    
    setZoomPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsZooming(true)
  }

  const handleMouseLeave = () => {
    setIsZooming(false)
  }

  const handleImageLoad = (index) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }))
    setImageErrors(prev => ({ ...prev, [index]: false }))
  }

  const handleImageError = (index) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }))
    setImageErrors(prev => ({ ...prev, [index]: true }))
    console.warn(`Failed to load image at index ${index}: ${images[index]}`)
  }

  const handleImageLoadStart = (index) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: true }))
  }

  const retryImage = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: false }))
    setImageLoadingStates(prev => ({ ...prev, [index]: true }))
  }

if (!images || images.length === 0) {
    return (
      <div className={cn("flex items-center justify-center p-8 text-gray-500", className)}>
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className={cn("flex gap-4", className)}>
      {/* Thumbnail strip */}
      <div className="flex flex-col gap-2 w-16 md:w-20">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={cn(
              "relative aspect-square border-2 rounded-md overflow-hidden transition-all duration-200 hover:border-amazon-blue thumbnail-hover",
              selectedImageIndex === index
                ? "border-amazon-blue ring-2 ring-amazon-blue/20"
                : "border-gray-200 hover:border-gray-300"
            )}
          >
            {imageLoadingStates[index] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="w-4 h-4 border-2 border-amazon-blue border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <img
              src={imageErrors[index] ? placeholderImage : image}
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)}
              onLoadStart={() => handleImageLoadStart(index)}
            />
            {imageErrors[index] && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  retryImage(index)
                }}
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity"
                title="Retry loading image"
              >
                <span className="text-white text-xs">Retry</span>
              </button>
            )}
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
            {imageLoadingStates[selectedImageIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg z-10">
                <div className="text-center">
                  <div className="w-8 h-8 border-4 border-amazon-blue border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <p className="text-sm text-gray-500">Loading image...</p>
                </div>
              </div>
            )}
            <img
              ref={imageRef}
              src={imageErrors[selectedImageIndex] ? placeholderImage : selectedImage}
              alt="Product main view"
              className="w-full h-full object-cover image-transition"
              onLoad={() => handleImageLoad(selectedImageIndex)}
              onError={() => handleImageError(selectedImageIndex)}
              onLoadStart={() => handleImageLoadStart(selectedImageIndex)}
            />
            
            {/* Error state overlay */}
            {imageErrors[selectedImageIndex] && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-lg">
                <div className="text-center p-4">
                  <p className="text-sm text-gray-500 mb-2">Image failed to load</p>
                  <button
                    onClick={() => retryImage(selectedImageIndex)}
                    className="px-3 py-1 text-xs bg-amazon-blue text-white rounded hover:bg-amazon-light-blue transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
            
            {/* Zoom overlay indicator */}
            {isZooming && !imageErrors[selectedImageIndex] && (
              <div 
                className="absolute border-2 border-amazon-blue bg-black/10 pointer-events-none"
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

        {/* Zoom detail area */}
        {isZooming && !imageErrors[selectedImageIndex] && (
          <div className="w-64 h-64 border border-gray-300 rounded-lg overflow-hidden bg-white">
            <div
              className="w-full h-full bg-cover bg-no-repeat transform scale-500 origin-top-left"
              style={{
                backgroundImage: `url(${selectedImage})`,
                backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                backgroundSize: '500% 500%'
              }}
            />
          </div>
        )}
      </div>
    </div>
  );

export default ImageGallery;