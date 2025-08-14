import React from "react";
import { cn } from "@/utils/cn";

const Loading = ({ className = "" }) => {
  return (
    <div className={cn("bg-amazon-gray min-h-screen", className)}>
      {/* Main product section skeleton */}
      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm">
          {/* Left column - Image gallery skeleton */}
          <div className="lg:pr-8">
            <div className="flex gap-4">
              {/* Thumbnail strip */}
              <div className="flex flex-col gap-2 w-16 md:w-20">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-gray-200 rounded-lg animate-pulse"
                  />
                ))}
              </div>

              {/* Main image */}
              <div className="flex-1">
                <div className="aspect-square bg-gray-200 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>

          {/* Right column - Product info skeleton */}
          <div className="lg:pl-8 space-y-6">
            {/* Title */}
            <div className="space-y-3">
              <div className="h-8 bg-gray-200 rounded animate-pulse" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-1/2" />
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-40" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-20" />
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="h-12 bg-gray-200 rounded animate-pulse w-48" />
            </div>

            {/* Stock info */}
            <div className="space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-5 bg-gray-200 rounded animate-pulse w-72" />
              ))}
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded animate-pulse w-40" />
              <div className="space-y-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 bg-gray-200 rounded animate-pulse" />
                ))}
              </div>
            </div>

            {/* Purchase section */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-32" />
              <div className="space-y-3">
                <div className="h-12 bg-gray-200 rounded animate-pulse" />
                <div className="h-12 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EBC Content skeleton */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-80 mx-auto mb-4" />
            <div className="h-5 bg-gray-200 rounded animate-pulse w-96 mx-auto" />
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-5xl h-96 bg-gray-200 rounded-lg animate-pulse" />
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-32 mx-auto" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;