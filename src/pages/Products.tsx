import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Gift } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Cart, CartItem } from "@/components/Cart";

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
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: any) => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }

    const newItem: CartItem = {
      id: Date.now(), // Using timestamp as unique ID
      name: product.name,
      price: product.price,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
      image: product.image
    };

    setCartItems([...cartItems, newItem]);
    toast.success("Added to cart!");
    setSelectedSize("");
    setSelectedColor("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 font-serif">Our Products</h1>
          <Cart />
        </div>
        
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
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Size</label>
                              <Select onValueChange={setSelectedSize} value={selectedSize}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select size" />
                                </SelectTrigger>
                                <SelectContent>
                                  {product.sizes.map((size) => (
                                    <SelectItem key={size} value={size}>
                                      {size}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Color</label>
                              <Select onValueChange={setSelectedColor} value={selectedColor}>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select color" />
                                </SelectTrigger>
                                <SelectContent>
                                  {product.colors.map((color) => (
                                    <SelectItem key={color} value={color}>
                                      {color}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          <Button 
                            className="w-full bg-heart-200 hover:bg-heart-300"
                            onClick={() => handleAddToCart(product)}
                          >
                            Add to Cart - ₹{product.price}
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