
import { Heart, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Futuristic Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Bait Al Shai Al Sailani
                </h3>
                <p className="text-cyan-300">Authentic Café Experience</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Experience the finest Karak tea, premium club sandwiches, and authentic local flavors 
              in the heart of Al Jubail, Sharjah. Your neighborhood café since 2021.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => window.open('https://instagram.com/baitalshai', '_blank')}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-cyan-400/20 rounded-xl flex items-center justify-center hover:bg-cyan-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                <Instagram className="w-5 h-5 text-cyan-400" />
              </button>
              <button
                onClick={() => window.open('https://facebook.com/baitalshai', '_blank')}
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Facebook className="w-5 h-5 text-blue-400" />
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
                    className="text-gray-400 hover:text-cyan-300 transition-colors duration-200 hover:translate-x-1 transform"
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
                <MapPin className="w-5 h-5 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Al Jubail Area<br />
                    Sharjah, UAE
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-300 text-sm">+971-XX-XXX-XXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <p className="text-gray-300 text-sm">info@baitalshai.ae</p>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-3">Opening Hours</h5>
              <div className="text-sm text-gray-300 space-y-1">
                <div className="flex justify-between">
                  <span>Sat - Thu</span>
                  <span className="text-cyan-300">6 AM - 12 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="text-cyan-300">6 AM - 1 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>in Sharjah, UAE</span>
            </div>
            <div className="text-gray-400 text-sm">
              © {currentYear} Bait Al Shai Al Sailani Café. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
