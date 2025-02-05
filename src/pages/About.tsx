import { Navbar } from "@/components/Navbar";
import { Mail, Instagram, Facebook, Phone, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif text-center">About Us</h1>
        
        <div className="space-y-12 animate-fadeIn">
          {/* Mission Section */}
          <section className="text-center">
            <h2 className="text-3xl font-serif mb-4">Connecting Hearts, With Arts</h2>
            <p className="text-gray-600 leading-relaxed">
              At Heart Junction, we believe that gifts are more than just objects—they are emotions, memories, and expressions of love. Our mission is to bring your heartfelt ideas to life with personalized gifts that create lasting impressions. Whether it's custom gifts, beautiful bouquets, heartfelt letters, or thoughtfully curated hampers, we are here to make every occasion special.
            </p>
          </section>

          {/* Our Story Section */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Heart Junction was born out of a passion for creativity and a desire to help people express their emotions in the most meaningful way possible. We understand that every gift tells a story, and our goal is to help you craft unforgettable moments for your loved ones. With an artistic touch and a personal connection, we bring your ideas to reality.
            </p>
          </section>

          {/* What We Offer Section */}
          <section>
            <h2 className="text-2xl font-serif mb-4">What We Offer</h2>
            <ul className="space-y-2 text-gray-600">
              <li>🎁 Custom Gifts – Thoughtfully designed and personalized to match your emotions.</li>
              <li>💐 Bouquets – Elegant floral arrangements to brighten someone's day.</li>
              <li>✉️ Handwritten Letters – A timeless way to convey your heartfelt words.</li>
              <li>🎀 Hampers – Curated with love to make every celebration unique.</li>
            </ul>
          </section>

          {/* Founder Section */}
          <section>
            <h2 className="text-2xl font-serif mb-4">Meet Our Founder</h2>
            <p className="text-gray-600 leading-relaxed">
              Pratik, the creative mind behind Heart Junction, envisioned a platform where people could effortlessly turn their emotions into meaningful gifts. His journey started with a deep appreciation for art and heartfelt connections, which led to the foundation of Heart Junction. Through this platform, Pratik aims to bridge the gap between creativity and emotions, making gifting an experience filled with love and warmth.
            </p>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-serif mb-6">Let's Stay Connected</h2>
            <div className="space-y-4">
              <p className="text-gray-600">We'd love to hear from you and be part of your special moments! Connect with us:</p>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="mailto:theheartjunction@gmail.com" className="flex items-center gap-2 text-gray-600 hover:text-heart-200">
                  <Mail className="h-5 w-5" />
                  <span>theheartjunction@gmail.com</span>
                </a>
                <a href="https://instagram.com/theheartjunction_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-heart-200">
                  <Instagram className="h-5 w-5" />
                  <span>@theheartjunction_</span>
                </a>
                <a href="https://facebook.com/TheHeartJunction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-heart-200">
                  <Facebook className="h-5 w-5" />
                  <span>The Heart Junction</span>
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <a href="tel:+919412383635" className="flex items-center gap-2 text-gray-600 hover:text-heart-200">
                  <Phone className="h-5 w-5" />
                  <span>+91 9412383635</span>
                </a>
                <a href="https://www.heartjunction.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 hover:text-heart-200">
                  <Globe className="h-5 w-5" />
                  <span>www.heartjunction.in</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;