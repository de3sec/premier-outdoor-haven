
const HeroBanner = () => {
  return (
    <div className="@container">
      <div className="@[480px]:px-4 @[480px]:py-3">
        <div
          className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-dark-green @[480px]:rounded-xl min-h-80"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")`
          }}
        >
          <div className="flex p-4">
            <p className="text-white tracking-light text-[28px] font-bold leading-tight">
              Power Up Your Outdoors
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
