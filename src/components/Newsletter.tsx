
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Gift, Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    // Here you would typically send the email to your backend
  };

  return (
    <div className="bg-gradient-to-r from-medium-green to-light-green rounded-xl p-8 lg:p-12 mb-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-accent-green rounded-full">
            <Gift className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">
          Get Exclusive Deals
        </h2>
        
        <p className="text-white/90 text-lg mb-6">
          Join 50,000+ subscribers and get 15% off your first order, plus early access to sales and new products.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <div className="flex-1 relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-green w-5 h-5" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-accent-green focus:border-transparent"
              required
            />
          </div>
          
          <Button
            type="submit"
            className="bg-accent-green hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
          >
            Get 15% Off
          </Button>
        </form>
        
        <div className="flex items-center justify-center gap-6 text-sm text-white/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-green rounded-full"></span>
            No spam, unsubscribe anytime
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent-green rounded-full"></span>
            50,000+ subscribers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
