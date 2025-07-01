
interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  onClick?: () => void;
}

const ProductCard = ({ title, description, imageUrl, onClick }: ProductCardProps) => {
  return (
    <div 
      className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-40 cursor-pointer transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl flex flex-col"
        style={{ backgroundImage: `url("${imageUrl}")` }}
      />
      <div>
        <p className="text-white text-base font-medium leading-normal">{title}</p>
        <p className="text-text-green text-sm font-normal leading-normal">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
