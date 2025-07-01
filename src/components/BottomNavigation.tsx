
import { House, ShoppingBag, Wrench, User } from "lucide-react";
import { useState, useEffect } from "react";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { id: "home", icon: House, label: "Home" },
    { id: "shop", icon: ShoppingBag, label: "Shop" },
    { id: "services", icon: Wrench, label: "Services" },
    { id: "account", icon: User, label: "Account" },
  ];

  const handleNavClick = (itemId: string) => {
    setActiveTab(itemId);
    console.log(`Navigating to ${itemId}`);
    // Add actual navigation logic here
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="flex gap-2 border-t border-medium-green bg-[#1c261c] px-4 pb-3 pt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-1 flex-col items-center justify-center gap-1 rounded-full transition-colors py-2 ${
                isActive ? "text-white" : "text-text-green hover:text-white"
              }`}
            >
              <div className="flex h-6 items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
