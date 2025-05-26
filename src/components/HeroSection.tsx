
import { useState, useEffect } from 'react';
import { Star, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToMenu = () => {
    const element = document.querySelector('#menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Background Images with Ken Burns Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Café ambiance ${index + 1}`}
              className="w-full h-full object-cover scale-110 animate-[ken-burns_20s_ease-in-out_infinite]"
              style={{
                animationDelay: `${index * 5}s`,
              }}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          {/* Main Glass Card */}
          <div className="backdrop-blur-lg bg-white/10 rounded-3xl border border-white/20 p-8 md:p-12 max-w-4xl mx-auto shadow-2xl">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-green-100 font-medium text-sm">Open Now</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Sharjah's Favorite
              <span className="block bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                Karak & Club Sandwich
              </span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-medium text-mint-200">
                Spot
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 font-light max-w-2xl mx-auto">
              Experience authentic flavors, premium quality, and warm hospitality in the heart of Al Jubail
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
              <div className="flex items-center space-x-2 text-white">
                <Star className="w-5 h-5 text-gold-400 fill-current" />
                <span className="font-medium">4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <Clock className="w-5 h-5 text-mint-400" />
                <span className="font-medium">6 AM - 12 AM</span>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <MapPin className="w-5 h-5 text-gold-400" />
                <span className="font-medium">Al Jubail, Sharjah</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToMenu}
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Explore Menu
              </Button>
              <Button 
                variant="outline"
                className="backdrop-blur-md bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/971XXXXXXXXX?text=Hello! I would like to place an order.', '_blank')}
              >
                Order Now
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '50+', label: 'Menu Items' },
              { number: '5★', label: 'Average Rating' },
              { number: '3', label: 'Years Serving' },
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-4">
                <div className="font-bold text-2xl text-white">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ken-burns {
          0%, 100% { transform: scale(1.1) translateX(0) translateY(0); }
          25% { transform: scale(1.15) translateX(-1%) translateY(-1%); }
          50% { transform: scale(1.12) translateX(1%) translateY(1%); }
          75% { transform: scale(1.18) translateX(-0.5%) translateY(0.5%); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
