
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  originalPrice?: string;
  onClick?: () => void;
}

const ProductCard = ({ title, description, imageUrl, price, originalPrice, onClick }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Added ${title} to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Added ${title} to wishlist`);
  };

  return (
    <div 
      className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-64 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group"
      onClick={onClick}
    >
      <div className="relative">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col overflow-hidden"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 p-2 rounded-full bg-white/20 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
          >
            <Heart className="w-4 h-4" />
          </button>
          
          {originalPrice && (
            <div className="absolute top-3 left-3 bg-accent-green text-white px-2 py-1 rounded-md text-xs font-bold">
              SAVE {Math.round(((parseFloat(originalPrice.replace('$', '').replace(',', '')) - parseFloat(price?.replace('$', '').replace(',', '') || '0')) / parseFloat(originalPrice.replace('$', '').replace(',', ''))) * 100)}%
            </div>
          )}
        </div>
      </div>
      
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-white text-base font-medium leading-normal">{title}</p>
          <p className="text-text-green text-sm font-normal leading-normal">{description}</p>
        </div>
        
        {price && (
          <div className="flex items-center gap-2">
            <span className="text-white text-lg font-bold">{price}</span>
            {originalPrice && (
              <span className="text-text-green text-sm line-through">{originalPrice}</span>
            )}
          </div>
        )}
        
        <Button
          onClick={handleAddToCart}
          className="w-full bg-accent-green hover:bg-green-600 text-white font-semibold transition-colors duration-300 gap-2"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
