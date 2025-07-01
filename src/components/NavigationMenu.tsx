
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SubMenuItem {
  id: string;
  label: string;
  href?: string;
}

interface MenuItem {
  id: string;
  label: string;
  href?: string;
  subItems?: SubMenuItem[];
}

const NavigationMenu = () => {
  const [activeTab, setActiveTab] = useState("Mowers");
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      id: "Mowers",
      label: "Mowers",
      subItems: [
        { id: "riding", label: "Riding Mowers" },
        { id: "walk-behind", label: "Walk-Behind" },
        { id: "zero-turn", label: "Zero-Turn" },
        { id: "robotic", label: "Robotic Mowers" }
      ]
    },
    {
      id: "Chainsaws",
      label: "Chainsaws",
      subItems: [
        { id: "electric", label: "Electric" },
        { id: "gas", label: "Gas Powered" },
        { id: "battery", label: "Battery Powered" },
        { id: "pole-saws", label: "Pole Saws" }
      ]
    },
    {
      id: "BBQs",
      label: "BBQs",
      subItems: [
        { id: "gas-grills", label: "Gas Grills" },
        { id: "charcoal", label: "Charcoal" },
        { id: "electric-grills", label: "Electric Grills" },
        { id: "smokers", label: "Smokers" }
      ]
    },
    {
      id: "Brands",
      label: "Brands",
      subItems: [
        { id: "honda", label: "Honda" },
        { id: "dewalt", label: "DeWalt" },
        { id: "stihl", label: "Stihl" },
        { id: "weber", label: "Weber" }
      ]
    },
    {
      id: "Services",
      label: "Services",
      subItems: [
        { id: "repair", label: "Repair Services" },
        { id: "maintenance", label: "Maintenance" },
        { id: "delivery", label: "Delivery" },
        { id: "installation", label: "Installation" }
      ]
    }
  ];

  const handleTabClick = (itemId: string) => {
    setActiveTab(itemId);
    setExpandedMenu(expandedMenu === itemId ? null : itemId);
  };

  const handleSubItemClick = (subItemId: string) => {
    console.log(`Clicked sub-item: ${subItemId}`);
    setExpandedMenu(null);
  };

  return (
    <div className="pb-3">
      <div className="flex border-b border-light-green px-4 gap-8 overflow-x-auto">
        {menuItems.map((item) => (
          <div key={item.id} className="relative">
            <button
              onClick={() => handleTabClick(item.id)}
              className={`flex items-center gap-1 border-b-[3px] pb-[13px] pt-4 whitespace-nowrap transition-colors ${
                activeTab === item.id
                  ? "border-b-white text-white"
                  : "border-b-transparent text-text-green hover:text-white"
              }`}
            >
              <p className="text-sm font-bold leading-normal tracking-[0.015em]">{item.label}</p>
              {item.subItems && (
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    expandedMenu === item.id ? 'rotate-180' : ''
                  }`} 
                />
              )}
            </button>
          </div>
        ))}
      </div>
      
      {/* Sub-menu pills */}
      {expandedMenu && menuItems.find(item => item.id === expandedMenu)?.subItems && (
        <div className="px-4 py-3 border-b border-light-green/50">
          <div className="flex gap-2 flex-wrap">
            {menuItems
              .find(item => item.id === expandedMenu)
              ?.subItems?.map((subItem) => (
                <button
                  key={subItem.id}
                  onClick={() => handleSubItemClick(subItem.id)}
                  className="px-3 py-1.5 rounded-full bg-medium-green/20 text-text-green hover:bg-medium-green/40 hover:text-white transition-colors text-sm font-medium border border-medium-green/30"
                >
                  {subItem.label}
                </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigationMenu;
