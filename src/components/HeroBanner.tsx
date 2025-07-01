
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingCart } from "lucide-react";

const HeroBanner = () => {
  return (
    <div className="@container mb-8">
      <div className="@[480px]:px-4 @[480px]:py-3 max-w-7xl mx-auto px-4 lg:px-8">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-dark-green @[480px]:rounded-xl min-h-96 lg:min-h-[500px] relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.4) 100%), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          
          <div className="relative z-10 p-6 lg:p-12 max-w-2xl">
            <div className="mb-4">
              <span className="inline-block bg-accent-green text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                🔥 Limited Time Offer
              </span>
            </div>
            
            <h1 className="text-white tracking-light text-[32px] lg:text-[48px] font-bold leading-tight mb-4">
              Power Up Your Outdoors
            </h1>
            
            <p className="text-white/90 text-lg lg:text-xl mb-6 leading-relaxed">
              Professional-grade outdoor equipment with up to 40% off. 
              Free shipping on orders over $299.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-accent-green hover:bg-green-600 text-white font-semibold px-8 py-4 text-lg gap-2 transition-all duration-300 hover:scale-105"
              >
                <ShoppingCart className="w-5 h-5" />
                Shop Now
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-dark-green font-semibold px-8 py-4 text-lg gap-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                Free Shipping
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                2-Year Warranty
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-accent-green rounded-full"></span>
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
