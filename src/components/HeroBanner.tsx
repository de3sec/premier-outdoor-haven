
const HeroBanner = () => {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-dark-green @[480px]:rounded-xl min-h-80 relative"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")`
          }}
        >
          <div className="flex flex-col p-6 gap-4">
            <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">
              Power Up Your Outdoors
            </h1>
            <p className="text-white/90 text-lg leading-relaxed max-w-md">
              Discover premium outdoor equipment trusted by professionals. Quality tools for every outdoor adventure.
            </p>
            <div className="flex gap-3">
              <button className="bg-accent-green hover:bg-green-400 text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Shop Now
              </button>
              <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-colors border border-white/30">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
