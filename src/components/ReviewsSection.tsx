
import { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      name: 'Ahmed Al Mansouri',
      rating: 5,
      comment: 'Best Karak in Sharjah! The taste is authentic and the service is excellent. Been coming here for 2 years and never disappointed.',
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Fatima Hassan',
      rating: 5,
      comment: 'Love their club sandwiches! Fresh ingredients and perfect portions. The café has a cozy atmosphere perfect for meetings.',
      date: '1 week ago',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b590?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Mohammad bin Rashid',
      rating: 5,
      comment: 'Excellent shakes and friendly staff. Clean environment and reasonable prices. Highly recommended for families.',
      date: '2 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Sarah Abdullah',
      rating: 4,
      comment: 'Great place for quick bites. The Karak tea is amazing and reminds me of home. Will definitely visit again!',
      date: '3 weeks ago',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Omar Al Zaabi',
      rating: 5,
      comment: 'Outstanding quality and taste! The staff remembers my usual order. This place feels like a second home.',
      date: '1 month ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-gold-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-mint-50 to-gold-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"80\" height=\"80\" viewBox=\"0 0 80 80\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%2358d68d\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M0 0h40v40H0V0zm40 40h40v40H40V40z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Read authentic reviews from our valued customers who keep coming back for more
          </p>
        </div>

        {/* Google Rating Overview */}
        <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-8 mb-12 max-w-2xl mx-auto text-center shadow-xl">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-4xl font-bold text-gray-800">4.8</div>
            <div className="flex space-x-1">
              {renderStars(5)}
            </div>
          </div>
          <p className="text-gray-600 mb-2">Based on 150+ Google Reviews</p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
            <span>Powered by</span>
            <div className="flex items-center space-x-1">
              <span className="text-blue-500 font-semibold">G</span>
              <span className="text-red-500 font-semibold">o</span>
              <span className="text-gold-500 font-semibold">o</span>
              <span className="text-blue-500 font-semibold">g</span>
              <span className="text-green-500 font-semibold">l</span>
              <span className="text-red-500 font-semibold">e</span>
            </div>
          </div>
        </div>

        {/* Main Review Display */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="backdrop-blur-lg bg-white/60 border border-white/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="relative h-80 flex items-center justify-center p-8">
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ${
                    index === currentReview 
                      ? 'opacity-100 translate-x-0' 
                      : index < currentReview 
                        ? 'opacity-0 -translate-x-full' 
                        : 'opacity-0 translate-x-full'
                  }`}
                >
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-gold-400 mb-6 mx-auto opacity-60" />
                  
                  {/* Review Content */}
                  <blockquote className="text-center mb-6">
                    <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                      "{review.comment}"
                    </p>
                  </blockquote>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-4">
                    {renderStars(review.rating)}
                  </div>

                  {/* Reviewer Info */}
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                    />
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-800">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview 
                    ? 'bg-gold-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={index}
              className="backdrop-blur-md bg-white/70 border border-white/30 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{review.name}</h4>
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                "{review.comment}"
              </p>
              <p className="text-xs text-gray-500 mt-3">{review.date}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Had a great experience? Share your review!</p>
          <button
            onClick={() => window.open('https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review', '_blank')}
            className="backdrop-blur-md bg-gradient-to-r from-mint-500/80 to-mint-600/80 hover:from-mint-600/90 hover:to-mint-700/90 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg border border-white/20"
          >
            Write a Google Review
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
