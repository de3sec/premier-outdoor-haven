
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        {title}
      </h2>
      <div className="flex overflow-x-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex items-stretch p-4 gap-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              imageUrl={product.imageUrl}
              onClick={() => console.log(`Clicked on ${product.title}`)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSection;
