import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift, SlidersHorizontal } from "lucide-react";
import { WhatsAppOrder } from "@/components/WhatsAppOrder";
import { Cart } from "@/components/Cart";
import { useState } from "react";
import { motion } from "framer-motion";

const products = [
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

type Category = "All" | "Personalized Gifts" | "Handcrafted Bouquets" | "Love Letters" | "Custom Hampers";
type SortOption = "price-asc" | "price-desc" | "name-asc" | "name-desc";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [sortBy, setSortBy] = useState<SortOption>("price-asc");

  const filteredProducts = products.filter(product => 
    selectedCategory === "All" || product.category === selectedCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 font-serif">Our Collection</h1>
          <Cart />
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white/50 backdrop-blur-sm p-4 rounded-lg shadow-sm">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-heart-500" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Select onValueChange={(value) => setSelectedCategory(value as Category)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Personalized Gifts">Personalized Gifts</SelectItem>
                <SelectItem value="Handcrafted Bouquets">Handcrafted Bouquets</SelectItem>
                <SelectItem value="Love Letters">Love Letters</SelectItem>
                <SelectItem value="Custom Hampers">Custom Hampers</SelectItem>
              </SelectContent>
            </Select>

            <Select onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A to Z</SelectItem>
                <SelectItem value="name-desc">Name: Z to A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {sortedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-shadow bg-white/80 backdrop-blur-sm border-heart-rosegold/20">
                <div className="aspect-square overflow-hidden">
                  {product.image ? (
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-heart-100 flex items-center justify-center">
                      <Gift className="w-12 h-12 text-heart-200" />
                    </div>
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-serif">{product.name}</CardTitle>
                  <CardDescription>Starting from ₹{product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter className="flex gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="flex-1 hover:bg-heart-500/10" variant="secondary">View Details</Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-serif">{product.name}</DialogTitle>
                        <DialogDescription>
                          <div className="mt-4 space-y-4">
                            <div className="aspect-square w-full max-w-md mx-auto overflow-hidden rounded-lg">
                              <img 
                                src={product.image} 
                                alt={product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <p className="text-lg">{product.details}</p>
                            <div className="sticky bottom-0 bg-background/95 backdrop-blur py-4">
                              <WhatsAppOrder product={product} />
                            </div>
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
