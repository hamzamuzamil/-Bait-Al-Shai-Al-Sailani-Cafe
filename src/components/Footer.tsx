
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Bait Al Shai Al Sailani
                </h3>
                <p className="text-gold-300">Authentic Café Experience</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Experience the finest Karak tea, premium club sandwiches, and authentic local flavors 
              in the heart of Al Jubail, Sharjah. Your neighborhood café since 2021.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://instagram.com/baitalshai', '_blank')}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </button>
              <button
                onClick={() => window.open('https://facebook.com/baitalshai', '_blank')}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Menu', href: '#menu' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Reviews', href: '#reviews' },
                { name: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-gold-300 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Al Jubail Area<br />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold-400" />
                <p className="text-gray-300 text-sm">+971-XX-XXX-XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold-400" />
                <p className="text-gray-300 text-sm">info@baitalshai.ae</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-3">Opening Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Sat - Thu</span>
                  <span>6 AM - 12 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>6 AM - 1 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-300 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>in Sharjah, UAE</span>
            </div>
            <div className="text-gray-300 text-sm">
              © {currentYear} Bait Al Shai Al Sailani Café. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
