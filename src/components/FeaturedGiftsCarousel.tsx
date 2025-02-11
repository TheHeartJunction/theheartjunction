
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { products } from "@/src/pages/Products.tsx";
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

<FeaturedGiftsCarousel products={featuredProducts} />
}

export const FeaturedGiftsCarousel = ({ products = [] }: FeaturedGiftsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // ✅ Prevent crash when products is empty
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
    
    const interval = setInterval(nextProduct, 3000); // Changed from 5000 to 3000 for faster transitions
    return () => clearInterval(interval);
  }, [nextProduct, autoScrollEnabled]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      setAutoScrollEnabled(false);
      if (e.key === "ArrowLeft") previousProduct();
      if (e.key === "ArrowRight") nextProduct();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextProduct, previousProduct]);

  // Reset auto-scroll after user interaction
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
          <AnimatePresence mode="wait">
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
                    layoutId={`product-image-${products[index].id}`}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{products[index].name}</h3>
                  <p className="text-gray-600 mb-4">{products[index].description}</p>
                  <p className="text-lg font-bold">₹{products[index].price}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
          onClick={() => {
            setAutoScrollEnabled(false);
            previousProduct();
          }}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
          onClick={() => {
            setAutoScrollEnabled(false);
            nextProduct();
          }}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {products.map((_, i) => (
            <button
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                i === index ? "bg-heart-200 w-4" : "bg-gray-300"
              )}
              onClick={() => {
                setAutoScrollEnabled(false);
                setIndex(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
