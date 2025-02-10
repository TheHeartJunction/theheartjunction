
import { Card, CardContent, CardHeader } from "./ui/card";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
  longText?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Priya S.",
    location: "Greater Noida",
    text: "The personalized gift I ordered was absolutely perfect! The attention to detail was amazing.",
    longText: "I was looking for something special for my sister's wedding and came across The Heart Junction. The level of personalization and care they put into their work is exceptional. The ribbon flowers were so delicate and beautiful - everyone at the wedding wanted to know where I got them from!",
    rating: 5,
    avatar: "/lovable-uploads/c77061d3-9b60-4e19-abd5-cb48fda9db4f.png"
  },
  {
    name: "Rahul M.",
    location: "Delhi NCR",
    text: "Their chocolate bouquet made my anniversary celebration extra special. Highly recommended!",
    longText: "I wanted to surprise my wife on our anniversary with something unique. The chocolate bouquet was perfect - beautifully arranged and the quality of chocolates was excellent. The team was very helpful in customizing it exactly how I wanted.",
    rating: 5,
    avatar: "/lovable-uploads/c77061d3-9b60-4e19-abd5-cb48fda9db4f.png"
  },
  {
    name: "Anjali K.",
    location: "Noida",
    text: "Beautiful craftsmanship and excellent customer service. Will definitely order again!",
    longText: "I've ordered multiple times from The Heart Junction and each time they've exceeded my expectations. Their ribbon flowers are so unique and long-lasting compared to real flowers. The customer service is exceptional - they're always ready to help with customizations.",
    rating: 5,
    avatar: "/lovable-uploads/c77061d3-9b60-4e19-abd5-cb48fda9db4f.png"
  },
];

export const TestimonialsSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const handleWhatsAppReview = () => {
    const message = encodeURIComponent("Hi! I'd like to share my experience with The Heart Junction:");
    window.open(`https://wa.me/+919412383635?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-heart-blush to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-0" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-serif mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read about the experiences of our valued customers and their journey with The Heart Junction
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full backdrop-blur-sm bg-white/80 border-heart-rosegold/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-heart-500/20">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-heart-gold text-heart-gold" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <motion.div
                    animate={{ height: expandedId === index ? "auto" : "6rem" }}
                    className="relative overflow-hidden"
                  >
                    <p className="text-gray-600">
                      {expandedId === index ? testimonial.longText || testimonial.text : testimonial.text}
                    </p>
                    {testimonial.longText && (
                      <Button
                        variant="link"
                        onClick={() => setExpandedId(expandedId === index ? null : index)}
                        className="mt-2 p-0 h-auto text-heart-500 hover:text-heart-500/80"
                      >
                        {expandedId === index ? "Show Less" : "Read More"}
                      </Button>
                    )}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Button
            onClick={handleWhatsAppReview}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Share Your Experience on WhatsApp
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
