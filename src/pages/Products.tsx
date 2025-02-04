import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Products = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-heart-100"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Custom Gift Set #{item}</h3>
                <p className="text-gray-600 mb-4">Starting from $29.99</p>
                <Button variant="outline" className="w-full">View Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;