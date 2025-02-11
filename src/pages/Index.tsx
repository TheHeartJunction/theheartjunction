import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Gift, Heart, PenTool, Package, ArrowRight } from "lucide-react";
import { FeaturedGiftsCarousel } from "@/components/FeaturedGiftsCarousel";
import { TestimonialsSection } from "@/components/TestimonialsSection";
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

// Updated products array based on your conversation
const Products = [
  {
    id: 1,
    name: "Crimson",
    price: 499,
    description:
      "A luxurious handcrafted bouquet featuring deep red satin roses, wrapped in a pristine white paper with a soft ribbon for an elegant finish.",
    image: "/uploads/crimson.png", // Update this with the correct path if needed
    details:
      "Designed for romantic gestures, this bouquet is a timeless way to express love and admiration. Available in multiple variants.",
    category: "Handcrafted Bouquets",
  },
  {
    id: 2,
    name: "Truffle",
    price: 199,
    description:
      "A unique chocolate bouquet featuring a delightful assortment of premium chocolates, elegantly wrapped with soft fabric and a purple ribbon.",
    image: "/uploads/truffle.png", // Update this with the correct path if needed
    details:
      "Perfect for chocolate lovers, this bouquet is a sweet surprise for birthdays, anniversaries, and celebrations.",
    category: "Chocolate Bouquets",
  },
  {
    id: 3,
    name: "Glowfly",
    price: 439,
    description:
      "A mesmerizing bouquet featuring glowing butterflies and an enchanting LED setup, wrapped in premium soft-touch paper.",
    image: "/uploads/glowfly.png", // Update this with the correct path if needed
    details:
      "A perfect blend of light and elegance, ideal for romantic surprises, birthdays, and unique gifts.",
    category: "Handcrafted Bouquets",
  },
  {
    id: 4,
    name: "Golden Bliss",
    price: 2889,
    description:
      "A luxurious bouquet featuring 50 handcrafted roses in golden, yellow, and white hues, elegantly wrapped in premium paper for a sophisticated touch.",
    image: "/uploads/golden_bliss.png", // Update this with the correct path if needed
    details:
      "This luxe edition bouquet is perfect for grand gestures, anniversaries, and celebrations. Designed to leave a lasting impression.",
    category: "Handcrafted Bouquets",
  },
  {
    id: 5,
    name: "Cupid’s Message",
    price: 189,
    description:
      "A beautifully handcrafted explosion card filled with sweet messages, cute elements, and space for personal notes. Wrapped with a delicate pink ribbon for an adorable finish.",
    image: "/uploads/cupids_message.png", // Update this with the correct path if needed
    details:
      "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Handmade Cards",
  },
];

const testimonials = [
  {
    name: "Yagnik Sharma.",
    text: "The personalized gift I ordered was absolutely perfect! The attention to detail was amazing.",
    rating: 5,
  },
  {
    name: "Kirti.",
    text: "Their chocolate bouquet made my anniversary celebration extra special. Highly recommended!",
    rating: 4,
  },
  {
    name: "Sameeksha.",
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
                onClick={() => navigate('/products')}
                className="bg-heart-500 hover:bg-heart-500/90 text-white px-8 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                View Collection
                <ArrowRight className="ml-2 h-5 w-5" />
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
      <TestimonialsSection />
    </div>
  );
};

export default Index;
