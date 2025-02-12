import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

/**
 * Props for the FeaturedGiftsCarousel component.
 * 
 * @interface FeaturedGiftsCarouselProps
 * @property {Product[]} products - An array of products to be displayed in the carousel.
 */
interface FeaturedGiftsCarouselProps {
  products: Product[];
}

// Define the products array for MyComponent
const products: Product[] = [
  // Add product objects here
];

const MyComponent = () => {
  return <FeaturedGiftsCarousel products={products} />;
};

export const FeaturedGiftsCarousel = ({ products = [] }: FeaturedGiftsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  if (!products || products.length === 0) {
    return <p className="text-center">No featured products available</p>;
  }

  const nextProduct = useCallback(() => {
    setIndex((prev) => (prev + 1) % products.length);
  }, [products.length]);

  const previousProduct = useCallback(() => {
    setIndex((prev) => (prev - 1 + products.length) % products.length);
  }, [products.length]);

  useEffect(() => {
    if (!autoScrollEnabled) return;
    
    const interval = setInterval(nextProduct, 3000);
    return () => clearInterval(interval);
  }, [nextProduct, autoScrollEnabled]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setAutoScrollEnabled(false);
      if (e.key === "ArrowLeft") previousProduct();
      if (e.key === "ArrowRight") nextProduct();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextProduct, previousProduct]);

  useEffect(() => {
    if (!autoScrollEnabled) {
      const timer = setTimeout(() => setAutoScrollEnabled(true), 5000);
      return () => clearTimeout(timer);
    }
  }, [autoScrollEnabled]);

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    setAutoScrollEnabled(false);
    const swipe = offset.x;

    if (Math.abs(velocity.x) > 500 || Math.abs(swipe) > 100) {
      if (swipe < 0) {
        nextProduct();
      } else {
        previousProduct();
      }
    }
  };

  return (
    <div className="relative w-full py-16 px-4 bg-heart-400/10">
      <h2 className="text-3xl font-bold text-center mb-12 font-serif">Featured Gifts</h2>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="relative w-full h-[500px] overflow-hidden">
          <motion.div
            key={products[index].id}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full">
              <div className="relative h-64">
                <motion.img
                  src={products[index].image}
                  alt={products[index].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{products[index].name}</h3>
                <p className="text-gray-600 mb-4">{products[index].description}</p>
                <p className="text-lg font-bold">₹{products[index].price}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
