
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HeroBanner from "@/components/HeroBanner";
import ProductSection from "@/components/ProductSection";
import TestimonialCard from "@/components/TestimonialCard";
import ContactSection from "@/components/ContactSection";
import Newsletter from "@/components/Newsletter";
import BottomNavigation from "@/components/BottomNavigation";
import BrandLogos from "@/components/BrandLogos";
import ReviewSection from "@/components/ReviewSection";

const Index = () => {
  const newArrivals = [
    {
      id: "1",
      title: "Latest Mower",
      description: "The newest model for perfect lawns",
      price: "$899",
      originalPrice: "$1,199",
      imageUrl: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "2", 
      title: "New Chainsaw",
      description: "Powerful cutting for any job",
      price: "$299",
      originalPrice: "$399",
      imageUrl: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "3",
      title: "Grill Master 3000",
      description: "Next-gen grilling experience",
      price: "$1,299",
      originalPrice: "$1,599",
      imageUrl: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const bestSellers = [
    {
      id: "4",
      title: "Top Rated Mower",
      description: "Our most popular mower",
      price: "$749",
      originalPrice: "$899",
      imageUrl: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "5",
      title: "Pro Chainsaw", 
      description: "Trusted by professionals",
      price: "$349",
      originalPrice: "$449",
      imageUrl: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "6",
      title: "Elite Grill",
      description: "The ultimate grilling machine",
      price: "$1,899",
      originalPrice: "$2,299",
      imageUrl: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const specialOffers = [
    {
      id: "7",
      title: "Mower Sale",
      description: "Save on select mowers",
      price: "$599",
      originalPrice: "$799",
      imageUrl: "https://images.unsplash.com/photo-1558618046-fca920ad8217?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "8",
      title: "Chainsaw Discount",
      description: "Limited time chainsaw offer",
      price: "$199",
      originalPrice: "$299",
      imageUrl: "https://images.unsplash.com/photo-1609205807107-e8ec2120f9de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    },
    {
      id: "9",
      title: "BBQ Bundle",
      description: "Grill and accessories bundle",
      price: "$999",
      originalPrice: "$1,299",
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
    <div className="relative flex size-full min-h-screen flex-col bg-dark-green justify-between font-space-grotesk overflow-x-hidden">
      <div>
        <Header />
        <Navigation />
        <HeroBanner />
        
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <ProductSection title="New Arrivals" products={newArrivals} />
          <ProductSection title="Best Sellers" products={bestSellers} />
          <ProductSection title="Special Offers" products={specialOffers} />
          
          <BrandLogos />
          <ReviewSection />
          
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pb-3 pt-5">
            Customer Testimonials
          </h2>
          <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex items-stretch gap-3 pb-4">
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
      </div>
      
      <div>
        <BottomNavigation />
        <div className="h-5 bg-[#1c261c]"></div>
      </div>
    </div>
  );
};

export default Index;
