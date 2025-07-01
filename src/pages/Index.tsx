
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import ProductSection from "@/components/ProductSection";
import TestimonialCard from "@/components/TestimonialCard";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import BottomNavigation from "@/components/BottomNavigation";

const Index = () => {
  const newArrivals = [
    {
      id: "1",
      title: "Latest Mower",
      description: "The newest model for perfect lawns",
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "2", 
      title: "New Chainsaw",
      description: "Powerful cutting for any job",
      imageUrl: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "3",
      title: "Grill Master 3000",
      description: "Next-gen grilling experience", 
      imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const bestSellers = [
    {
      id: "4",
      title: "Top Rated Mower",
      description: "Our most popular mower",
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "5",
      title: "Pro Chainsaw", 
      description: "Trusted by professionals",
      imageUrl: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "6",
      title: "Elite Grill",
      description: "The ultimate grilling machine",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const specialOffers = [
    {
      id: "7",
      title: "Mower Sale",
      description: "Save on select mowers",
      imageUrl: "https://images.unsplash.com/photo-1558618046-fca920ad8217?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "8",
      title: "Chainsaw Discount",
      description: "Limited time chainsaw offer",
      imageUrl: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "9",
      title: "BBQ Bundle",
      description: "Grill and accessories bundle", 
      imageUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const testimonials = [
    {
      name: "Sophia M.",
      testimonial: "Great products and service!",
      imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Ethan T.", 
      testimonial: "Highly recommend for all your outdoor needs.",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      name: "Olivia K.",
      testimonial: "Excellent quality and support.",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-dark-green justify-between font-space-grotesk overflow-x-hidden"
    >
      <div>
        <Header />
        <Navigation />
        <HeroBanner />
        
        <ProductSection title="New Arrivals" products={newArrivals} />
        <ProductSection title="Best Sellers" products={bestSellers} />
        <ProductSection title="Special Offers" products={specialOffers} />
        
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Customer Testimonials
        </h2>
        <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex items-stretch p-4 gap-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
        
        <ContactSection />
        <Newsletter />
      </div>
      
      <div>
        <BottomNavigation />
        <div className="h-5 bg-[#1c261c]"></div>
      </div>
    </div>
  );
};

export default Index;
