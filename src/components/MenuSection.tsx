
import { useState } from 'react';
import { Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('tea');

  const menuCategories = [
    { id: 'tea', name: 'Tea & Karak', icon: '🫖' },
    { id: 'sandwiches', name: 'Club Sandwiches', icon: '🥪' },
    { id: 'shakes', name: 'Shakes', icon: '🥤' },
    { id: 'combos', name: 'Combos', icon: '🍽️' },
  ];

  const menuItems = {
    tea: [
      {
        name: 'Special Karak Tea',
        description: 'Our signature blend with cardamom, ginger, and secret spices',
        price: 'AED 8',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.9,
      },
      {
        name: 'Traditional Chai',
        description: 'Classic Indian-style tea with milk and spices',
        price: 'AED 6',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.7,
      },
      {
        name: 'Mint Tea',
        description: 'Refreshing mint leaves with premium tea blend',
        price: 'AED 7',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.6,
      },
      {
        name: 'Masala Tea',
        description: 'Rich and aromatic with traditional Indian spices',
        price: 'AED 9',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.8,
      },
    ],
    sandwiches: [
      {
        name: 'Premium Club Sandwich',
        description: 'Triple-layered with chicken, lettuce, tomato, and special sauce',
        price: 'AED 25',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.9,
      },
      {
        name: 'Grilled Chicken Club',
        description: 'Juicy grilled chicken with cheese and fresh vegetables',
        price: 'AED 22',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.7,
      },
      {
        name: 'Tuna Club',
        description: 'Fresh tuna with mayo, lettuce, and cucumber',
        price: 'AED 20',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.5,
      },
      {
        name: 'Veggie Deluxe',
        description: 'Loaded with fresh vegetables, cheese, and avocado',
        price: 'AED 18',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.4,
      },
    ],
    shakes: [
      {
        name: 'Mango Shake',
        description: 'Fresh mango blended with milk and ice cream',
        price: 'AED 15',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.8,
      },
      {
        name: 'Chocolate Shake',
        description: 'Rich chocolate with vanilla ice cream and whipped cream',
        price: 'AED 16',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.7,
      },
      {
        name: 'Strawberry Shake',
        description: 'Fresh strawberries with creamy vanilla base',
        price: 'AED 15',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.6,
      },
      {
        name: 'Oreo Shake',
        description: 'Crushed Oreo cookies with vanilla ice cream',
        price: 'AED 17',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.9,
      },
    ],
    combos: [
      {
        name: 'Karak + Club Combo',
        description: 'Special Karak Tea with Premium Club Sandwich',
        price: 'AED 30',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.9,
      },
      {
        name: 'Tea + Shake Combo',
        description: 'Any tea with any shake of your choice',
        price: 'AED 20',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: false,
        rating: 4.7,
      },
      {
        name: 'Family Feast',
        description: '2 Club Sandwiches + 2 Karak + 2 Shakes',
        price: 'AED 75',
        image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?q=80&w=400&auto=format&fit=crop',
        isHot: true,
        rating: 4.8,
      },
    ],
  };

  const handleOrderItem = (itemName: string) => {
    const message = encodeURIComponent(
      `Hello! I would like to order ${itemName} from Bait Al Shai Al Sailani Café. Please let me know the total and delivery details.`
    );
    window.open(`https://wa.me/971XXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23f4d03f\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Delicious Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of authentic flavors and premium quality dishes
          </p>
        </div>

        {/* What's Hot Widget */}
        <div className="backdrop-blur-lg bg-gradient-to-r from-gold-500/10 to-mint-500/10 border border-white/20 rounded-3xl p-6 mb-12 max-w-4xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <h3 className="font-display text-2xl font-semibold text-gray-800">What's Hot Today?</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="bg-gold-100 text-gold-800 border-gold-200">
                🫖 Special Karak Tea
              </Badge>
              <Badge variant="secondary" className="bg-mint-100 text-mint-800 border-mint-200">
                🥪 Premium Club Sandwich
              </Badge>
              <Badge variant="secondary" className="bg-gold-100 text-gold-800 border-gold-200">
                🥤 Mango Shake
              </Badge>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`backdrop-blur-md border rounded-2xl px-6 py-4 transition-all duration-300 hover:scale-105 ${
                activeTab === category.id
                  ? 'bg-gold-500/20 border-gold-400/30 text-gold-800 shadow-lg'
                  : 'bg-white/60 border-white/30 text-gray-700 hover:bg-white/80'
              }`}
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{category.icon}</span>
                <span className="font-semibold">{category.name}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems[activeTab as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={index}
              className="group backdrop-blur-lg bg-white/80 border border-white/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hot Badge */}
                {item.isHot && (
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-red-500 text-white border-0 animate-pulse">
                      🔥 Hot
                    </Badge>
                  </div>
                )}
                {/* Rating */}
                <div className="absolute top-3 right-3 backdrop-blur-md bg-white/90 rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-gold-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-800">{item.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-gray-800 mb-2 group-hover:text-gold-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Price and Order */}
                <div className="flex items-center justify-between">
                  <div className="font-bold text-xl text-gold-600">
                    {item.price}
                  </div>
                  <Button
                    onClick={() => handleOrderItem(item.name)}
                    size="sm"
                    className="bg-gradient-to-r from-mint-500 to-mint-600 hover:from-mint-600 hover:to-mint-700 text-white rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Order Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={() => window.open('https://wa.me/971XXXXXXXXX?text=Could you please send me the complete menu?', '_blank')}
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
          >
            View Complete Menu on WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
