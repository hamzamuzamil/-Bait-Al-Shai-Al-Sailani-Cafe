
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=800&auto=format&fit=crop',
      title: 'Authentic Karak Tea',
      description: 'Our signature blend served fresh',
    },
    {
      url: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=800&auto=format&fit=crop',
      title: 'Premium Club Sandwiches',
      description: 'Freshly made with quality ingredients',
    },
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop',
      title: 'Fresh Beverages',
      description: 'Cold drinks and shakes for hot days',
    },
    {
      url: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop',
      title: 'Cozy Café Ambiance',
      description: 'Perfect spot for friends and family',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M0 0l100 100M100 0L0 100' stroke='%2300ffff' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Experience Our Café
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Take a visual journey through our cozy ambiance, delicious food, and happy moments
          </p>
        </div>

        {/* Main Gallery Slider */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="backdrop-blur-2xl bg-white/5 border border-cyan-400/20 rounded-3xl overflow-hidden shadow-2xl shadow-cyan-500/10">
            <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Image Info */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <div className="backdrop-blur-xl bg-white/10 border border-cyan-400/30 rounded-2xl p-6">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-2 text-cyan-200">
                        {image.title}
                      </h3>
                      <p className="text-lg text-gray-200">
                        {image.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/10 hover:bg-cyan-500/20 text-white border border-cyan-400/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ArrowLeft className="w-6 h-6" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 backdrop-blur-md bg-white/10 hover:bg-cyan-500/20 text-white border border-cyan-400/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
              >
                <ArrowRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-cyan-400 scale-125 shadow-lg shadow-cyan-400/50' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 ${
                index === currentSlide ? 'ring-2 ring-cyan-400 ring-opacity-60' : ''
              }`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-32 md:h-40 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
              {index === currentSlide && (
                <div className="absolute inset-0 bg-cyan-400/20 flex items-center justify-center">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Want to see more? Follow us on social media!</p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 backdrop-blur-md bg-white/5"
              onClick={() => window.open('https://instagram.com/baitalshai', '_blank')}
            >
              📸 Instagram
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-500/50 text-blue-400 hover:bg-blue-500/20 hover:text-blue-300 transition-all duration-300 backdrop-blur-md bg-white/5"
              onClick={() => window.open('https://facebook.com/baitalshai', '_blank')}
            >
              📘 Facebook
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
