
import { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon!",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f4d03f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Visit Us Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Come experience the authentic taste of Sharjah. We're always happy to serve you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location */}
            <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Al Jubail Area, Sharjah<br />
                    United Arab Emirates<br />
                    <span className="text-sm text-gray-500">Near Al Jubail Bus Station</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-mint-500 to-mint-600 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Contact</h3>
                  <div className="space-y-2">
                    <p className="text-gray-600">
                      <span className="font-medium">Phone:</span> +971-XX-XXX-XXXX
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">WhatsApp:</span> +971-XX-XXX-XXXX
                    </p>
                    <p className="text-gray-600">
                      <span className="font-medium">Email:</span> info@baitalshai.ae
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-mint-500 rounded-2xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-gray-800 mb-2">Opening Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Saturday - Thursday</span>
                      <span className="font-medium text-gray-800">6:00 AM - 12:00 AM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Friday</span>
                      <span className="font-medium text-gray-800">6:00 AM - 1:00 AM</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium mt-3">
                      🟢 Open Now
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Loyalty Program */}
            <div className="backdrop-blur-lg bg-gradient-to-r from-gold-500/10 to-mint-500/10 border border-gold-200 rounded-3xl p-8 shadow-xl">
              <h3 className="font-display text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🏆</span>
                Loyalty Program
              </h3>
              <p className="text-gray-700 mb-4">
                Order 5 times and get your 6th Karak tea absolutely free!
              </p>
              <div className="flex items-center space-x-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-8 h-8 bg-gold-200 rounded-full flex items-center justify-center text-sm font-bold text-gold-700">
                      {i + 1}
                    </div>
                  ))}
                </div>
                <span className="text-2xl">→</span>
                <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold">
                  FREE
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl p-8 shadow-xl">
            <div className="flex items-center space-x-3 mb-6">
              <Mail className="w-8 h-8 text-mint-600" />
              <h3 className="font-display text-2xl font-semibold text-gray-800">Send us a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                    placeholder="+971-XX-XXX-XXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border-gray-300 rounded-xl focus:ring-2 focus:ring-mint-500 focus:border-transparent resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:scale-100"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16">
          <div className="backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl overflow-hidden shadow-xl">
            <div className="h-80 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Interactive Map</h3>
                <p className="text-gray-500">
                  Click to view our location on Google Maps
                </p>
                <Button
                  onClick={() => window.open('https://maps.google.com/maps?q=Al+Jubail+Sharjah+UAE', '_blank')}
                  className="mt-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white rounded-xl"
                >
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
