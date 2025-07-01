
import { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Mowers");
  
  const tabs = ["Mowers", "Chainsaws", "BBQs", "Brands", "Services"];

  return (
    <div className="pb-3">
      <div className="flex border-b border-light-green px-4 gap-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex flex-col items-center justify-center border-b-[3px] pb-[13px] pt-4 whitespace-nowrap transition-colors ${
              activeTab === tab
                ? "border-b-white text-white"
                : "border-b-transparent text-text-green hover:text-white"
            }`}
          >
            <p className="text-sm font-bold leading-normal tracking-[0.015em]">{tab}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
