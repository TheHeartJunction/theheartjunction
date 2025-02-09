import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Gift, Heart, PenTool, Package, ArrowRight, Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { WhatsAppOrder } from "@/components/WhatsAppOrder";
import { FeaturedGiftsCarousel } from "@/components/FeaturedGiftsCarousel";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Personalized Gifts",
    icon: Gift,
    description: "Unique gifts tailored just for them",
    bgColor: "bg-heart-300/50", // Soft Pink
  },
  {
    title: "Handcrafted Bouquets",
    icon: Heart,
    description: "Beautiful arrangements made with love",
    bgColor: "bg-heart-100/50", // Soft Peach
  },
  {
    title: "Love Letters",
    icon: PenTool,
    description: "Heartfelt messages penned by hand",
    bgColor: "bg-heart-400/50", // Soft Purple
  },
  {
    title: "Custom Hampers",
    icon: Package,
    description: "Curated collections of joy",
    bgColor: "bg-heart-600/50", // Light Pink
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
  },
  {
    id: 4,
    name: "💐 Premium Bouquet",
    price: 549,
    description: "Exquisite handcrafted bouquet available in various sizes and colors. Final price varies by selection.",
    image: "/lovable-uploads/b57ca2f9-1346-41ee-b479-f516ccd98369.png"
  },
  {
    id: 5,
    name: "✨ Majestic Bloom",
    price: 2999,
    description: "Our grandest creation featuring 50 stunning handcrafted flowers",
    image: "/lovable-uploads/371ef153-3a47-4080-b0b3-1d4d34132849.png"
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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-blush to-white bg-honeycomb bg-opacity-10 bg-fixed bg-center bg-cover">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-heart-blush via-white to-heart-blush opacity-90" />
        <div className="absolute inset-0 bg-[url('/lovable-uploads/371ef153-3a47-4080-b0b3-1d4d34132849.png')] bg-cover bg-center opacity-10 blur-sm" />
        <div className="relative z-10 max-w-6xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-6"
            >
              <Heart className="w-12 h-12 text-heart-500 fill-heart-500/20" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 font-serif leading-tight">
              Your Feelings, Our Art –
              <br />
              <span className="text-heart-500">Make Every Gift Special</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mt-6 font-serif">
              Surprise your loved ones with customized gifts made just for them
            </p>
            <div className="flex justify-center items-center mt-8">
              <Button 
                variant="outline" 
                className="border-heart-gold hover:bg-heart-gold/10 px-8 py-6 rounded-full text-lg transition-all duration-300"
                onClick={() => navigate('/products')}
              >
                View Collection
              </Button>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-12"
            >
              <p className="italic text-gray-600 text-sm md:text-base">
                ❝ A gift that speaks from the heart lasts forever ❞
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">Our Gift Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div 
              key={category.title} 
              className={`${category.bgColor} backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-heart-rosegold/20`}
            >
              <div className="w-12 h-12 bg-heart-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <category.icon className="w-6 h-6 text-heart-500 transition-colors hover:text-heart-gold" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{category.title}</h3>
              <p className="text-gray-600 text-center">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products Preview */}
      <FeaturedGiftsCarousel products={featuredProducts} />

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <h2 className="text-3xl font-bold text-center mb-12 font-serif">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-heart-blush/50 backdrop-blur-sm border border-heart-rosegold/20">
              <CardHeader>
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-heart-gold text-heart-gold" />
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
