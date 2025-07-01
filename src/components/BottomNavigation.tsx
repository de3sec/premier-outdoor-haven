
import { House, ShoppingBag, Wrench, User } from "lucide-react";
import { useState } from "react";

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState("home");

  const navItems = [
    { id: "home", icon: House, weight: "fill" },
    { id: "shop", icon: ShoppingBag, weight: "regular" },
    { id: "services", icon: Wrench, weight: "regular" },
    { id: "account", icon: User, weight: "regular" },
  ];

  return (
    <div className="flex gap-2 border-t border-medium-green bg-[#1c261c] px-4 pb-3 pt-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-1 flex-col items-center justify-end gap-1 rounded-full transition-colors ${
              isActive ? "text-white" : "text-text-green hover:text-white"
            }`}
          >
            <div className="flex h-8 items-center justify-center">
              <Icon className="w-6 h-6" />
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default BottomNavigation;
