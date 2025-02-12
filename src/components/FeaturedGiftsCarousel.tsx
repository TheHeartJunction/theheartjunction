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
  {
    id: 1,
    name: "Crimson",
    price: 499,
    description: "A luxurious handcrafted bouquet featuring deep red satin roses, wrapped in a pristine white paper with a soft ribbon for an elegant finish.",
    image: "/uploads/crimson.png",
    details: "Designed for romantic gestures, this bouquet is a timeless way to express love and admiration. Available in multiple variants.",
    category: "Bouquet"
  },
  {
    id: 2,
    name: "Truffle",
    price: 199,
    description: "A unique chocolate bouquet featuring a delightful assortment of premium chocolates, elegantly wrapped with soft fabric and a purple ribbon.",
    image: "/uploads/truffle.png",
    details: "Perfect for chocolate lovers, this bouquet is a sweet surprise for birthdays, anniversaries, and celebrations.",
    category: "Bouquet"
  },
  {
    id: 3,
    name: "Glowfly",
    price: 439,
    description: "A mesmerizing bouquet featuring glowing butterflies and an enchanting LED setup, wrapped in premium soft-touch paper.",
    image: "/uploads/glowfly.png",
    details: "A perfect blend of light and elegance, ideal for romantic surprises, birthdays, and unique gifts.",
    category: "Bouquet"
  },
  {
    id: 4,
    name: "Golden Bliss",
    price: 2889,
    description: "A luxurious bouquet featuring 50 handcrafted roses in golden, yellow, and white hues, elegantly wrapped in premium paper for a sophisticated touch.",
    image: "/uploads/Golden Bliss.png",
    details: "This luxe edition bouquet is perfect for grand gestures, anniversaries, and celebrations. Designed to leave a lasting impression.",
    category: "Bouquet"
  },
  {
    id: 5,
    name: "Cupid's Message",
    price: 189,
    description: "A beautifully handcrafted explosion card filled with sweet messages, cute elements, and space for personal notes. Wrapped with a delicate pink ribbon for an adorable finish.",
    image: "/uploads/cupid's message.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Bouquet"
  },
  {
    id: 6,
    name: "Aurora",
    price: 499,
    description: "A beautifully handcrafted 7 flower bouquet with golden theme.",
    image: "/uploads/Aurora.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Bouquet"
  },
  {
    id: 7,
    name: "Eclipse",
    price: 499,
    description: "A beautifully handcrafted 7 flower bouquet with black theme.",
    image: "/uploads/Eclipse.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Bouquet"
  },
  {
    id: 8,
    name: "Lavender Luxe",
    price: 539,
    description: "A beautifully premium 7 flower bouquet with lavender theme.",
    image: "/uploads/Lavender Luxe.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Bouquet"
  },
  {
    id: 9,
    name: "Blossom",
    price: 499,
    description: "A beautifully handcrafted 7 flower bouquet with red and white theme.",
    image: "/uploads/Blossom.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Bouquet"
  },
  {
    id: 10,
    name: "LoveBundle",
    price: 599,
    description: "A beautifully handcrafted 7 flower bouquet with Cupid's card.",
    image: "/uploads/LoveBundle.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "COMBO"
  }
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
        <div className="relative w-full h-[600px] flex items-center justify-center">
          <motion.div
            key={products[index].id}
            className="w-full max-w-lg mx-auto"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <motion.img
                  src={products[index].image}
                  alt={products[index].name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
