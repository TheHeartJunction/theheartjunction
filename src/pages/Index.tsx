import { Navbar } from "@/components/Navbar";
import { FeaturedGiftsCarousel } from "@/components/FeaturedGiftsCarousel";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    name: "Crimson",
    price: 499,
    description: "A luxurious handcrafted bouquet featuring deep red satin roses, wrapped in a pristine white paper with a soft ribbon for an elegant finish.",
    image: "/uploads/crimson.png",
    details: "Designed for romantic gestures, this bouquet is a timeless way to express love and admiration. Available in multiple variants.",
    category: "Handcrafted Bouquets",
  },
  {
    id: 2,
    name: "Truffle",
    price: 199,
    description: "A unique chocolate bouquet featuring a delightful assortment of premium chocolates, elegantly wrapped with soft fabric and a purple ribbon.",
    image: "/uploads/truffle.png",
    details: "Perfect for chocolate lovers, this bouquet is a sweet surprise for birthdays, anniversaries, and celebrations.",
    category: "Chocolate Bouquets",
  },
  {
    id: 3,
    name: "Glowfly",
    price: 439,
    description: "A mesmerizing bouquet featuring glowing butterflies and an enchanting LED setup, wrapped in premium soft-touch paper.",
    image: "/uploads/glowfly.png",
    details: "A perfect blend of light and elegance, ideal for romantic surprises, birthdays, and unique gifts.",
    category: "Handcrafted Bouquets",
  },
  {
    id: 4,
    name: "Golden Bliss",
    price: 2889,
    description: "A luxurious bouquet featuring 50 handcrafted roses in golden, yellow, and white hues, elegantly wrapped in premium paper for a sophisticated touch.",
    image: "/uploads/golden_bliss.png",
    details: "This luxe edition bouquet is perfect for grand gestures, anniversaries, and celebrations. Designed to leave a lasting impression.",
    category: "Handcrafted Bouquets",
  },
  {
    id: 5,
    name: "Cupid’s Message",
    price: 189,
    description: "A beautifully handcrafted explosion card filled with sweet messages, cute elements, and space for personal notes. Wrapped with a delicate pink ribbon for an adorable finish.",
    image: "/uploads/cupids_message.png",
    details: "Perfect for expressing heartfelt emotions, this interactive card unfolds to reveal layers of love. Ideal for birthdays, anniversaries, and special surprises.",
    category: "Handmade Cards",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      {/* Other sections */}
      
      {/* Featured Products Preview */}
      <FeaturedGiftsCarousel products={featuredProducts} />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Other sections */}
    </div>
  );
};

export default Index;
