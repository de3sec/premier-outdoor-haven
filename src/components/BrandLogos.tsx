
const BrandLogos = () => {
  const brands = [
    { name: "Honda", logo: "H" },
    { name: "DeWalt", logo: "D" },
    { name: "Stihl", logo: "S" },
    { name: "Weber", logo: "W" },
    { name: "Husqvarna", logo: "H" },
    { name: "Craftsman", logo: "C" }
  ];

  return (
    <div className="py-12 border-y border-light-green my-12">
      <div className="text-center mb-8">
        <h3 className="text-white text-lg font-semibold mb-2">Trusted Brands</h3>
        <p className="text-text-green text-sm">We partner with industry leaders</p>
      </div>
      
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-16 h-16 rounded-full border-2 border-text-green hover:border-accent-green transition-colors duration-300 group cursor-pointer"
          >
            <span className="text-text-green group-hover:text-accent-green font-bold text-xl transition-colors duration-300">
              {brand.logo}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandLogos;
