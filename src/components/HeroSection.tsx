
import { useState, useEffect } from 'react';
import { Star, Clock, MapPin, Gift, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000&auto=format&fit=crop',
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
    <section id="home" className="relative min-h-screen overflow-hidden bg-gray-950">
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
              className="w-full h-full object-cover scale-110 animate-ken-burns"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        {/* Enhanced Dark Overlay for futuristic look */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/90 via-gray-900/85 to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-blue-900/15 to-purple-900/20"></div>
      </div>

      {/* Enhanced Futuristic Grid Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-cyber-grid bg-[length:50px_50px]"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          
          {/* PROMINENT LOYALTY BADGE - Top Featured */}
          <div className="mb-12 animate-fade-in">
            <div className="relative inline-block group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gold-400 via-cyan-400 to-gold-400 rounded-3xl blur opacity-60 group-hover:opacity-80 animate-glow"></div>
              
              {/* Main Badge */}
              <div className="relative backdrop-blur-xl bg-gradient-to-r from-gold-500/30 to-cyan-500/30 border-2 border-gold-400/50 rounded-3xl p-6 md:p-8 shadow-2xl hover:scale-105 transition-all duration-500">
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center shadow-xl animate-pulse-glow">
                      <Gift className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <Zap className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-center md:text-left">
                    <div className="text-gold-300 font-bold text-xl md:text-2xl lg:text-3xl mb-2">
                      🎉 LOYALTY REWARDS PROGRAM
                    </div>
                    <div className="text-cyan-200 text-lg md:text-xl font-semibold mb-1">
                      Order 5 Times = Get 1 FREE Karak Tea!
                    </div>
                    <div className="text-gray-300 text-sm md:text-base">
                      Start collecting your rewards today
                    </div>
                  </div>
                  
                  {/* Counter Badge */}
                  <div className="flex items-center space-x-2">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center border-4 border-gold-300/50">
                      <span className="text-white font-bold text-lg md:text-xl">5</span>
                    </div>
                    <div className="text-4xl">→</div>
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center border-4 border-cyan-300/50">
                      <span className="text-white font-bold text-lg md:text-xl">1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="inline-flex items-center space-x-2 backdrop-blur-md bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-200 font-medium text-sm">Open Now</span>
          </div>

          {/* Main Glass Card */}
          <div className="backdrop-blur-2xl bg-white/5 rounded-3xl border border-cyan-400/20 p-6 md:p-8 lg:p-12 max-w-5xl mx-auto shadow-2xl animate-fade-in">
            
            {/* Main Headline */}
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              Sharjah's Favorite
              <span className="block bg-gradient-to-r from-gold-400 via-cyan-400 to-gold-600 bg-clip-text text-transparent animate-pulse-glow">
                Karak & Club Sandwich
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-cyan-200">
                Experience
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Authentic flavors, premium quality, and warm hospitality in the heart of Al Jubail
            </p>

            {/* Features */}
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-8">
              <div className="flex items-center space-x-2 text-white backdrop-blur-md bg-white/10 rounded-xl px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-gold-400 fill-current" />
                <span className="font-medium">4.8 Rating</span>
              </div>
              <div className="flex items-center space-x-2 text-white backdrop-blur-md bg-white/10 rounded-xl px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
                <span className="font-medium">6 AM - 12 AM</span>
              </div>
              <div className="flex items-center space-x-2 text-white backdrop-blur-md bg-white/10 rounded-xl px-3 py-2 md:px-4 md:py-2 text-sm md:text-base">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-gold-400" />
                <span className="font-medium">Al Jubail, Sharjah</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={scrollToMenu}
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                Explore Menu
              </Button>
              <Button 
                variant="outline"
                className="w-full sm:w-auto backdrop-blur-md bg-white/10 border-cyan-400/50 text-white hover:bg-cyan-500/20 px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/971XXXXXXXXX?text=Hello! I would like to place an order.', '_blank')}
              >
                Order Now
              </Button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mt-8 md:mt-12 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Happy Customers' },
              { number: '50+', label: 'Menu Items' },
              { number: '5★', label: 'Average Rating' },
              { number: '3', label: 'Years Serving' },
            ].map((stat, index) => (
              <div key={index} className="backdrop-blur-md bg-white/10 border border-cyan-400/20 rounded-xl p-3 md:p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                <div className="font-bold text-xl md:text-2xl text-cyan-300">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes ken-burns {
          0%, 100% { transform: scale(1.1) translateX(0) translateY(0); }
          25% { transform: scale(1.15) translateX(-1%) translateY(-1%); }
          50% { transform: scale(1.12) translateX(1%) translateY(1%); }
          75% { transform: scale(1.18) translateX(-0.5%) translateY(0.5%); }
        }
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
