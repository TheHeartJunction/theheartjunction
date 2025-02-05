import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Gift, Heart, PenTool, Package, ArrowRight, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const categories = [
  {
    title: "Personalized Gifts",
    icon: Gift,
    description: "Unique gifts tailored just for them",
  },
  {
    title: "Handcrafted Bouquets",
    icon: Heart,
    description: "Beautiful arrangements made with love",
  },
  {
    title: "Love Letters",
    icon: PenTool,
    description: "Heartfelt messages penned by hand",
  },
  {
    title: "Custom Hampers",
    icon: Package,
    description: "Curated collections of joy",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Mini Bloom",
    price: 350,
    description: "A tiny bundle of joy, featuring four delicate handcrafted ribbon flowers",
    image: "/lovable-uploads/22b45637-40e2-4c88-ad58-d838adb92560.png"
  },
  {
    id: 2,
    name: "🖤 Midnight Whispers",
    price: 549,
    description: "Mysterious and elegant black ribbon bouquet, perfect for those who appreciate dark aesthetics",
    image: "/lovable-uploads/c3201a07-f9e8-4141-bbe3-cfb46ab164fa.png"
  },
  {
    id: 3,
    name: "🍫 Choco Bliss Bouquet",
    price: 250,
    description: "A delightful fusion of luxury and sweetness, customizable with your favorite chocolates",
    image: "/lovable-uploads/c80f2fce-6094-49c0-a7f0-681f3b58a7e1.png"
  }
];

const testimonials = [
  {
    name: "Priya S.",
    text: "The personalized gift I ordered was absolutely perfect! The attention to detail was amazing.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    text: "Their chocolate bouquet made my anniversary celebration extra special. Highly recommended!",
    rating: 5,
  },
  {
    name: "Anjali K.",
    text: "Beautiful craftsmanship and excellent customer service. Will definitely order again!",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center animate-fadeIn relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/c3201a07-f9e8-4141-bbe3-cfb46ab164fa.png')] opacity-5 bg-cover bg-center" />
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-serif">
            Connecting Hearts, <span className="text-heart-200">With Arts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover unique, personalized gifts that speak directly to the heart. Each piece is crafted with love and attention to detail.
          </p>
          <Button className="bg-heart-200 hover:bg-heart-300 text-white px-8 py-6 rounded-full text-lg">
            Explore Our Collection
          </Button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Gift Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div key={category.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-heart-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <category.icon className="w-6 h-6 text-heart-200" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{category.title}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-16 px-4 bg-heart-400/10">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Featured Gifts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProducts.map((product) => (
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
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => window.location.href = '/products'}>
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <p className="mt-4 font-semibold">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;