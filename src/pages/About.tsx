import { Navbar } from "@/components/Navbar";
import { Mail, Instagram, Facebook, Phone, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-heart-100 to-white">
      <Navbar />
      
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 font-serif">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At Heart Junction, we believe that gifts are more than just objects—they are emotions, memories, and expressions of love. 
            Our mission is to bring your heartfelt ideas to life with personalized gifts that create lasting impressions. 
            Whether it's custom gifts, beautiful bouquets, heartfelt letters, or thoughtfully curated hampers, 
            we are here to make every occasion special.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            Heart Junction was born out of a passion for creativity and a desire to help people express their emotions 
            in the most meaningful way possible. We understand that every gift tells a story, and our goal is to help 
            you craft unforgettable moments for your loved ones. With an artistic touch and a personal connection, 
            we bring your ideas to reality.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Custom Gifts</h3>
              <p className="text-gray-600">Thoughtfully designed and personalized to match your emotions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Bouquets</h3>
              <p className="text-gray-600">Elegant floral arrangements to brighten someone's day.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Handwritten Letters</h3>
              <p className="text-gray-600">A timeless way to convey your heartfelt words.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-2">Hampers</h3>
              <p className="text-gray-600">Curated with love to make every celebration unique.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-4">Meet Our Founder</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 leading-relaxed">
              Pratik, the creative mind behind Heart Junction, envisioned a platform where people could 
              effortlessly turn their emotions into meaningful gifts. His journey started with a deep 
              appreciation for art and heartfelt connections, which led to the foundation of Heart Junction. 
              Through this platform, Pratik aims to bridge the gap between creativity and emotions, making 
              gifting an experience filled with love and warmth.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-serif mb-4">Let's Stay Connected</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a href="mailto:theheartjunction@gmail.com" className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Mail className="text-heart-200" />
              <span>theheartjunction@gmail.com</span>
            </a>
            <a href="https://instagram.com/theheartjunction_" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Instagram className="text-heart-200" />
              <span>@theheartjunction_</span>
            </a>
            <a href="https://facebook.com/TheHeartJunction" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Facebook className="text-heart-200" />
              <span>The Heart Junction</span>
            </a>
            <a href="tel:+919412383635" className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Phone className="text-heart-200" />
              <span>+91 9412383635</span>
            </a>
            <a href="https://www.heartjunction.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2">
              <Globe className="text-heart-200" />
              <span>www.heartjunction.in</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;