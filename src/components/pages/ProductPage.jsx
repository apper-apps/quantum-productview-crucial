import React, { useState, useEffect } from "react";
import ImageGallery from "@/components/organisms/ImageGallery";
import ProductInfo from "@/components/organisms/ProductInfo";
import EBCContent from "@/components/organisms/EBCContent";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import { productService } from "@/services/api/productService";

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadProduct = async () => {
    try {
      setLoading(true);
      setError("");
      // Load the first product (Id: 1) as our featured product
      const productData = await productService.getById(1);
      setProduct(productData);
    } catch (err) {
      setError(err.message || "Failed to load product");
      console.error("Product loading error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} onRetry={loadProduct} />;
  if (!product) return <Error message="Product not found" onRetry={loadProduct} />;

  return (
    <div className="bg-amazon-gray min-h-screen">
      {/* Main product section */}
      <div className="max-w-screen-2xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-sm">
          {/* Left column - Image gallery */}
          <div className="lg:pr-8">
            <ImageGallery 
              images={product.images}
              className="w-full"
            />
          </div>

          {/* Right column - Product info */}
          <div className="lg:pl-8">
            <ProductInfo 
              product={product}
              className="h-full"
            />
          </div>
        </div>
      </div>

      {/* A+/EBC Content section */}
      <div className="bg-white border-t border-gray-200">
        <EBCContent 
          ebcImage={product.ebcImage}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default ProductPage;