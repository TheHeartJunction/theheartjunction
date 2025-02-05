import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";

const products = [
  {
    id: 1,
    name: "Mini Bloom",
    price: 350,
    description: "A tiny bundle of joy, featuring four delicate handcrafted ribbon flowers",
    image: "/lovable-uploads/22b45637-40e2-4c88-ad58-d838adb92560.png",
    details: "Each Mini Bloom is carefully crafted with premium ribbons, creating a lasting memory that never wilts. Perfect for small gestures of love.",
    sizes: ["Small", "Medium"],
    colors: ["Pink", "Red", "White"]
  },
  {
    id: 2,
    name: "🖤 Midnight Whispers",
    price: 549,
    description: "Mysterious and elegant black ribbon bouquet, perfect for those who appreciate dark aesthetics",
    image: "/lovable-uploads/c3201a07-f9e8-4141-bbe3-cfb46ab164fa.png",
    details: "A sophisticated arrangement that speaks volumes through its dark elegance. Each ribbon is carefully selected for maximum impact.",
    sizes: ["Medium", "Large"],
    colors: ["Black", "Dark Purple"]
  },
  {
    id: 3,
    name: "🍫 Choco Bliss Bouquet",
    price: 250,
    description: "A delightful fusion of luxury and sweetness, customizable with your favorite chocolates",
    image: "/lovable-uploads/c80f2fce-6094-49c0-a7f0-681f3b58a7e1.png",
    details: "Combines premium chocolates with artistic presentation. Can be customized with your choice of chocolates.",
    sizes: ["Small", "Medium", "Large"],
    colors: ["Brown", "Gold"]
  }
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { toast } = useToast();

  const handleAddToCart = (product) => {
    // In a real app, this would integrate with a cart management system
    console.log('Adding to cart:', product);
    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
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
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>Starting from ₹{product.price}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.description}</p>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex-1">View Details</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{product.name}</DialogTitle>
                      <DialogDescription>
                        <div className="mt-4">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                          />
                          <p className="text-lg mb-4">{product.details}</p>
                          <div className="space-y-2">
                            <p><strong>Price:</strong> ₹{product.price}</p>
                            <p><strong>Available Sizes:</strong> {product.sizes.join(", ")}</p>
                            <p><strong>Colors:</strong> {product.colors.join(", ")}</p>
                          </div>
                          <Button 
                            className="w-full mt-4 bg-heart-200 hover:bg-heart-300"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart
                          </Button>
                        </div>
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
                <Button 
                  className="flex-1 bg-heart-200 hover:bg-heart-300"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;