
import { Star } from "lucide-react";

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Michael Thompson",
      rating: 5,
      review: "Exceptional quality and fast delivery. The mower exceeded my expectations!",
      product: "Latest Mower",
      verified: true
    },
    {
      id: 2,
      name: "Sarah Johnson",
      rating: 5,
      review: "Best chainsaw I've ever owned. Professional grade quality.",
      product: "Pro Chainsaw",
      verified: true
    },
    {
      id: 3,
      name: "David Miller",
      rating: 4,
      review: "Great grill, perfect for family barbecues. Highly recommend!",
      product: "Elite Grill",
      verified: true
    }
  ];

  const overallStats = {
    averageRating: 4.8,
    totalReviews: 2847,
    fiveStarPercentage: 87,
    fourStarPercentage: 10,
    threeStarPercentage: 2,
    twoStarPercentage: 1,
    oneStarPercentage: 0
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-400"
        }`}
      />
    ));
  };

  return (
    <div className="py-12 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-white text-[28px] font-bold leading-tight tracking-[-0.015em] mb-4">
          What Our Customers Say
        </h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="flex items-center gap-1">
            {renderStars(5)}
          </div>
          <span className="text-white text-xl font-bold">{overallStats.averageRating}</span>
          <span className="text-text-green">({overallStats.totalReviews.toLocaleString()} reviews)</span>
        </div>
        <p className="text-text-green">Join thousands of satisfied customers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-medium-green/50 rounded-xl p-6 border border-light-green hover:border-accent-green transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="text-white font-medium">{review.name}</h4>
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
              </div>
            </div>
            
            <p className="text-text-green text-sm mb-3">"{review.review}"</p>
            
            <div className="flex items-center justify-between text-xs">
              <span className="text-text-green">Product: {review.product}</span>
              {review.verified && (
                <span className="text-accent-green font-medium">✓ Verified Purchase</span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-accent-green hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
          Read All Reviews
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
