
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center bg-dark-green p-4 pb-2 justify-between">
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
        Premier Outdoor
      </h2>
      <div className="flex w-12 items-center justify-end">
        <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 bg-transparent text-white gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0 hover:bg-medium-green transition-colors">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
