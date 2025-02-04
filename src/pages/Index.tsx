import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Gift, Heart, PenTool, Package } from "lucide-react";

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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Connecting Hearts, <span className="text-heart-200">With Arts</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover unique, personalized gifts that speak directly to the heart. Each piece is crafted with love and attention to detail.
        </p>
        <Button className="bg-heart-200 hover:bg-heart-300 text-white px-8 py-6 rounded-full text-lg">
          Start Gifting
        </Button>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Gift Categories</h2>
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
        <h2 className="text-3xl font-bold text-center mb-12">Featured Gifts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-heart-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Gift Set</h3>
                <p className="text-gray-600 mb-4">Starting from $29.99</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;