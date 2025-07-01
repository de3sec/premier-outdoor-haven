
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price?: string;
  originalPrice?: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h2>
        <button className="text-accent-green hover:text-green-400 transition-colors font-medium">
          View All →
        </button>
      </div>
      
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch gap-6 pb-4 min-w-full lg:grid lg:grid-cols-3 lg:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              price={product.price}
              originalPrice={product.originalPrice}
              onClick={() => console.log(`Clicked on ${product.title}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
