
import { useState, useEffect } from 'react';
import { Menu, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-md bg-white/80 shadow-lg border-b border-white/20' 
        : 'backdrop-blur-sm bg-white/60'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-semibold text-lg text-gray-800">
                Bait Al Shai Al Sailani
              </h1>
              <p className="text-xs text-gray-600">Authentic Café Experience</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-700 hover:text-gold-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+971-XX-XXX-XXXX</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Al Jubail, Sharjah</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-lg bg-white/90 border-b border-white/20 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-gold-600 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 py-1">
                  <Phone className="w-4 h-4" />
                  <span>+971-XX-XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 py-1">
                  <MapPin className="w-4 h-4" />
                  <span>Al Jubail, Sharjah</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
